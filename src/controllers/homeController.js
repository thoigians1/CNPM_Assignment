
import db from '../models/index';
import CRUDService from '../services/CRUDService';
let getHomepage = async (req, res) => {
    try {
        let foodtypes = await db.Foodtypes.findAll(
            {
                include: ["Foods"],
                nest: true,
                // attributes: []
            }
        );
        let homeOrder = await db.Orders.findOrCreate({
            where: { status: true },
            nest: true,
            raw: true,
        })
        let contents = await db.Contents.findAll({
            where: { orderId: homeOrder[0].id },
            nest: true,
        })
        // console.log(homeOrder[0].id);
        // console.log(JSON.stringify(foodtypes[0]));
        // console.log(contents[0]);
        return res.render('homepage.ejs', {
            // foodLists: JSON.stringify(foodLists[0].Foods[0].id),
            foodtypes: foodtypes,
            homeOrder: homeOrder[0],
            contents: contents,
        });
    } catch (e) {
        console.log(e);
    }

}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}

let getLogin = (req, res) => {
    return res.send('Trang Đăng Nhập');
}

let getRegister = (req, res) => {
    return res.render('register.ejs');
}

let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.render('register_confirm.ejs');
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
    getAboutPage: getAboutPage,
    getRegister: getRegister,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,
    getLogin: getLogin,
}