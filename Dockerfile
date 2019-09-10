FROM nginx
MAINTAINER Hai Liang Wang <hain@chatopera.com>

ARG VCS_REF

LABEL org.label-schema.vcs-ref=$VCS_REF \
          org.label-schema.vcs-url="https://gitlab.chatopera.com/chatopera/infocenter"


COPY ./dist/_site /usr/share/nginx/html