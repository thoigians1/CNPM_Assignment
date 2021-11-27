import db from '../models/index';
const { Op } = require("sequelize");

let getHomepage = async (req, res) => {
    try {
        let foodtypes = await db.Foodtypes.findAll(
            {
                include: ["Foods"],
                nest: true,
                // attributes: []
            }
        );
        return res.render('homepage.ejs', {
            // foodLists: JSON.stringify(foodLists[0].Foods[0].id),
            foodtypes: foodtypes,
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