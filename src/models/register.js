const profileModel = require('./user.js');
const db = require('../services/firebase');

function fireAuth( email, password, app, name) {
    if (email) {
      db.auth().createUserWithEmailAndPassword(email, password)
        .then(function (result) {
          const data  = profileModel.create({email,password,name})
          console.log(`Usuário cadastrado com Sucesso!`);
          app.json({status: 'Sucess'})
        }).catch(function (error) {
        console.log(`Erro ao cadastrar!`)
        app.json({status: 'Error'})
      });
    } else {
    console.log('Campos inválidos');
    app.json({status: 'Invalid form'})
  }
  }

module.exports = fireAuth;
