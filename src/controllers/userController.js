import db from '../models/index';
const { Op } = require("sequelize");


let getAuthPage = async (req, res) => {
  let User = await db.Users.findOne({
    where: { email: req.body.email, password: req.body.password },
    raw: true
  })
  if (User) {
    if (User.roleId == 'R1') {
      let data = await db.Users.findAll({
        raw: true,
      });
      let foodtypes = await db.Foodtypes.findAll({
        include: ["Foods"],
        nest: true,
      });
      if (data) {
        return res.render('adminhomepage.ejs', {
          dataTable: data,
          user: User,
          foodtypes: foodtypes
        });
      }
      else {
        console.log(data);
      }
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
          user: User,
          currentReservations: currentReservations,
        });
      } catch (e) {
        console.log(e);
      }
    }
    if (User.roleId == 'R3') {
      try {
        if (req.query.keywords === undefined) {
          var foodtypes = await db.Foodtypes.findAll(
            {
              include: ["Foods"],
              nest: true,
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
          search: req.query.keywords
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

let getAddUser = async (req, res) => {
  return res.render('adduser.ejs', {
    email: req.body.email,
    password: req.body.password
  });
}

let addNewUser = async (req, res) => {
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
          roleId: data.roleId
        })
      } catch (e) {
        console.log(e);
      }
      return res.render('adduser_confirm.ejs', {
        email: data.Aemail,
        password: data.Apassword
      });
    }
  } catch (e) {
    console.log(e);
  }

}

let getEditUser = async (req, res) => {
  let data = req.body;
  let userId = data.id;
  if (userId) {
    let userData = await db.Users.findOne({
      where: { id: userId },
      raw: true
    });

    return res.render('edituser.ejs', {
      user: userData,
      email: data.email,
      password: data.password
    });
  }
  else {
    return res.send('user not found!');
  }
}

let putUser = async (req, res) => {
  let data = req.body;
  try {
    let user = await db.Users.findOne({
      where: { id: data.id }
    })
    if (user) {
      user.firstName = data.firstName;
      user.lastName = data.lastName;
      user.address = data.address;
      user.phonenumber = data.phonenumber;

      await user.save();

      return res.render('edituser_confirm.ejs', {
        user: user,
        email: data.Aemail,
        password: data.Apassword
      });

    } else {
      return res.send('user not found!');
    }
  } catch (e) {
    console.log(e);
  }
}




module.exports = {
  getAuthPage: getAuthPage,
  addNewCustomer: addNewCustomer,
  getAddUser: getAddUser,
  addNewUser: addNewUser,
  getEditUser: getEditUser,
  putUser: putUser,
}