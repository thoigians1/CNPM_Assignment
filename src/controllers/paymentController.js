//import db from '../models/index';

let getPayment = (req, res) => {
    return res.render('payment.ejs');
}

module.exports = {
    getPayment: getPayment
}