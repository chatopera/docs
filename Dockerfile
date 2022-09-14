FROM nginx
MAINTAINER Hai Liang Wang <hain@chatopera.com>

ARG VCS_REF

LABEL org.label-schema.vcs-ref=$VCS_REF \
          org.label-schema.vcs-url="https://gitlab.chatopera.com/chatopera/docs"


COPY ./dist/_site /usr/share/nginx/html
COPY ./assets/default.conf /etc/nginx/conf.d/default.conf
COPY ./assets/404.html /usr/share/nginx/html/404.html
COPY ./assets/50x.html /usr/share/nginx/html/50x.html