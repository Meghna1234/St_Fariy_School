 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyCvzoxq4TLcEWouEPEDaECZAPM5qi17fd4",
  authDomain: "kwitter-v2.firebaseapp.com",
  databaseURL: "https://kwitter-v2-default-rtdb.firebaseio.com",
  projectId: "kwitter-v2",
  storageBucket: "kwitter-v2.appspot.com",
  messagingSenderId: "880547955140",
  appId: "1:880547955140:web:1407f42e2f44c61e6ce491"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  function addUser(){
    user_name = document.getElementById('user_name').value;
    localStorage.setItem("user_name",user_name);
    window.location = "kwitter_room.html";
}