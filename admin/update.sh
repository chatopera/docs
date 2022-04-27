#! /bin/bash 
###########################################
#
###########################################

# constants
baseDir=$(cd `dirname "$0"`;pwd)
# functions

# main 
[ -z "${BASH_SOURCE[0]}" -o "${BASH_SOURCE[0]}" = "$0" ] || return
cd $baseDir/..
git add --all
git commit -m "Update content"
git push origin master
git push github master

if [ $? -eq 0 ]; then
    if [ -d private ]; then
        cd private
        `pwd`
         set -x
        ./scripts/update.sh
    fi
fi
