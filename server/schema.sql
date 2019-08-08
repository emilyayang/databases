DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  userId int  NOT NULL AUTO_INCREMENT,
  username varchar(255),
  PRIMARY KEY (userId)
);

CREATE TABLE messages (
  messageId int NOT NULL AUTO_INCREMENT,
  username varchar(255) NOT NULL,
  textMessage varchar(255) NOT NULL,
  roomname varchar(255),
  userId int,
  PRIMARY KEY (messageId),
  FOREIGN KEY (userId) REFERENCES users(userId)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE individualMessage (
  createdAt int NOT NULL,
  textMessage varchar(255) NOT NULL,
  messageId int,
  FOREIGN KEY (messageId) REFERENCES messages(messageId)
);

CREATE TABLE user (
  allMessages varchar(255),
  userId int,
  username varchar(255) NOT NULL,
  FOREIGN KEY (userId) REFERENCES users(userId)
);


/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/

