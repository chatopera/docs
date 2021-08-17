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
if [ ! -d $SITE/_site ]; then
    mkdir -p $SITE/_site
fi
nohup $baseDir/live.sh 2>&1 >>/dev/null &
cd $baseDir/../docfx_project
set -x
docfx serve --hostname ${HOST_IP:-localhost} --port 8027 $SITE/_site
