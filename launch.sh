#!/bin/sh

rm -rf /app/dist

git checkout .
git switch release/main
git pull

cp -f /app/.docker/nginx/prod.conf /tmp/prod.conf
envsubst /app/dist < /tmp/prod.conf > /etc/nginx/nginx.conf

pnpm i
pnpm build

nginx -g "daemon off;"