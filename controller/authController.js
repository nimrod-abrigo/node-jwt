let jwt = require('jsonwebtoken');

let authService = require('../service/authService');

module.exports.login = async (req, res) => {
    const postData = req.body;

    let userData = await authService.getUserInfo(postData.email, postData.password);

    if (userData != 'empty') {
        jwt.sign({ userData }, 'secretkey', { expiresIn: '2h' }, (err, token) => {
            res.json({
                token
            });
        });
    }else{
        res.sendStatus(403);
    }
};

module.exports.register = async (req, res) => {
    const postData = req.body;

    const userInfo = {
        username: postData.username,
        email: postData.email,
        password: postData.password
    };

    let registerResult = await authService.registerUser(userInfo);

    res.send(registerResult);
}