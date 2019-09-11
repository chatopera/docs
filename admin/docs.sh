#! /bin/bash 
###########################################
#
###########################################

# constants
baseDir=$(cd `dirname "$0"`;pwd)
# functions

# main 
[ -z "${BASH_SOURCE[0]}" -o "${BASH_SOURCE[0]}" = "$0" ] || return
if [ -d $baseDir/../docs ]; then
    rm -rf $baseDir/../docs/*
fi

$baseDir/docker/build.sh

if [ -d $baseDir/../dist/_site ]; then
    cd $baseDir/../dist/_site
    tar cf - .|(cd $baseDir/../docs; tar xf -)
    git add --all
    git commit -m "Update docs"
    git push origin master
else
    echo "Failure."
    exit 1
fi
