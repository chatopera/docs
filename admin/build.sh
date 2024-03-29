#! /bin/bash 
###########################################
#
###########################################

# constants
baseDir=$(cd `dirname "$0"`;pwd)
DIST=$baseDir/../dist
# functions

# main 
[ -z "${BASH_SOURCE[0]}" -o "${BASH_SOURCE[0]}" = "$0" ] || return

###################################
# Resolve docfx cmd
###################################
CMD_PATH=docfx
if [ -f /opt/docfx/docfx ]; then
    CMD_PATH="/opt/docfx/docfx"
elif [ -f /c/Users/Administrator/.dotnet/tools/docfx.exe ]; then
    CMD_PATH="/c/Users/Administrator/.dotnet/tools/docfx.exe"
fi
$CMD_PATH --version

cd $baseDir/../docfx_project
# echo "Kill serving ..."
# for x in `ps -ef|grep docfx|awk '{ print $2 }'`; do
#     # ps -p $x 2>&1 >>/dev/null
#     ps -p $x
#     if [ $? == 0 ];then
#         # kill -9 $x 2>&1 >>/dev/null ;
#         kill -9 $x
#     fi
# done

echo "Start to build ..."

if [ ! -e $DIST ]; then
    mkdir -p $DIST
else
    rm -rf $DIST
    mkdir -p $DIST
fi

if [ ! -d $baseDir/../tmp ]; then
    mkdir -p $baseDir/../tmp
fi

rm -rf $DIST/_site
# rm -rf obj
set -x

if [ -x "$(command -v wslpath)" ]; then
    # build on WSL
    $CMD_PATH build -o `wslpath -w $DIST` ./docfx.json | tee $baseDir/../tmp/log
else 
    $CMD_PATH build -o $DIST ./docfx.json | tee $baseDir/../tmp/log
fi

if [ -d $DIST/_site ]; then
    cp $baseDir/../assets/styles/*.js $DIST/_site/styles
fi

# Tune index.json for search optimize
node -e "\
const fs = require('fs'); \
const file = '$DIST/_site/index.json'; \
const data = require(file); \
const keys = Object.keys(data); \
for(let key of keys) { \
    data[key]['keywordsLower'] = data[key].keywords ? data[key].keywords.toLowerCase():''; \
    data[key]['titleLower'] = data[key].title ? data[key].title.toLowerCase():''; \
    delete data[key]['keywords']; \
} \
fs.writeFileSync(file, JSON.stringify(data)); \
"

cd $DIST/_site
gzip index.json

# config to generate pdfs
# https://dotnet.github.io/docfx/tutorial/docfx.exe_user_manual.html#24-generate-pdf-documentation-command-docfx-pdf
# docfx pdf -o $DIST

# if [ $? -eq 0 ]; then
#     start http://localhost:8027/products/chatbot-platform/index.html
#     echo "Open browser ..."
# fi