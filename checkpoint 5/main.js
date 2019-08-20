document.getElementById("bot").addEventListener("submit", function(e) {
  e.preventDefault();
  console.log("here");
  submitPeople();
});

var firebaseConfig = {
  apiKey: "AIzaSyAmlC_Ph_uAk-hRK8sbsp1DSabmuHfV0Gw",
  authDomain: "checkpoint-e7bd1.firebaseapp.com",
  databaseURL: "https://checkpoint-e7bd1.firebaseio.com",
  projectId: "checkpoint-e7bd1",
  storageBucket: "",
  messagingSenderId: "300619040844",
  appId: "1:300619040844:web:ffcd17817c1d8764",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let database = firebase.database();
let ref = database.ref("people");
//préparer les information
function submitPeople() {
  let data = {
    name: document.querySelector("#Name").value,
    track: document.querySelector("#track").value,
    mail: document.querySelector("#Email").value,
    phone: document.querySelector("#Phone").value,
  };
  console.log(data);
  ref.push(data);
}
