****** User ******

CREATE TABLE  Users(
id INTEGER PRIMARY KEY,
name VARCHAR(20) NOT NULL,
password VARCHAR(20) NOT NULL
);


****** Products ******

CREATE TABLE Products(
id  INTEGER PRIMARY KEY,
category_id INTEGER REFERENCES Product_Category(id),
name VARCHAR(20) NOT NULL,
description VARCHAR(100) NOT NULL, 
price INTEGER NOT NULL
);    


****** Cart******

CREATE TABLE Cart(
id INTEGER PRIMARY KEY ,
user_id  INTEGER  REFERENCES Users(id),
products VARCHAR(200) NOT NULL,
noOfItems INTEGER NOT NULL,
billing_amount INTEGER NOT NULL
);



****** Register ******

CREATE TABLE Register(
id INTEGER PRIMARY KEY,
name VARCHAR(20) NOT NULL,
mobile INT NOT NULL,
email VARCHAR(255) NOT NULL,
role VARCHAR(255) NOT NULL,
password VARCHAR(20) NOT NULL
);

