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
imageversion=`git rev-parse --short HEAD`

rm -rf dist/_site/

./admin/docker/build.sh

if [ ! -d dist/_site/ ]; then
    echo "Fail to generate site."
    exit 1
fi

docker build --build-arg VCS_REF=`git rev-parse --short HEAD` \
    --no-cache=true \
    --force-rm=true \
    -t dockerhub.qingcloud.com/chatopera/docs:latest .

if [ $? -eq 0 ]; then
    docker push dockerhub.qingcloud.com/chatopera/docs:latest
fi
