const firebaseConfig = {
  apiKey: "AIzaSyCqVydCqpAvM5uc9fT2_IEQ3qExtqpAyFQ",
  authDomain: "sal-sstrawberries.firebaseapp.com",
  databaseURL: "https://sal-sstrawberries-default-rtdb.firebaseio.com",
  projectId: "sal-sstrawberries",
  storageBucket: "sal-sstrawberries.firebasestorage.app",
  messagingSenderId: "397104764316",
  appId: "1:397104764316:web:8286b3e80ec23a59d5a459",
  measurementId: "G-BHL7MWG7Q2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

console.log("Firebase initialize finished:");
console.log(firebase);