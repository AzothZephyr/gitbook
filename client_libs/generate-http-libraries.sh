#!/bin/bash

# check if openapi generator is installed, if not install it
if ! command -v openapi-generator &> /dev/null
then
    # install w brew and update path env var
    echo "openapi generator cli not found. Installing..."
    brew install openapi-generator
    source ~/.zshrc
fi

# urls of the openapi spec files
IR_API_URL="https://raw.githubusercontent.com/cubexch/gitbook/main/generated/core/ir_api_30.json"
MD_API_URL="https://raw.githubusercontent.com/cubexch/gitbook/main/generated/core/md_api_30.json"
OS_API_URL="https://raw.githubusercontent.com/cubexch/gitbook/main/generated/core/os_api_30.json"

# local paths of the openapi spec files
IR_API_FILE="specs/ir_api_30.json"
MD_API_FILE="specs/md_api_30.json"
OS_API_FILE="specs/os_api_30.json"

# directory to store openapi spec files
SPEC_DIR="specs"
mkdir -p $SPEC_DIR

# download openapi spec files, comment out as we are using fixed local files
curl --silent --output $SPEC_DIR/ir_api_30.json $IR_API_URL
curl --silent --output $SPEC_DIR/md_api_30.json $MD_API_URL
curl --silent --output $SPEC_DIR/os_api_30.json $OS_API_URL

# languages to generate
LANGUAGES=("go") # "rust" "typescript")

# directory structure
BASE_DIR="api_clients"
mkdir -p $BASE_DIR

# function to generate client libraries
generate_client() {
    local lang=$1
    local spec_file=$2
    local name=$3

    OUTPUT_DIR="$BASE_DIR/$lang/$name"
    mkdir -p $OUTPUT_DIR

    echo "Generating $lang client for $name..."
    openapi-generator generate \
            -i $spec_file \
            -g $lang \
            -o $OUTPUT_DIR \
            # --skip-validate-spec
            # uncomment the above to ignore .schema.items is not of type `object` or
            # .schema.items is missing errors
}

# generate libraries for each language and each api file
for lang in "${LANGUAGES[@]}"; do
    echo 'generating ir_api client libraries for '$lang'...'
    echo '-------------------------------------------------'
    generate_client $lang $IR_API_FILE "ir_api"
    echo -e '-------------------------------------------------\n'
    echo 'generating md_api client libraries for '$lang'...'
    echo '-------------------------------------------------'
    generate_client $lang $MD_API_FILE "md_api"
    echo -e '-------------------------------------------------\n'
    echo 'generating os_api client libraries for '$lang'...'
    echo '-------------------------------------------------'
    generate_client $lang $OS_API_FILE "os_api"
    echo -e '-------------------------------------------------\n'
done

echo "Client libraries have been generated in the '$BASE_DIR' directory."
