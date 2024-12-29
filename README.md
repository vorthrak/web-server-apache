# web-server-apache
## instalation in server
- ```sudo apt update -y```
- ```sudo apt install apache2 php libapache2-mod-php -y```
- ``` sudo systemctl start apache2```
- ```sudo systemctl enable apache2```
- ```cd /var/www/html```
- ```sudo rm index.html```
- ```sudo mkdir css js```
- ```sudo nano index.html```
- ```sudo nano css/style.css```
- ```sudo nano js/script.js```
- ```sudo systemctl restart apache2```
