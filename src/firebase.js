import firebase from 'firebase/app'
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCVMV_e9lJdDlty_Zkh87bYg5JnF6ON1fE",
    authDomain: "crude-53852.firebaseapp.com",
    projectId: "crude-53852",
    storageBucket: "crude-53852.appspot.com",
    messagingSenderId: "542975260771",
    appId: "1:542975260771:web:e42c5c0d5dea33c6a22056"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)