From php:7.3.1-apache

Add jdk-11.0.2_linux-x64_bin.tar.gz  /etc



ENV  JAVA_HOME    /etc/jdk-11.0.2
ENV  JRE_HOME  $JAVA_HOME/lib
ENV  PATH          $JAVA_HOME/bin:$PATH


COPY java     /var/www/html

RUN chmod 777    /var/www/html/