import db from '../models/index';
const qr = require("qrcode");


let postPayment = async (req, res) => {
    const pcStaticIp = "192.168.11.74:8080"

    let data = req.body;
    let order = await db.Orders.findOne({
        where: { id: data.orderId }
    });
    if (order) {
        order.total = data.total;
        await order.save();
    }
    let user = await db.Users.findOne({
        where: { id: data.id }
    });
    const url = pcStaticIp + `/payment/complete?id=${data.id}&orderId=${data.orderId}`;

    qr.toDataURL(url, (err, src) => {
        if (err) res.send("Error occured");

        // Let us return the QR code image as our response and set it to be the source used in the webpage
        return res.render('payment.ejs', {
            user: user,
            total: data.total,
            userId: data.id,
            orderId: data.orderId,
            firstName: data.firstName,
            src: src
        });
    });
}

let paymentComplete = async (req, res) => {
    let data = req.body;
    let user = await db.Users.findOne({
        where: { id: data.id }
    });
    let order = await db.Orders.findOne({
        where: { id: data.orderId }
    });
    if (order) {
        order.paymentId = "Debit Card";
        await order.save();
    }
    return res.render('paymentcomplete.ejs', {
        user: user,
    })
}

let paymentQRComplete = async (req, res) => {
    let data = req.query;
    let user = await db.Users.findOne({
        where: { id: data.id }
    });
    let order = await db.Orders.findOne({
        where: { id: data.orderId }
    });
    if (order) {
        order.paymentId = "MoMo";
        await order.save();
    }
    return res.render('paymentcomplete.ejs', {
        user: user,
    })
}


module.exports = {
    postPayment: postPayment,
    paymentComplete: paymentComplete,
    paymentQRComplete: paymentQRComplete
}