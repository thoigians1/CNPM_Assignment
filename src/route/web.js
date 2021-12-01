import express from "express";
import homeController from "../controllers/homeController";
import orderController from "../controllers/orderController";
import userController from "../controllers/userController";
import paymentController from "../controllers/paymentController";
import foodController from "../controllers/foodController";
import tablereservationController from "../controllers/tablereservationController"
import { signIn, loginRequired, userAuthen } from '../api/auth';

let router = express.Router();

let initWebRoutes = (app) => {

    //homeController
    router.get('/', homeController.getHomepage);
    router.get('/login', homeController.getLoginPage);
    router.get('/register', homeController.getRegister);
    router.post('/register-confirm', userController.addNewCustomer);

    //paymentQRComplete
    router.get('/payment/complete', paymentController.paymentQRComplete);

    //ordercontroller
    router.route('/auth/signin').post(signIn);

    router.use(userAuthen);
    router.use(loginRequired);

    router.post('/auth/add-foods-to-order', orderController.addFoodToOrder);
    router.post('/auth/delete-food-from-order', orderController.deleteFoodFromOrder);
    router.post('/auth/set-status-order', orderController.orderComplete)
    router.post('/auth/order', orderController.showOrders)


    // userController
    router.post('/auth', userController.getAuthPage);
    router.post('/auth/adduser', userController.getAddUser);
    router.post('/auth/adduser/adduser-confirm', userController.addNewUser);
    router.post('/auth/edit-user', userController.getEditUser);
    router.post('/auth/edit-user/put-user', userController.putUser);

    //foodController
    router.post('/auth/addfood', foodController.getAddFood);
    router.post('/auth/addfood/addfood-confirm', foodController.addNewFood);
    router.post('/auth/edit-food', foodController.getEditFood);
    router.post('/auth/edit-food/put-food', foodController.putFood);
    router.post('/auth/delete-food', foodController.deleteFood);

    // tablereservationController
    router.post('/auth/reservetable', tablereservationController.getReserveTable);
    router.post('/auth/reservetable/reservetable-confirm', tablereservationController.reserveTable);
    router.post('/auth/set-status-tablereservations', tablereservationController.setReserveTable);

    //paymentController
    router.post('/auth/payment', paymentController.postPayment);
    router.post('/auth/payment/paymentcomplete', paymentController.paymentComplete);

    return app.use("/", router);
}

module.exports = initWebRoutes;