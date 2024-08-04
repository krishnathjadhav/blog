drop table users

select *
  from users;

select *
  from register;

select *
  from products;

select *
  from product_category;

select *
  from cart;

drop table products;
drop table product_category;

commit;



create table users (
	id       integer primary key,
	name     varchar(20) not null,
	password varchar(20) not null
);

create table cart (
	id             integer primary key,
	user_id        integer
		references users ( id ),
	products       varchar(200) not null,
	noofitems      integer not null,
	billing_amount integer not null
);

create table register (
	id       integer primary key,
	name     varchar(20) not null,
	mobile   int not null,
	email    varchar(255) not null,
	role     varchar(255) not null,
	password varchar(20) not null
);

create table products (
	id          integer primary key,
	category_id integer
		references product_category ( id ),
	name        varchar(20) not null,
	description varchar(100) not null,
	price       integer not null
);

create table product_category (
	id          integer primary key,
	name        varchar(20) not null,
	description varchar(100) not null
);