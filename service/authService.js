let connection = require('../db');

let getUserInfo = (email,password) => {
    return new Promise(function(resolve,reject){
        connection.query("SELECT * FROM users WHERE email = ? AND password = ?",[ email, password ], function(err, rows, fields) {
            if (err) return reject(err);
            if (rows.length > 0){
                return resolve(rows);
            }else{
                return resolve ('empty');
            }   
        });
    });
}

module.exports.getUserInfo = getUserInfo;