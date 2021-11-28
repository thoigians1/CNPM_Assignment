const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
import db from '../models/index';


const PRIVATE_KEY = 'this is my private key'
exports.signIn = async function (req, res) {
    let user = await db.Users.findOne({
        where: { email: req.body.email, password: req.body.password },
        raw: true
    });
    if (!user) {
        return res.status(401).json({
            message: 'Authentication failed! User not found!'
        });
    } else {
        // if (!user.comparePassword(req.body.password)) {
        if (user.password !== req.body.password) {
            return res.status(401).json({
                message: 'Authentication failed! Wrong password!'
            });
        }
        else {
            let token = jwt.sign({
                name: user.firstName,
                role: user.roleId,
            },
                PRIVATE_KEY
            );
            res.cookie("Authorization", 'JWT ' + token, {
                httpOnly: true,
                sameSite: "strict",
            });
            return res.json({
                token: token
            });
        }
    };
}

exports.loginRequired = function (req, res, next) {
    console.log('req.user: ', req.user);
    if (req.user) {
        next();
    } else {
        return res.status(401).json({ message: 'Unauthorized user!' });
    }
};

exports.userAuthen = function (req, res, next) {
    if (req.headers 
        && req.headers.cookie 
        && req.headers.cookie.search('=') !== -1
        && req.headers.cookie.substr(req.headers.cookie.search('=')+1).split('%20')[0] === 'JWT') {
        jwt.verify(req.headers.cookie.substr(req.headers.cookie.search('=')+1).split('%20')[1], PRIVATE_KEY, function (err, decode) {
            if (err) {
                req.user = undefined;
                console.log(err);
            }
            req.user = decode;
            console.log(`user: ${req.user.name}`)
            next();
        });
    } else {
        console.log(`req.headers.authorization: ${req.headers.authorization}`);
        console.log(`req.headers.cookie: ${req.headers.cookie}`);
        req.user = undefined;
        next();
    }
}