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
elif [ -f /mnt/c/Users/Administrator/.dotnet/tools/docfx.exe ]; then
    CMD_PATH="/mnt/c/Users/Administrator/.dotnet/tools/docfx.exe"
fi
$CMD_PATH --version

cd $baseDir/../docfx_project
echo "Start to generate pdf ..."

if [ ! -e $DIST ]; then
    mkdir -p $DIST
fi

# Fix image link not broken issue
rm -rf $DIST/_raw
rm -rf $DIST/images
rm -rf $DIST/docfx_project_products
mkdir -p $DIST/_raw
cp -rf images $DIST/_raw
cp -rf images $DIST

# remove cache
#rm -rf obj

set -x

if [ -x "$(command -v wslpath)" ]; then
    # build on WSL
    $CMD_PATH pdf -o `wslpath -w $DIST` ./docfx.json
else 
    $CMD_PATH pdf -o $DIST ./docfx.json
fi

if [ -f $DIST/docfx_project_products/chatbot-platform.pdf ]; then
    if [ ! -d $DIST/_site/assets/files ]; then
        mkdir -p $DIST/_site/assets/files
    fi

    cp $DIST/docfx_project_products/chatbot-platform.pdf $DIST/_site/assets/files/chatopera_bot_manual.pdf
fi
