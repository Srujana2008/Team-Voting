import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCXJAcPGfT3K3Jy-2gVUsKc6vZgFml5JLw",
    authDomain: "team-voting-app-e546d.firebaseapp.com",
    databaseURL: "https://team-voting-app-e546d-default-rtdb.firebaseio.com",
    projectId: "team-voting-app-e546d",
    storageBucket: "team-voting-app-e546d.appspot.com",
    messagingSenderId: "449473828861",
    appId: "1:449473828861:web:de3836c346d5cf2a1cab94",
    measurementId: "G-5CZFHTD2L7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();