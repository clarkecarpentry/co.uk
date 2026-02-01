#!/usr/bin/env bash
set -euo pipefail

# Bump the npm package version to match a release.
# Usage:
#   scripts/bump-version.sh 1.1.0        # explicit version
#   scripts/bump-version.sh minor         # semver bump (major|minor|patch)

if [[ $# -ne 1 ]]; then
	echo "Usage: $0 <version|major|minor|patch>"
	exit 1
fi

VERSION="$1"

# npm version updates package.json (--no-git-tag-version skips auto-commit/tag)
npm version "$VERSION" --no-git-tag-version >/dev/null

RESOLVED=$(node -p "require('./package.json').version")
echo "package.json → $RESOLVED"
