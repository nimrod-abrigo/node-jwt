let connection = require('../db');

let getUserInfo = (email, password) => {
    return new Promise(function (resolve, reject) {
        connection.query("SELECT * FROM users WHERE email = ? AND password = ?", [email, password], function (err, rows, fields) {
            if (err) return reject(err);
            if (rows.length > 0) {
                return resolve(rows);
            } else {
                return resolve('empty');
            }
        });
    });
}

let registerUser = (userData) => {
    return new Promise(function (resolve, reject) {
        connection.query("INSERT INTO users SET ?", [userData], function (err, rows, fields) {
            if (err) return reject(err);
            return resolve(rows);
        });
    });
}

module.exports.getUserInfo = getUserInfo;
module.exports.registerUser = registerUser;