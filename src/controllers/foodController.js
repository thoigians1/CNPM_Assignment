import db from '../models/index';
const { Op } = require("sequelize");

let getAddFood = async (req, res) => {
    let foodtypes = await db.Foodtypes.findAll({
        raw: true,
    })
    return res.render('addfood.ejs', {
        email: req.body.email,
        password: req.body.password,
        foodtypes: foodtypes
    });
}

let addNewFood = async (req, res) => {
    let data = req.body;
    try {
        let food = await db.Foods.findAll({
            where: { name: data.name },
            raw: true,
        });
        if (food.length) {
            res.send('Món này đã tồn tại');
        } else {
            try {
                // console.log(data);
                await db.Foods.create({
                    name: data.name,
                    cost: data.cost,
                    image: data.image,
                    foodtypeId: data.type
                })
            } catch (e) {
                console.log(e);
            }
            // console.log(data.email);
            return res.render('addfood_confirm.ejs', {
                email: data.email,
                password: data.password,
            });
        }
    } catch (e) {
        console.log(e);
    }
}

let getEditFood = async (req, res) => {
    let foodtypes = await db.Foodtypes.findAll({
        raw: true,
    })
    let data = req.body;
    let foodId = data.foodId;
    if (foodId) {
        let foodData = await db.Foods.findOne({
            where: { id: foodId },
            raw: true
        });

        return res.render('editfood.ejs', {
            food: foodData,
            email: data.email,
            password: data.password,
            foodtypes: foodtypes
        });
    }
    else {
        return res.send('food not found!');
    }
}

let putFood = async (req, res) => {
    let data = req.body;
    try {
        let food = await db.Foods.findOne({
            where: { id: data.id }
        })
        if (food) {
            food.name = data.name;
            food.image = data.image;
            food.cost = data.cost;
            food.foodtypeId = data.type;

            await food.save();

            return res.render('editfood_confirm.ejs', {
                food: food,
                email: data.email,
                password: data.password,
            });

        } else {
            return res.send('food not found!');
        }
    } catch (e) {
        console.log(e);
    }
}

let deleteFood = async (req, res) => {
    let data = req.body;
    let foodId = data.foodId;
    if (foodId) {
        try {
            let food = await db.Foods.findOne({
                where: { id: foodId },
            })
            if (food) {
                food.destroy();
            }
            return res.render('deletefood_confirm.ejs', {
                food: food,
                email: data.email,
                password: data.password
            });
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = {
    getAddFood: getAddFood,
    addNewFood: addNewFood,
    getEditFood: getEditFood,
    putFood: putFood,
    deleteFood: deleteFood,
}

