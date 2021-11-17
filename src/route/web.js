import express from "express";
import homeController from "../controllers/homeController";
import orderController from "../controllers/orderController";
import userController from "../controllers/userController";
import paymentController from "../controllers/paymentController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomepage);
    router.get('/about', homeController.getAboutPage);
    router.get('/crud', homeController.getCRUD);

    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displayGetCRUD);
    router.get('/edit-crud', homeController.getEditCRUD);
    router.post('/put-crud', homeController.putCRUD);
    router.get('/delete-crud', homeController.deleteCRUD);

    //ordercontroller
    router.post('/auth/add-foods-to-order', orderController.addFoodToOrder);
    router.post('/auth/delete-food-from-order', orderController.deleteFoodFromOrder);
    router.post('/auth/set-status-order', orderController.orderComplete)

    // userController
    router.get('/login', userController.getLoginPage);
    router.post('/auth', userController.getAuthPage);
    router.get('/register', userController.getRegister);
    router.post('/register-confirm', userController.addNewCustomer);

    //paymentController
    router.post('/auth/payment', paymentController.postPayment);
    router.post('/auth/payment/paymentcomplete', paymentController.paymentComplete);

    return app.use("/", router);
}

module.exports = initWebRoutes;