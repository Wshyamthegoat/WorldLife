const firebaseConfig = {
    apiKey: "AIzaSyAzOZQLeY9s1M5NwTckCkvcLXVnbfnnqXQ",
    authDomain: "kwitter-4ec4b.firebaseapp.com",
    databaseURL: "https://kwitter-4ec4b-default-rtdb.firebaseio.com",
    projectId: "kwitter-4ec4b",
    storageBucket: "kwitter-4ec4b.appspot.com",
    messagingSenderId: "442098379928",
    appId: "1:442098379928:web:2329f64d4dbcce0fc274ed"
  };
  const app = initializeApp(firebaseConfig);

function addRoom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.local = "kwitter_page.html";
}
function logout()  {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}