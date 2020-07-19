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
cd $baseDir/../docfx_project
inotifywait -mrq -e modify --exclude "(obj|images)" $SRC_PATH | while read file; do
    # log deleted file
    echo ">>" `date` "$file is modified"
    $baseDir/build.sh
    if [ $? == 0 ]; then
       echo "`date` build is done."
       # if run inside docker, auto copy dist files into nginx
       if [ -d /work/dist/_site ]; then
            echo "Copied files for docker ..."
            cd /work/dist/_site && tar cf - .|(cd /var/www/html;tar xf -)
            echo "Done."
       fi
    fi
done
