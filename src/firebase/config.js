import Firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDHwLTAHhYK4bbVycDPESGwFHhakQ27EXU",
  databaseURL: "https://chatchitapp-b1f1d-default-rtdb.firebaseio.com/",
  projectId: "chatchitapp-b1f1d",
  appId: "1:259243338425:web:4fa97cd0effb5986a24968",
};

export default Firebase.initializeApp(firebaseConfig);
