const sequelize = require('sequelize');
const erpDb = new sequelize('erp_db', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

const crmDb = new sequelize('crm_db', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

// Define models for ERP database
const Order = erpDb.define('Order', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  customerName: sequelize.STRING,
  orderDate: sequelize.DATE,
  totalAmount: sequelize.FLOAT
});

const Product = erpDb.define('Product', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  productName: sequelize.STRING,
  price: sequelize.FLOAT
});

// Define models for CRM database
const Customer = crmDb.define('Customer', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: sequelize.STRING,
  lastName: sequelize.STRING,
  email: sequelize.STRING
});

const Sale = crmDb.define('Sale', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  customerId: sequelize.INTEGER,
  productId: sequelize.INTEGER,
  saleDate: sequelize.DATE,
  quantity: sequelize.INTEGER
});

// Middleware function to handle sale creation
const createSale = async (req, res, next) => {
  try {
    // Extract sale information from request body
    const { customerId, productId, quantity } = req.body;

    // Retrieve customer information from CRM database
    const customer = await Customer.findOne({ where: { id: customerId } });
    if (!customer) {
      return res.status(400).json({ message: 'Customer not found' });
    }

    // Retrieve product information from ERP database
    const product = await Product.findOne({ where: { id: productId } });
    if (!product) {
      return res.status(400).json({ message: 'Product not found' });
    }

    // Create sale record in CRM database
    const sale = await Sale.create({
      customerId,
      productId,
      saleDate: new Date(),
      quantity
    });

    // Update customer's total sales amount in CRM database
    const totalSales = await Sale.sum('quantity', { where: { customerId } });
    await Customer.update({ totalSales }, { where: { id: customerId } });

    // Update product's total sales amount in ERP database
    const totalSold = await Sale.sum('quantity', { where: { productId } });
    await Product.update({ totalSold }, { where: { id: productId } });

    // Return success message
    return res.json({ message: 'Sale created successfully' });
  } catch (error) {
    // Handle any errors
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Export middleware function
module.exports = { createSale };
