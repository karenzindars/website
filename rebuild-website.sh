#!/bin/bash

function rebuild_website {
  rm -rf img/ static/ asset-manifest.json index.html
  cd website
  npm run build
  cp -r build/* ..
  cd ..
}

rebuild_website
