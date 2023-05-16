#! /bin/bash 
###########################################
#
###########################################

# constants
baseDir=$(cd `dirname "$0"`;pwd)
DOCKER_DOCFX_PATH=~/packages/dockers/docker.docfx.tgz

# functions

# main 
[ -z "${BASH_SOURCE[0]}" -o "${BASH_SOURCE[0]}" = "$0" ] || return
cd $baseDir/../..

if [ -f $DOCKER_DOCFX_PATH ]; then
    set -x
    docker load < $DOCKER_DOCFX_PATH
    set +x
else
    docker pull chatopera/docfx:2.61.0
fi

docker run --rm --user root --entrypoint /bin/bash -v $PWD:/work chatopera/docfx:2.61.0 -c "/work/admin/build.sh"