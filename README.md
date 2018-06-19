# expressmysqlapp


## docker-compost.yml

```

version: '3'

services:
  db:
    image: mysql/mysql-server:5.7.22
    ports:
      - 3306:3306 // do not change to other port
    volumes:
      - ./schema:/docker-entrypoint-initdb.d  // init database at first start mysql container, if init failed, please remove /data/db directory
      - ./data/db:/var/lib/mysql 
    environment:
      MYSQL_ROOT_HOST: "%"
      MYSQL_HOST: "localhost"
      MYSQL_ROOT_PASSWORD:  "123456"
      MYSQL_DATABASE: "Pomelo"
      MYSQL_USER: "pomelo"  // do not use root 
      MYSQL_PASSWORD: "123456"
      MYSQL_LOG_CONSOLE: "true"
    restart: always
  
  app:
    build: .
    command: npm start
    links:
      - db
    ports:
      - 3000:3000
    volumes:
      - .:/usr/src/app
      - /usr/src/app/node_modules // npm install worked!

```