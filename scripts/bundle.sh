#!/usr/bin/env bash
set -eu
set -o pipefail
shopt -s nullglob

SCRIPTS_DIR="${BASH_SOURCE%/*}"
if [[ ! -d "$SCRIPTS_DIR" ]]; then SCRIPTS_DIR="$PWD"; fi

. "$SCRIPTS_DIR/common.sh"

echo "Bundling plugins"


for PLUGIN in wp-content/plugins/*/; do
    if [[ $PLUGIN =~ ${PLUGIN_EXCLUSION_LIST[*]} ]]; then
        continue
    fi

    short_name="$(basename -- $PLUGIN)"
    echo "Found $short_name"

    out_file="output/$short_name.zip"

    if [ -f "$out_file" ] ; then
        echo "Zip file found '$out_file', removing."
        rm "$out_file"
    fi

    cd "wp-content/plugins/"
    zip -r "../../$out_file" $short_name
    cd -
    
    echo "Plugin bundled '$out_file'"
done