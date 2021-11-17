import db from '../models/index';

let postPayment = async (req, res) => {
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
    return res.render('payment.ejs', {
        user: user,
        total: data.total,
        userId: data.id,
        orderId: data.orderId,
        firstName: data.firstName,
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


module.exports = {
    postPayment: postPayment,
    paymentComplete: paymentComplete,
}