import * as admin from "firebase-admin";
var serviceAccount = require("./firebase.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
  databaseURL: "https://cap2-f2deb-default-rtdb.firebaseio.com",
});
const firestore = admin.firestore();
const rtdb = admin.database();

export { firestore, rtdb };
