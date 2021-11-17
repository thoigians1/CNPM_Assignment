import db from '../models/index';
import CRUDService from '../services/CRUDService';
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

let getStaffHome = async (req, res) => {
    try {
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
            }
        );
        // console.log(currentOrder);
        return res.render('staffhomepage.ejs', {
            currentOrder: currentOrder,
        });
    } catch (e) {
        console.log(e);
    }
}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}

let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send("post crud from server");
}

let displayGetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUsers();
    return res.render('displayCRUD.ejs', {
        dataTable: data
    });
}

let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId);

        return res.render('editCRUD.ejs', {
            user: userData
        });
    }
    else {
        return res.send('user not found!');
    }
}

let putCRUD = async (req, res) => {
    let data = req.body;
    let allUsers = await CRUDService.upDateUserData(data);
    return res.render('displayCRUD.ejs', {
        dataTable: allUsers,
    });
}

let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDService.deleteUserById(id);
        return res.send('delete user succeed')
    }
    else {
        return res.send('user not found');
    }
}

module.exports = {
    getHomepage: getHomepage,
    getStaffHome: getStaffHome,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,
}