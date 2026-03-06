#!/usr/bin/env bash
set -euo pipefail

TARGET_URL="${1:-${BASE_URL:-https://example.test}}"

echo "Running OWASP ZAP baseline scan against: ${TARGET_URL}"
docker run --rm -t owasp/zap2docker-stable zap-baseline.py -t "${TARGET_URL}" -r zap-report.html
