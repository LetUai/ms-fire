const db = require('../services/firebase');


function recoverPassword(email, res) {

    if (email) {
      db.auth().sendPasswordResetEmail(email).then(function () {
        res.json({status: `email de redefinição enviado para ${email}`})
      }).catch(function (error) {
        res.json({status: `error ao tentar recuperar confirme se seu email é ${email}`});  
      });
    }
  }

  module.exports= recoverPassword;