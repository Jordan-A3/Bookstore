import firebase from 'firebase';
const config = {
   apiKey: "AIzaSyAQ6G56YEUsAbRrm9YXYjOgbsR5J7bGEbc",
    authDomain: "catalog-91aee.firebaseapp.com",
    databaseURL: "https://catalog-91aee.firebaseio.com",
    projectId: "catalog-91aee",
    storageBucket: "catalog-91aee.appspot.com",
    messagingSenderId: "985804456271",
};
firebase.initializeApp(config);
export default firebase;