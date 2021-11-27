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

// ------------- UPDATE 25/11 -------------- //
let getReserveTable = async (req, res) => {
  let data = req.body;
  let reservation = await db.TableReservations.findAll({
    raw: true,
  });
  let user = await db.Users.findOne({
    where: { id: data.id },
    raw: true
  })
  let tables = await db.Tables.findAll({
    where: { status: true },
    raw: true
  })
  return res.render('reservetable.ejs', {
    phonenumber: user.phonenumber,
    firstName: user.firstName,
    email: user.email,
    password: user.password,
    tables: tables,
    reservation: reservation,
  });
}

let reserveTable = async (req, res) => {
  let data = req.body;
  try {
    let reservation = await db.TableReservations.findAll({
      where: { tableId: data.tableId },
      raw: true,
    });
    // console.log(reservation)
    let flag = true;
    if (reservation.length) {
      for (let i = 0; i < reservation.length; i++) {
        if (!(reservation[i].timeEnd < data.timeStart || reservation[i].timeStart > data.timeEnd)) {
          res.send('Bàn này đã được đặt trong khung giờ của quý khách! Xin quý khách vui lòng xem bảng bên dưới form đặt bàn!')
          flag = false;
        }
      }
      if (flag) {
        try {
          // console.log(data);
          await db.TableReservations.create({
            tableId: data.tableId,
            timeStart: data.timeStart,
            timeEnd: data.timeEnd,
            status: 1,
          })
        } catch (e) {
          console.log(e);
        }
        // console.log(data.email);
        return res.render('reservetable_confirm.ejs', {
          email: data.email,
          password: data.password,
        });
      }
    } else {
      try {
        // console.log(data);
        await db.TableReservations.create({
          tableId: data.tableId,
          timeStart: data.timeStart,
          timeEnd: data.timeEnd,
          status: 1,
        })
      } catch (e) {
        console.log(e);
      }
      // console.log(data.email);
      return res.render('reservetable_confirm.ejs', {
        email: data.email,
        password: data.password,
      });
    }
  } catch (e) {
    console.log(e);
  }
}

let setReserveTable = async (req,res) => {
  try {
    let data = req.body;
    let reservation = await db.TableReservations.findOne({
        where: { id: data.reserveID }
    });
    if (reservation) {
        reservation.status = false;
        await reservation.save();
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

module.exports = {
  getLoginPage: getLoginPage,
  getAuthPage: getAuthPage,
  getRegister: getRegister,
  addNewCustomer: addNewCustomer,
  getAddUser: getAddUser,
  addNewUser: addNewUser,
  getAddFood: getAddFood,
  addNewFood: addNewFood,
  getEditFood: getEditFood,
  putFood: putFood,
  deleteFood: deleteFood,
  getEditUser: getEditUser,
  putUser: putUser,
  getReserveTable: getReserveTable,
  reserveTable: reserveTable,
  setReserveTable: setReserveTable,
}