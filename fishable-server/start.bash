#!/bin/bash

# enable nvm in bash file
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"


nvm use --lts

node --version

npm run server

