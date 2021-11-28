import db from '../models/index';
const { Op } = require("sequelize");
const Sequelize = require("sequelize");

const operatorsAliases = {
    like: Op.like,
    not: Op.not
}

let getHomepage = async (req, res) => {
    try {
        res.clearCookie("Authorization");
        if (req.query.keywords === undefined) {
            var foodtypes = await db.Foodtypes.findAll(
                {
                    include: ["Foods"],
                    nest: true,
                    // attributes: []
                }
            );
        } else {
            var foodtypes = await db.Foodtypes.findAll({
                where: Sequelize.literal(`Foods.name LIKE '%${req.query.keywords}%'`),
                include: {
                    all: true,
                    model: db.Foods,
                },
                nest: true,
            });
        }
        return res.render('homepage.ejs', {
            foodtypes: foodtypes,
            search: req.query.keywords
        });
    } catch (e) {
        console.log(e);
    }

}

let getLoginPage = (req, res) => {
    return res.render('loginpage.ejs');
}

let getRegister = async (req, res) => {
    return res.render('register.ejs');
}




module.exports = {
    getHomepage: getHomepage,
    getLoginPage: getLoginPage,
    getRegister: getRegister,
}