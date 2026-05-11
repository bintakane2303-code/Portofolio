import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


/* 🔥 CONFIG FIREBASE (OK pour ton projet) */
const firebaseConfig = {
  apiKey: "AIzaSyCEYTdYsfQtSuMJumEj2eBtxJ3Hs72zb_0",
  authDomain: "portofolio-binta-kane.firebaseapp.com",
  projectId: "portofolio-binta-kane",
  storageBucket: "portofolio-binta-kane.appspot.com",
  messagingSenderId: "1060902993577",
  appId: "1:1060902993577:web:b6178b2ed341b4d52473b8"
};

/* 🔥 INITIALISATION FIREBASE */
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("🔥 Firebase connecté");

/* 🔥 FORMULAIRE */
const form = document.getElementById("contact-form");

if (!form) {
  console.error("❌ Formulaire introuvable");
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  console.log("📩 Formulaire soumis");

  const nom = document.getElementById("nom").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  try {
    console.log("🚀 Envoi vers Firestore...");

    const docRef = await addDoc(collection(db, "messages"), {
      nom: nom,
      email: email,
      message: message,
      date: new Date()
    });

    console.log("🔥 Message envoyé ID :", docRef.id);

    alert("Message envoyé avec succès !");
    form.reset();

  } catch (error) {
    console.error("❌ Erreur Firebase :", error);
    alert("Erreur : " + error.message);
  }
});