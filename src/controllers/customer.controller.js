const { v4: uuidv4 } = require("uuid");
const createError = require("http-errors");
require("dotenv").config();

const db = require("../models/models");
const Customer = db.Customer;

const getCustomerList = async (req, res, next) => {
    let customers = []
    try {
        customers = await Customer.findAll({
            where: {
                removed: false
            }
        });
        if (!customers) {
            throw createError.NotFound()
        }

        return res.status(200).send({
            data: customers
        })
    } catch (error) {
        next(error)
    }
};
const getCustomer = async (req, res, next) => {
    const customerId = req.params.id
    try {
        const customer = await Customer.findByPk(customerId);
        if (!customer) {
            throw createError.NotFound(`Customer with id ${customerId} not found`)
        }
        return res.status(200).send({
            data: customer
        })
    } catch (error) {
        next(error)
    }
};
const createCustomer = async (req, res, next) => {
    const {
        customer_name,
        contact_person_name,
        contact_email,
        phone_number,
        billing_address,
        shipping_address
    } = req.body;
    try {
        const newCustomer = await Customer.create({
            id: uuidv4(),
            customer_name: customer_name,
            contact_person_name: contact_person_name,
            contact_email: contact_email,
            phone_number: phone_number,
            billing_address: billing_address,
            shipping_address: shipping_address,
            removed: false
        })

        return res.status(200).send({
            data: newCustomer,
            message: "Successfully Created"
        })
    } catch (error) {
        next(error)
    }
};
const updateCustomer = async (req, res, next) => {
    try {
        const customerId = req.params.id;
        const customer = await Customer.findByPk(customerId);
    
        if (!customer) {
          throw createError.NotFound(`Customer with id ${customerId} not found`);
        }
    
        const updatedCustomer = await customer.update(req.body);
    
        return res.status(200).send({
          data: updatedCustomer
        });
      } catch (error) {
        next(error);
      }
};
const deleteCustomer = async (req, res, next) => {
    try {
        const customerId = req.params.id;
        const customer = await Customer.findByPk(customerId);
    
        if (!customer) {
          throw createError.NotFound(`Customer with id ${customerId} not found`);
        }
    
        await customer.update({ removed: true });
    
        return res.status(200).send({
          message: `Customer with id ${customerId} has been deleted`
        });
      } catch (error) {
        next(error);
      }
};

module.exports = {
  getCustomerList,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
