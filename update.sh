#!/bin/bash
echo "scp start"

scp -rv .nuxt static ecosystem.config.js nuxt.config.js package.json tsconfig.json yarn.lock root@129.226.142.123:/data/website/cst/website  

echo "scp end"