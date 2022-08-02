const firebaseConfig = {
    apiKey: "AIzaSyA3xTigke-vIvtLY7gFx7aTfeRpiqMHZMQ",
    authDomain: "c100-6e78c.firebaseapp.com",
    databaseURL: "https://c100-6e78c-default-rtdb.firebaseio.com",
    projectId: "c100-6e78c",
    storageBucket: "c100-6e78c.appspot.com",
    messagingSenderId: "940527800574",
    appId: "1:940527800574:web:9103223b7bd28d058a95af"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


  //ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
    window.location = "chat_room.html";
}

function addRoom()
{

room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "chat_room.html";
}


