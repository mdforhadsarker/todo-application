import firebase from 'firebase/app'
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDaKcrLIYRXe3ZdBYQ8MlzpFeDIQvqNdP8",
    authDomain: "todoapp-4b019.firebaseapp.com",
    databaseURL: "https://todoapp-4b019.firebaseio.com",
    projectId: "todoapp-4b019",
    storageBucket: "todoapp-4b019.appspot.com",
    messagingSenderId: "311266519952",
    appId: "1:311266519952:web:dee977dd24c1e9d76ce115"
})

export { firebaseConfig as firebase};