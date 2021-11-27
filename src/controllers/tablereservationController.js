import db from '../models/index';
const { Op } = require("sequelize");

let getReserveTable = async (req, res) => {
    let data = req.body;
    let reservation = await db.TableReservations.findAll({
        where: { status: true },
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
        id: data.id,
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
                        userId: data.userId
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
                    userId: data.userId
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

let setReserveTable = async (req, res) => {
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
    getReserveTable: getReserveTable,
    reserveTable: reserveTable,
    setReserveTable: setReserveTable,
}