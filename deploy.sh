#!/bin/bash

# 手动部署

# build
npm run build:prod

# deploy
cp -r ./dist/* ../vue-element-admin-demo-gh-pages

cd ../vue-element-admin-demo-gh-pages

# push
git add .

git commit -m 'deploy'

git push

cd -

echo 'deploy success'