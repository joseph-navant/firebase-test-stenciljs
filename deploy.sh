#!/bin/sh

if ! [ -z "$(git status -z)" ]; then
  echo "Repository not clean, ensure you have committed all your changes"
  exit 1
fi

BRANCH=$(git branch | grep \* | cut -d ' ' -f2-)

if [ $BRANCH != "develop" ]; then
  echo "Not in develop branch"
else
  # Remove old files
  rm -rf www

  # Build
  if [ "$1" = "--dev" ]; then
    npm run build --dev
  else
    npm run build
  fi

  # Deploy
  if [ $? -eq 0 ]; then
    firebase deploy
  fi

  git add .firebase/hosting.d3d3.cache
  git commit -m "Updating firebase cache file"
fi
