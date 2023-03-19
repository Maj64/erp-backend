import express from "express"
import UserController from "../controllers/user.controller.js";
import CustomerController from "../controllers/customer.controller.js"
import { verifyToken } from "../middleware/jwt_service.js";

const router = express.Router();

const initRouters = (app) => {

    // user API
    router.get("/api/profile/:id", UserController.getUserProfile)
    router.post("/api/register", UserController.register)
    router.post("/api/login", UserController.login)
    router.post("/api/logout", UserController.logout)
    router.post("/api/refresh-token", UserController.refreshToken)

    // customer API
    router.get("/api/customers", verifyToken, CustomerController.getCustomerList)
    router.get("/api/customer/:id", verifyToken, CustomerController.getCustomer)
    router.post("/api/customer", verifyToken, CustomerController.createCustomer)
    router.put("/api/customer/:id", verifyToken, CustomerController.updateCustomer)
    router.delete("/api/customer/:id", verifyToken, CustomerController.deleteCustomer)

    return app.use("/", router)
}

module.exports = initRouters