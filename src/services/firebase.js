const firebase =  require('firebase');
require('dotenv').config()


 const apiKey = process.env.API_KEY
 const authDomain = process.env.AUTH_DOMAIN
 const databaseURL = process.env.DATA_BASE_URL
 const projectId = process.env.PROJECT_ID
 const storageBucket = process.env.STORAGE_BUCKET
 const messagingSenderId = process.env.MESSAGING_SENDER_ID
 const appId = process.env.APP_ID
 const measurementId = process.env.MEASUREMENT_ID


var firebaseConfig = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
};

const db = firebase.initializeApp(firebaseConfig);

module.exports = db;