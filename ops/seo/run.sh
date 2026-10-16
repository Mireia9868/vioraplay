#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
CONFIG_DIR="${VIORA_CONFIG_DIR:-$HOME/.config/vioraplay-seo}"
# User-owned file, chmod 600; never commit credentials.
set -a
source "$CONFIG_DIR/secrets.env"
set +a
exec "$ROOT/.venv-seo/bin/python" "$ROOT/ops/seo/daily.py" --config "$CONFIG_DIR/config.json" --send
