const firebaseConfig = {
    apiKey: "AIzaSyBavKNT4hXJC1DsvdkbBUxKHlBb8wB61Z0",
    authDomain: "learntopia-9aeed.firebaseapp.com",
    projectId: "learntopia-9aeed",
    storageBucket: "learntopia-9aeed.appspot.com",
    messagingSenderId: "864296470779",
    appId: "1:864296470779:web:f5ccdd5e8509e17978885e"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();