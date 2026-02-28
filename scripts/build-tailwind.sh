#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BIN_DIR="$ROOT_DIR/.tools"
BIN_PATH="$BIN_DIR/tailwindcss"
INPUT_CSS="$ROOT_DIR/styles/tailwind.input.css"
OUTPUT_CSS="$ROOT_DIR/styles/tailwind.css"

mkdir -p "$BIN_DIR"

if [[ ! -x "$BIN_PATH" ]]; then
  case "$(uname -sm)" in
    "Darwin arm64")
      BINARY_URL="https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-macos-arm64"
      ;;
    "Darwin x86_64")
      BINARY_URL="https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-macos-x64"
      ;;
    "Linux x86_64")
      BINARY_URL="https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-x64"
      ;;
    "Linux aarch64")
      BINARY_URL="https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-arm64"
      ;;
    *)
      echo "Unsupported platform: $(uname -sm)" >&2
      exit 1
      ;;
  esac

  echo "Downloading Tailwind CLI..."
  curl -L --fail --silent --show-error "$BINARY_URL" -o "$BIN_PATH"
  chmod +x "$BIN_PATH"
fi

echo "Building Tailwind CSS..."
"$BIN_PATH" -i "$INPUT_CSS" -o "$OUTPUT_CSS" --minify

echo "Done: $OUTPUT_CSS"
