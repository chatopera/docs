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
docker run -it --rm -p 8027:8027 -v $PWD:/work chatopera/docfx:2.45 "/work/admin/serve.sh"
