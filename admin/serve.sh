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

CMD_PATH=docfx
if [ -f /opt/docfx/docfx.exe ]; then
    echo "Use docfx with mono"
    CMD_PATH="mono /opt/docfx/docfx.exe"
elif [ -f /mnt/c/Users/Administrator/.dotnet/tools/docfx.exe ]; then 
    CMD_PATH="/mnt/c/Users/Administrator/.dotnet/tools/docfx.exe"
fi
$CMD_PATH --version

if [ ! -d $SITE/_site ]; then
    mkdir -p $SITE/_site
fi
cd $baseDir/..
set -x

if [ -x "$(command -v wslpath)" ]; then
    # build on WSL
    SITE=`wslpath -w $SITE/_site`
    $CMD_PATH serve --hostname ${HOST_IP:-localhost} --port 8027 $SITE
else 
    $CMD_PATH serve --hostname ${HOST_IP:-localhost} --port 8027 $SITE/_site
fi


