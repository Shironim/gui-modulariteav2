#! /usr/bin/bash

pkexec apt-get install python3 php mariadb-server apache2 postgresql postgresql-contrib composer -y && pkexec snap install code --classic
