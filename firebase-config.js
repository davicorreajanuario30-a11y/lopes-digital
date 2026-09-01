import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyAftyWN6Mgb4BGQgawGsdD5gJ-o_3eQrmM",
  authDomain: "lopes-digital-web.firebaseapp.com",
  projectId: "lopes-digital-web",
  storageBucket: "lopes-digital-web.firebasestorage.app",
  messagingSenderId: "851495968730",
  appId: "1:851495968730:web:2e56e1b84b12a26b9baae3"
};

const app = initializeApp(firebaseConfig);

export { app };
