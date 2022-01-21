const functions = require('firebase-functions');
const admin = require('firebase-admin');

let db = admin.initializeApp(functions.config().firebase).firestore();
db.settings({ ignoreUndefinedProperties: true })

module.exports.db = db;


