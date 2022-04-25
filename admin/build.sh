#! /bin/bash 
###########################################
#
###########################################

# constants
baseDir=$(cd `dirname "$0"`;pwd)
SITE=$baseDir/../dist
# functions

# main 
[ -z "${BASH_SOURCE[0]}" -o "${BASH_SOURCE[0]}" = "$0" ] || return

## Resolve docfx cmd
CMD_PATH=docfx
if [ -f /opt/docfx/docfx.exe ]; then
    echo "Use docfx with mono"
    CMD_PATH="mono /opt/docfx/docfx.exe"
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

if [ ! -d $baseDir/../tmp ]; then
    mkdir -p $baseDir/../tmp
fi

rm -rf $SITE/_site
# rm -rf obj
$CMD_PATH build -o $SITE ./docfx.json | tee $baseDir/../tmp/log

# config to generate pdfs
# https://dotnet.github.io/docfx/tutorial/docfx.exe_user_manual.html#24-generate-pdf-documentation-command-docfx-pdf
# docfx pdf -o $SITE

# if [ $? -eq 0 ]; then
#     start http://localhost:8027/products/chatbot-platform/index.html
#     echo "Open browser ..."
# fi