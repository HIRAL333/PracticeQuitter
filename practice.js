//ADD YOUR FIREBASE LINKS


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCmjo_758gJ9KIzHmf64QUn0fXBJ7iodUQ",
    authDomain: "kwitter-76f00.firebaseapp.com",
    databaseURL: "https://kwitter-76f00-default-rtdb.firebaseio.com",
    projectId: "kwitter-76f00",
    storageBucket: "kwitter-76f00.appspot.com",
    messagingSenderId: "545409332856",
    appId: "1:545409332856:web:e57ce628b928f27f249f8d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser(){
username = document.getElementById("user_name").value;
firebase.database().ref("/").child(username).update({
    purpose: "Nothing"
});
}