#!/usr/bin/env bash
set -euo pipefail

if [ "$#" -ne 1 ]; then
  echo "Usage: $0 <new-site-folder>"
  exit 1
fi

SOURCE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TARGET_DIR="$(cd "$SOURCE_DIR/.." && pwd)/$1"

if [ -e "$TARGET_DIR" ]; then
  echo "Target already exists: $TARGET_DIR"
  exit 1
fi

mkdir -p "$TARGET_DIR"
rsync -a --exclude node_modules --exclude .next --exclude .git --exclude .vercel "$SOURCE_DIR/" "$TARGET_DIR/"

cd "$TARGET_DIR"
git init
pnpm install

echo "Created site at $TARGET_DIR"

