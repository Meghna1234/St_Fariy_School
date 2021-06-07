  // Your web app's Firebase configuration
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

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function add_room() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding user"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
  }

  function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  }
  getData();

  function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
  }

  
 function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}