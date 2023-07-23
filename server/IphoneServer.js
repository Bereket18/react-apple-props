const express = require("express");
const mySql = require("mysql2");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");

require("dotenv").config();

// Use  body parser as middle ware
app.use(bodyparser.urlencoded({ extended: true }));

// Middle ware to extract info from the html
app.use(
	express.urlencoded({
		extended: true,
	})
);

// Middle ware to receive data from postman in jason format
app.use(express.json());
app.use(cors());
// To access or fetch the cross origin policy from this resources only;

const corsOption = {
	origin: [
		"http://localhost:3000",
		"http://www.evangadi.com",
		"http://www.apple.com",
	],
};
app.use(cors(corsOption));

// Connecting to REMOTE DB
const connection = mySql.createConnection({
	host: "localhost",
	user: "myDBuser",
	password: "myDBuser12345",
	database: "myDB",
});

connection.connect((err) => {
	if (err)
		console.log(`Error happened while connecting to the database: ${err}`);
	console.log(`Connected to the database`);
});

app.get("/", (req, res) => {
	res.send("pending...");
});
app.get("/install", (req, res) => {
	let products = `CREATE TABLE if not exists products (
    product_id int auto_increment,
    product_name varchar(255) not null,
    product_url varchar(255) not null,
    PRIMARY KEY (product_id)
  )`;

	let description = `CREATE TABLE if not exists description (
  description_id int auto_increment,
  product_id int(11) not null,
  product_brief_description TEXT not null,
  product_description TEXT not null,
  product_img varchar(255) not null,
  product_link varchar(255) not null,
  PRIMARY KEY (description_id),
  FOREIGN KEY (product_id) REFERENCES Products (product_id)
  )`;

	let price = `CREATE TABLE if not exists product_price(
    price_id int auto_increment,
    product_id int(11) not null,
    starting_price varchar(255) not null,
    price_range varchar(255) not null,
    PRIMARY KEY(price_id),
    FOREIGN KEY (product_id) REFERENCES Products (product_id)
  )`;

	let user = `CREATE TABLE if not exists account(
  user_id int auto_increment,
  user_name varchar(255) not null,
  user_password varchar(255) not null,
  PRIMARY KEY (user_id)
  )`;

	let order = `CREATE TABLE if not exists orders(
    order_id int auto_increment,
    product_id int(11) not null,
    user_id int(11) not null,
    PRIMARY KEY(order_id),
    FOREIGN KEY (product_id) REFERENCES Products (product_id),
    FOREIGN KEY (user_id) REFERENCES Account (user_id)
  )`;

	connection.query(products, (err, result) => {
		if (err) console.log(err);
		console.log("Products table created");
	});

	connection.query(description, (err, result) => {
		if (err) console.log(err);
		console.log("Description table created");
	});

	connection.query(price, (err, result) => {
		if (err) console.log(err);
		console.log("Price table created");
	});

	connection.query(user, (err, result) => {
		if (err) console.log(err);
		console.log("User table created");
	});

	connection.query(order, (err, result) => {
		if (err) console.log(err);
		console.log("Order table created");
	});
	res.end("Tables Created");
	console.log("Tables Created");
});

app.post("/add-product", (req, res) => {
	console.table(req.body);
	res.end("working on it");

	const {
		user_name,
		user_password,
		product_name,
		product_url,
		product_brief_description,
		product_description,
		product_img,
		product_link,
		starting_price,
		price_range,
	} = req.body;

	let name = `INSERT INTO account(user_name, user_password) VALUES (?,?)`;
	let description = `INSERT INTO description(product_id, product_brief_description, product_description, product_img, product_link) VALUES (?,?,?,?,?)`;
	let products = `INSERT INTO products(product_name, product_url) VALUES (?,?)`;
	let price = `INSERT INTO product_price(product_id, starting_price, price_range) VALUES (?,?,?)`;
	let order = `INSERT INTO orders(product_id, user_id) VALUES (?,?)`;

	connection.query(
		products,
		[product_name, product_url],
		(err, results, fields) => {
			if (err) console.log(`Error Found: ${err}`);
			console.table(results);

			const id = results.insertId;
			console.log(
				"id from products table to be used as a foreign key on the other tables>>> ",
				id
			);

			connection.query(
				description,
				[
					id,
					product_brief_description,
					product_description,
					product_img,
					product_link,
				],
				(err, results, fields) => {
					if (err) console.log(`Error Found 1: ${err}`);
				}
			);

			connection.query(
				price,
				[id, starting_price, price_range],
				(err, results, fields) => {
					if (err) console.log(`Error Found 2: ${err}`);
				}
			);

			connection.query(
				name,
				[user_name, user_password],
				(err, results, fields) => {
					if (err) console.log(`Error Found 3: ${err}`);
					console.table(results);
					const id2 = results.insertId;
					console.log(
						"id2 from user table to be used as a foreign key on the other tables>>> ",
						id2
					);

					connection.query(order, [id, id2], (err, results, fields) => {
						if (err) console.log(`Error Found 4: ${err}`);
					});
				}
			);
		}
	);
});

//Get all iphones
app.get("/iphones", (req, res) => {
	connection.query(
		"SELECT * FROM Products JOIN description JOIN Product_Price ON Products.product_id = description.product_id AND Products.product_id = Product_Price.product_id",
		(err, rows, fields) => {
			let iphones = { products: [] };
			iphones.products = rows;
			var stringIphones = JSON.stringify(iphones);
			if (!err) res.end(stringIphones);
			else console.log(err);
		}
	);
});

app.listen(3070, () => {
	console.log("Server started on port http://localhost:3070");
});
