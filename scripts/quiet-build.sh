#!/usr/bin/env bash
set -euo pipefail

LOG_FILE="${LOG_FILE:-/tmp/next-build.log}"

# Run build, capture everything
if pnpm -s build >"$LOG_FILE" 2>&1; then
	echo "✅ build ok"
	exit 0
fi

echo "❌ build failed (showing last 200 lines)"
tail -n 200 "$LOG_FILE"
exit 1
