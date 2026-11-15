#!/usr/bin/env bash
set -uo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
SITEMAP="${SCRIPT_DIR}/sitemap.xml"
XSD_URL="https://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
EXPECTED_ORIGIN="https://coregg.pages.dev/"
ERRORS=0
TOTAL=0
TMP_DIR="$(mktemp -d)" || { echo "ERROR: unable to create temporary directory" >&2; exit 2; }
trap 'rm -rf "$TMP_DIR"' EXIT

if [[ ! -f "$SITEMAP" ]]; then
  echo "ERROR: sitemap.xml not found at $SITEMAP" >&2
  exit 2
fi
if ! command -v xmllint >/dev/null 2>&1; then
  echo "ERROR: xmllint is required (install libxml2-utils on Debian/Ubuntu or use an environment with xmllint)." >&2
  exit 2
fi
if ! command -v curl >/dev/null 2>&1; then
  echo "ERROR: curl is required." >&2
  exit 2
fi

if curl -fsS --max-time 30 "$XSD_URL" -o "$TMP_DIR/sitemap.xsd"; then
  if xmllint --noout --schema "$TMP_DIR/sitemap.xsd" "$SITEMAP"; then
    echo "XML/XSD validation: PASS"
  else
    echo "ERROR: XML failed sitemap.org XSD validation"
    ERRORS=$((ERRORS + 1))
  fi
else
  echo "ERROR: unable to download sitemap.org XSD for validation"
  ERRORS=$((ERRORS + 1))
fi

if ! xmllint --noout "$SITEMAP" 2>/dev/null; then
  echo "ERROR: sitemap.xml is not well-formed XML"
  ERRORS=$((ERRORS + 1))
else
  if ! xmllint --format "$SITEMAP" | sed -n 's/^[[:space:]]*<loc>\(.*\)<\/loc>[[:space:]]*$/\1/p' > "$TMP_DIR/urls.txt"; then
    echo "ERROR: could not extract sitemap URLs"
    ERRORS=$((ERRORS + 1))
  fi
fi

if [[ -f "$TMP_DIR/urls.txt" ]]; then
  while IFS= read -r url; do
    [[ -z "$url" ]] && continue
    TOTAL=$((TOTAL + 1))
    if [[ "$url" != "$EXPECTED_ORIGIN"* || "$url" == *\?* ]]; then
      echo "ERROR: non-canonical origin or query parameter: $url"
      ERRORS=$((ERRORS + 1))
      continue
    fi
    status="$(curl -s -o /dev/null -w "%{http_code}" --max-time 30 "$url" 2>/dev/null || true)"
    if [[ "$status" != "200" ]]; then
      echo "ERROR: HTTP ${status:-request-failed} for $url"
      ERRORS=$((ERRORS + 1))
    fi
  done < "$TMP_DIR/urls.txt"
fi

BYTES="$(wc -c < "$SITEMAP" | tr -d '[:space:]')"
printf '\nSummary: total URLs=%s, sitemap size=%s bytes, errors=%s\n' "$TOTAL" "$BYTES" "$ERRORS"
if [[ "$ERRORS" -gt 0 ]]; then
  exit 1
fi
printf 'Submit manually in Google Search Console: select https://coregg.pages.dev/ > Indexing > Sitemaps > enter sitemap.xml > Submit.\n'