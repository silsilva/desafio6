import firebase from "firebase";

const app = firebase.initializeApp({
  apiKey: process.env.API_KEY,
  databaseURL: process.env.DB_URL,
  authDomain: process.env.AUTH_DOMAIN,
});
const rtdb = firebase.database();
export { rtdb };
