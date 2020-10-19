#!/bin/bash

# this script is used in .travis.yml

# this script is being made executable with
# chmod ugo+x netlify_deploy.sh

# set flags for execution of this file:
# -e: make sure command returns non-zero exit code as soon as somehting fails
set -e

# version file name written by .releaserc
VERSION_FILE=./dist/version.txt
VERSION="Deploy without new version"

if [ -f "$VERSION_FILE" ];
then
  RAW_VERSION="$(cat $VERSION_FILE)"
  if [ $RAW_VERSION != '0.0.0' ]
  then
    VERSION=$RAW_VERSION
  fi
fi

# Deploy  on Netlify
netlify deploy --prod --message "::$VERSION::" --site $NETLIFY_SITE_ID --auth $NETLIFY_AUTH_TOKEN --dir ./dist/
