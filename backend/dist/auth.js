"use strict";
exports.__esModule = true;
var users_1 = require("./users");
var jwt = require("jsonwebtoken");
var api_config_1 = require("./api-config");
exports.handleAuthentication = function (req, res) {
    var user = req.body;
    if (isValid(user)) {
        var dbUser = users_1.users["" + user.email];
        var token = jwt.sign({
            sub: dbUser.email,
            iss: 'meat-api' // ISSUER -> Quem está emitindo o token (no caso a aplicação)
        }, api_config_1.apiConfig.secret //DE UM PASSWORD PARA  ASSINAR O TOKEN (NESSE PASSO NAO ESTÁ COMPARTILHANDO A SENHA)... ACESSAR JWT
        );
        res.json({
            name: dbUser.name,
            email: dbUser.email,
            accessToken: token
        });
    }
    else {
        res.status(403).json({
            message: 'Dados inválidos.'
        });
    }
};
function isValid(user) {
    if (!user) {
        return false;
    }
    var dbUser = users_1.users["" + user.email];
    return dbUser !== undefined && dbUser.matches(user);
}
