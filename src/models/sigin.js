const db = require('../services/firebase');
const profileModel = require('./user.js');


function fireSingIn(email, password, res) {
  if (email) {
    db.auth().signInWithEmailAndPassword(email, password)
      .then(async function (result) {
        const auth = await profileModel.find({ email });
        res.json(auth);

      }).catch(function (error) {

        res.json({ status: 'error' });

      });
  } else {
    res.json({ status: 'invalid form' });
  }
}


module.exports = fireSingIn;