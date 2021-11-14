import express from "express";
import homeController from "../controllers/homeController";
import orderController from "../controllers/orderController";


let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomepage);
    router.get('/about', homeController.getAboutPage);
    router.get('/register', homeController.getRegister);
    router.get('/login', homeController.getLogin);

    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displayGetCRUD);
    router.get('/edit-crud', homeController.getEditCRUD);
    router.post('/put-crud', homeController.putCRUD);
    router.get('/delete-crud', homeController.deleteCRUD);
    router.post('/add-foods-to-order', orderController.addFoodToOrder);
    router.get('/delete-food-from-order', orderController.deleteFoodFromOrder);
    return app.use("/", router);
}

module.exports = initWebRoutes;