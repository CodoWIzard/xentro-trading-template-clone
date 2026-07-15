#!/usr/bin/env bash
set -euo pipefail

PROJECT_ID="${VERCEL_PROJECT_ID:-prj_Z7FtqWlDotx3C3cjHQ9Co8Xfxxaj}"
LIVE_URL="${LIVE_URL:-https://xentro-trading-template-clone.vercel.app}"
MARKERS="${DEPLOY_MARKERS:-}"

need() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "Missing required command: $1" >&2
    exit 1
  fi
}

need git
need gh
need vercel
need jq
need curl

local_sha="$(git rev-parse HEAD)"
remote_sha="$(git ls-remote origin refs/heads/main | awk '{print $1}')"

if [ "$local_sha" != "$remote_sha" ]; then
  echo "Git mismatch: local HEAD $local_sha, origin/main $remote_sha" >&2
  exit 1
fi

project_json="$(vercel api "/v10/projects/$PROJECT_ID")"
promoted_sha="$(printf '%s' "$project_json" | jq -r '.targets.production.meta.githubCommitSha // empty')"
promoted_branch="$(printf '%s' "$project_json" | jq -r '.link.productionBranch // empty')"
ready_state="$(printf '%s' "$project_json" | jq -r '.targets.production.readyState // empty')"
ready_substate="$(printf '%s' "$project_json" | jq -r '.targets.production.readySubstate // empty')"
sso_type="$(printf '%s' "$project_json" | jq -r '.ssoProtection.deploymentType // empty')"
deployment_url="$(printf '%s' "$project_json" | jq -r '.targets.production.url // empty')"

if [ "$promoted_sha" != "$local_sha" ]; then
  echo "Vercel mismatch: production $promoted_sha, local/GitHub $local_sha" >&2
  exit 1
fi

if [ "$promoted_branch" != "main" ]; then
  echo "Unexpected Vercel production branch: $promoted_branch" >&2
  exit 1
fi

if [ "$ready_state" != "READY" ] || [ "$ready_substate" != "PROMOTED" ]; then
  echo "Vercel production is not ready/promoted: $ready_state / $ready_substate" >&2
  exit 1
fi

if [ -n "$sso_type" ]; then
  echo "Vercel SSO/deployment protection is enabled: $sso_type" >&2
  exit 1
fi

status_code="$(curl -L -s -o /tmp/myt-live.html -w '%{http_code}' "$LIVE_URL/?v=${local_sha:0:7}")"
if [ "$status_code" != "200" ]; then
  echo "Live URL did not return 200: $status_code" >&2
  exit 1
fi

if [ -n "$MARKERS" ]; then
  IFS='|' read -r -a marker_list <<< "$MARKERS"
  for marker in "${marker_list[@]}"; do
    if ! grep -Fq "$marker" /tmp/myt-live.html; then
      echo "Live HTML marker missing: $marker" >&2
      exit 1
    fi
  done
fi

if [ -n "$deployment_url" ]; then
  deployment_status="$(curl -L -s -o /tmp/myt-deployment.html -w '%{http_code}' "https://$deployment_url/")"
  if [ "$deployment_status" != "200" ]; then
    echo "Deployment URL did not return 200: $deployment_status" >&2
    exit 1
  fi
fi

echo "Deploy verified:"
echo "- commit: $local_sha"
echo "- Vercel production: $deployment_url"
echo "- live URL: $LIVE_URL"
echo "- branch: $promoted_branch"
echo "- state: $ready_state / $ready_substate"
