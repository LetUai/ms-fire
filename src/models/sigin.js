const db = require('../services/firebase');

function fireSingIn(email, password, res) {
    if (email) {
      db.auth().signInWithEmailAndPassword(email, password)
        .then(function (result) {
           
             res.json(result);

        }).catch(function (error) {
            
            res.json({status: 'error'});

        });
    } else { res.json({status: 'invalid form'});
    }
  }


  module.exports = fireSingIn;