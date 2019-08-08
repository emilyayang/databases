CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (id int, username varchar(255), textMessage varchar(255), roomname varchar(255));

/* Create other tables and define schemas for them here! */
CREATE TABLE individualMessage (createdAt int, id int);

CREATE TABLE user (allMessages varchar(255), id int, username varchar(255));






CREATE TABLE users (id int, username varchar(255));

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

