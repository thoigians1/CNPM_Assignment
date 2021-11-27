import db from '../models/index';
const { Op } = require("sequelize");


let addFoodToOrder = async (req, res) => {
    try {
        let foodtypes = await db.Foodtypes.findAll(
            {
                include: ["Foods"],
                nest: true,
                // attributes: []
            }
        );
        let data = req.body;
        try {
            await db.Contents.findOrCreate({
                where: {
                    foodId: data.foodId,
                    foodName: data.name,
                    foodImage: data.image,
                    cost: data.cost,
                    quantity: data.quantity,
                    orderId: data.orderId,
                }
            })

        } catch (e) {
            console.log(e);
        }

        let contents = await db.Contents.findAll({
            where: { orderId: data.orderId },
            nest: true,
        })
        return res.render('customerhomepage.ejs', {
            foodtypes: foodtypes,
            contents: contents,
            orderId: data.orderId,
            userId: data.id,
            firstName: data.firstName,
        });
    } catch (e) {
        console.log(e);
    }

}

let deleteFoodFromOrder = async (req, res) => {
    try {
        let foodtypes = await db.Foodtypes.findAll(
            {
                include: ["Foods"],
                nest: true,
                // attributes: []
            }
        );

        let data = req.body;
        if (data) {
            try {
                let food = await db.Contents.findOne({
                    where: { id: data.foodId },
                })
                if (food) {
                    food.destroy();
                }

            } catch (e) {
                console.log(e);
            }
        }

        let contents = await db.Contents.findAll({
            where: { orderId: data.orderId },
            nest: true,
        })
        return res.render('customerhomepage.ejs', {
            foodtypes: foodtypes,
            contents: contents,
            orderId: data.orderId,
            userId: data.id,
            firstName: data.firstName,
        });
    } catch (e) {
        console.log(e);
    }
}

let orderComplete = async (req, res) => {
    try {
        let data = req.body;
        let order = await db.Orders.findOne({
            where: { id: data.orderId }
        });
        if (order) {
            order.status = false;
            await order.save();
        }
        let user = await db.Users.findOne({
            where: { id: data.userId }
        })
        let currentOrder = await db.Orders.findAll(
            {
                where: {
                    paymentId: {
                        [Op.not]: null,
                    },
                    status: true,
                },
                include: ['userOrder', 'Contents'],
                nest: true,
                // raw: true,
            }
        );
        let currentReservations = await db.TableReservations.findAll(
            {
                where: {
                    status: true,
                },
                include: ['UserTables'],
                nest: true,
                raw: true,
            }
        );
        // console.log(currentOrder);
        return res.render('staffhomepage.ejs', {
            currentOrder: currentOrder,
            user: user,
            currentReservations: currentReservations,
        });
    } catch (e) {
        console.log(e);
    }
}

let showOrders = async (req, res) => {
    try {
        let data = req.body;
        let orders = await db.Orders.findAll(
            {
                where: {
                    paymentId: {
                        [Op.not]: null,
                    },
                    status: false,
                },
                include: ['userOrder', 'Contents'],
                nest: true,
                // raw: true,
            }
        );
        return res.render('order.ejs', {
            orders: orders,
            email: data.email,
            password: data.password,
        })
    } catch (e) {
        console.log(e);
    }

}

module.exports = {
    addFoodToOrder: addFoodToOrder,
    deleteFoodFromOrder: deleteFoodFromOrder,
    orderComplete: orderComplete,
    showOrders: showOrders,
}