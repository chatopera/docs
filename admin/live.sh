#! /bin/bash 
###########################################
#
###########################################

# constants
baseDir=$(cd `dirname "$0"`;pwd)
SRC_PATH=$baseDir/../docfx_project
LOGFILE=$baseDir/../tmp/build.log
# functions

# main 
[ -z "${BASH_SOURCE[0]}" -o "${BASH_SOURCE[0]}" = "$0" ] || return
cd $baseDir/..
if [ -d tmp ]; then
    echo "" > tmp/build.log
else
    mkdir tmp
    touch tmp/build.log
fi

cd docfx_project
inotifywait -mrq -e modify --exclude "obj" $SRC_PATH | while read file; do
    # log deleted file
    echo ">>" `date` "$file is modified" >> $LOGFILE
    $baseDir/build.sh >> $LOGFILE
    if [ $? == 0 ]; then
       echo "`date` build is done." >> $LOGFILE
    fi
done
