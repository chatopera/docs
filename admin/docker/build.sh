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
docker pull chatopera/docfx:2.61.0
docker run --rm --user root --entrypoint /bin/bash -v $PWD:/work chatopera/docfx:2.61.0 -c "/work/admin/build.sh"