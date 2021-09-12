#! /bin/bash 
###########################################
#
###########################################

# constants
baseDir=$(cd `dirname "$0"`;pwd)
SRC_PATH=$baseDir/../docfx_project
# functions

# main 
[ -z "${BASH_SOURCE[0]}" -o "${BASH_SOURCE[0]}" = "$0" ] || return
cd $SRC_PATH
if [ ! -d node_modules ]; then
    npm i
fi
# https://github.com/remy/nodemon/blob/master/doc/sample-nodemon.md
./node_modules/nodemon/bin/nodemon.js --config nodemon.json -e md,png,jpg,json,yml --exec sh $baseDir/build.sh