FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY ./site-gabriel/* /usr/share/nginx/html

EXPOSE 80
