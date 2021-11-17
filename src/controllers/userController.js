import db from '../models/index';
const { Op } = require("sequelize");

let getLoginPage = (req, res) => {
  return res.render('loginpage.ejs');
}

let getAuthPage = async (req, res) => {
  let User = await db.Users.findOne({
    where: { email: req.body.email, password: req.body.password },
    raw: true
  })
  if (User) {
    if (User.roleId == 'R1') {
      res.send('adminhomepage.ejs')
    }
    if (User.roleId == 'R2') {
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
          user: User,
        });
      } catch (e) {
        console.log(e);
      }
    }
    if (User.roleId == 'R3') {
      try {
        let foodtypes = await db.Foodtypes.findAll(
          {
            include: ["Foods"],
            nest: true,
          }
        );
        let userOrder = await db.Orders.findOrCreate({
          where: {
            status: true,
            paymentId: null,
            userId: User.id,
          },
          nest: true,
          raw: true,
        })
        let orderId = userOrder[0].id;
        let userId = User.id;
        let firstName = User.firstName;
        let contents = await db.Contents.findAll({
          where: { orderId: userOrder[0].id },
          nest: true,
        })
        return res.render('customerhomepage.ejs', {
          foodtypes: foodtypes,
          orderId: orderId,
          contents: contents,
          userId: userId,
          firstName: firstName,
        });
      } catch (e) {
        console.log(e);
      }
    }
  }
  else {
    res.send("User not found!");
  }
}

let getRegister = async (req, res) => {
  return res.render('register.ejs');
}

let addNewCustomer = async (req, res) => {
  let data = req.body;
  try {
    let user = await db.Users.findAll({
      where: { email: data.email },
      raw: true,
    });
    if (user.length) {
      res.send('email đã tồn tại');
    } else {
      try {
        await db.Users.create({
          email: data.email,
          password: data.password,
          firstName: data.firstName,
          lastName: data.lastName,
          address: data.address,
          phonenumber: data.phonenumber,
          gender: data.gender === '1' ? true : false,
          roleId: 'R3'
        })
      } catch (e) {
        console.log(e);
      }
      return res.render('register_confirm.ejs');
    }
  } catch (e) {
    console.log(e);
  }

}

module.exports = {
  getLoginPage: getLoginPage,
  getAuthPage: getAuthPage,
  getRegister: getRegister,
  addNewCustomer: addNewCustomer,
}