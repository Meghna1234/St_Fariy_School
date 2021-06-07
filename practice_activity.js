 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDUEvVCoWCc6c8OdIeIakBnLyRvbG5VewQ",
    authDomain: "kwitter-b14a6.firebaseapp.com",
    databaseURL: "https://kwitter-b14a6-default-rtdb.firebaseio.com",
    projectId: "kwitter-b14a6",
    storageBucket: "kwitter-b14a6.appspot.com",
    messagingSenderId: "289761139975",
    appId: "1:289761139975:web:97a5ab4ad66efad60df9a2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



function addUser(){
username = document.getElementById("practice_activity_input").value;
firebase.database().ref("/").child(username).update({
purpose:"adding user"
});
}