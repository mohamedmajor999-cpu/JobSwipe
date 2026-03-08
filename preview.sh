#!/usr/bin/env bash
set -euo pipefail

PORT="${1:-4173}"

if ! [[ "$PORT" =~ ^[0-9]+$ ]]; then
  echo "Usage: ./preview.sh [port]"
  exit 1
fi

echo "▶️  JobSwipe MVP preview server"
echo "   Local:   http://localhost:${PORT}"
echo "   Network: http://0.0.0.0:${PORT}"
echo "   Press Ctrl+C to stop"

python3 -m http.server "$PORT"
