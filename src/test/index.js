const express = require('express');
const mysql = require('mysql');

const app = express();

// Define the two databases to be used:
const erp_db = mysql.createConnection({
  host: 'erp_database_host',
  user: 'erp_database_username',
  password: 'erp_database_password',
  database: 'erp_database_name'
});

const crm_db = mysql.createConnection({
  host: 'crm_database_host',
  user: 'crm_database_username',
  password: 'crm_database_password',
  database: 'crm_database_name'
});

// Define the middleware components
const data_integration = (req, res, next) => {
  // Map columns from erp_db.sales_order to crm_db.sales_order
  erp_db.query('SELECT id, customer_name, product_name, quantity, price FROM sales_order', (err, result) => {
    if (err) throw err;
    crm_db.query('INSERT INTO sales_order (id, customer_name, product_name, quantity, price) VALUES ?', [result], (err, result) => {
      if (err) throw err;
      next();
    });
  });

  // Map columns from crm_db.sales_order to erp_db.sales_order
  crm_db.query('SELECT id, customer_name, product_name, quantity, price FROM sales_order', (err, result) => {
    if (err) throw err;
    erp_db.query('INSERT INTO sales_order (id, customer_name, product_name, quantity, price) VALUES ?', [result], (err, result) => {
      if (err) throw err;
      next();
    });
  });
};

const two_way_sync = (req, res, next) => {
  // Synchronize changes in erp_db.sales_order with crm_db.sales_order
  erp_db.query('SELECT * FROM sales_order', (err, result) => {
    if (err) throw err;
    crm_db.query('DELETE FROM sales_order', (err, result) => {
      if (err) throw err;
      crm_db.query('INSERT INTO sales_order VALUES ?', [result], (err, result) => {
        if (err) throw err;
        next();
      });
    });
  });

  // Synchronize changes in crm_db.sales_order with erp_db.sales_order
  crm_db.query('SELECT * FROM sales_order', (err, result) => {
    if (err) throw err;
    erp_db.query('DELETE FROM sales_order', (err, result) => {
      if (err) throw err;
      erp_db.query('INSERT INTO sales_order VALUES ?', [result], (err, result) => {
        if (err) throw err;
        next();
      });
    });
  });
};

