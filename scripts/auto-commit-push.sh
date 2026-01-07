#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_DIR"

BRANCH="$(git rev-parse --abbrev-ref HEAD)"

echo "[auto-commit] Watching repo at $REPO_DIR on branch $BRANCH"

# Debounce window in seconds
DELAY=${AUTO_COMMIT_DELAY_SECONDS:-5}

while true; do
  # Check for unstaged or staged changes
  if ! git diff --quiet || ! git diff --cached --quiet; then
    # Stage all
    git add -A || true
    # If there are staged changes, commit
    if ! git diff --cached --quiet; then
      TS=$(date -Iseconds)
      MSG=${AUTO_COMMIT_MESSAGE:-"chore(auto): sync changes $TS"}
      # Make small, clear commit
      git commit -m "$MSG" || true
      # Try pushing; if it fails, keep watching and try again next cycle
      if git push --no-verify >/dev/null 2>&1; then
        echo "[auto-commit] Pushed at $TS"
      else
        echo "[auto-commit] Push failed (auth/network). Will retry..."
      fi
    fi
  fi
  sleep "$DELAY"
done
