import express from "express";
import homeController from "../controllers/homeController";
import orderController from "../controllers/orderController";
import userController from "../controllers/userController";
import paymentController from "../controllers/paymentController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomepage);

    //ordercontroller
    router.post('/auth/add-foods-to-order', orderController.addFoodToOrder);
    router.post('/auth/delete-food-from-order', orderController.deleteFoodFromOrder);
    router.post('/auth/set-status-order', orderController.orderComplete)
    router.post('/auth/order', orderController.showOrders)


    // userController
    router.get('/login', userController.getLoginPage);
    router.post('/auth', userController.getAuthPage);
    router.get('/register', userController.getRegister);
    router.post('/register-confirm', userController.addNewCustomer);
    router.post('/auth/adduser', userController.getAddUser);
    router.post('/auth/adduser/adduser-confirm', userController.addNewUser);
    router.post('/auth/edit-user', userController.getEditUser);
    router.post('/auth/edit-user/put-user', userController.putUser);
    router.post('/auth/addfood', userController.getAddFood);
    router.post('/auth/addfood/addfood-confirm', userController.addNewFood);
    router.post('/auth/edit-food', userController.getEditFood);
    router.post('/auth/edit-food/put-food', userController.putFood);
    router.post('/auth/delete-food', userController.deleteFood);
    // ---------- UPDATE 25/11 ------------ //
    router.post('/auth/reservetable', userController.getReserveTable);
    router.post('/auth/reservetable/reservetable-confirm', userController.reserveTable);


    //paymentController
    router.post('/auth/payment', paymentController.postPayment);
    router.post('/auth/payment/paymentcomplete', paymentController.paymentComplete);


    return app.use("/", router);
}

module.exports = initWebRoutes;