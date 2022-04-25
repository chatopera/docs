#! /bin/bash 
###########################################
#
###########################################

# constants
baseDir=$(cd `dirname "$0"`;pwd)
# functions

# main 
[ -z "${BASH_SOURCE[0]}" -o "${BASH_SOURCE[0]}" = "$0" ] || return
cd $baseDir/../..
docker run --rm --user root --entrypoint /bin/bash -v $PWD:/work chatopera/docfx:2.59 "/work/admin/build.sh"
