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




module.exports = {
    getHomepage: getHomepage,
}