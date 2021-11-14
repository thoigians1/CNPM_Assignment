import db from '../models/index';

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

        let homeOrder = await db.Orders.findOne({
            where: { status: true },
            nest: true,
        })
        let contents = await db.Contents.findAll({
            where: { orderId: homeOrder.id },
            nest: true,
        })

        return res.render('homepage.ejs', {

            foodtypes: foodtypes,
            homeOrder: homeOrder,
            contents: contents,
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

        let id = req.query.id;
        if (id) {
            try {
                let food = await db.Contents.findOne({
                    where: { id: id },
                })
                if (food) {
                    food.destroy();
                }

            } catch (e) {
                console.log(e);
            }
        }
        let homeOrder = await db.Orders.findOne({
            where: { status: true },
            nest: true,
        })
        let contents = await db.Contents.findAll({
            where: { orderId: homeOrder.id },
            nest: true,
        })

        return res.render('homepage.ejs', {

            foodtypes: foodtypes,
            homeOrder: homeOrder,
            contents: contents,
        });
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    addFoodToOrder: addFoodToOrder,
    deleteFoodFromOrder: deleteFoodFromOrder,
}