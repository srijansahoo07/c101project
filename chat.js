// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyD1P8xQMiIpzREPcgelVCeO132vZfMnUoI",
    authDomain: "c100project-4a3f4.firebaseapp.com",
    projectId: "c100project-4a3f4",
    storageBucket: "c100project-4a3f4.appspot.com",
    messagingSenderId: "608034023177",
    appId: "1:608034023177:web:1d6514fec1c63b14b095d8"
  };
  
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



