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
cd $baseDir/../docfx_project
rm -rf $SITE/_site/*
# rm -rf obj
docfx build -o $SITE ./docfx.json 
