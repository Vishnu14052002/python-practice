const jwt = require('jsonwebtoken');

function authentication(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    jwt.verify(token, process.env.my_token_code, (err, user) => {
        if(err) return res.status(403).json({
            'message' : 'something went wrong'
        });
        req.user = user;
        next();
    })
}

module.exports = authentication;