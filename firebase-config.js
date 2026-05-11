import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// 🔥 CONFIG CORRIGÉE
const firebaseConfig = {
  apiKey: "AIzaSyCEYTdYsfQtSuMJumEj2eBtxJ3Hs72zb_0",
  authDomain: "portofolio-binta-kane.firebaseapp.com",
  projectId: "portofolio-binta-kane",
  storageBucket: "portofolio-binta-kane.appspot.com", // 🔴 CORRIGÉ
  messagingSenderId: "1060902993577",
  appId: "1:1060902993577:web:b6178b2ed341b4d52473b8"
};

// 🔥 INIT FIREBASE
const app = initializeApp(firebaseConfig);

// 🔥 FIRESTORE
export const db = getFirestore(app);

console.log("🔥 Firebase OK");