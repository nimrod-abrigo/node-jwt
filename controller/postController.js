let jwt = require('jsonwebtoken');

module.exports.addPost = (req,res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err){
            res.sendStatus(403);
        }else{
            res.json({
                message:'Post created....',
                authData
            });
        }
    });
};