// Import des modules Firebase (CDN)
import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Configuration Firebase (TA config récupérée étape 5)
const firebaseConfig = {
apiKey: "AIzaSyCEYTdYsfQtSuMJumEj2eBtxJ3Hs72zb_0",
authDomain: "portofolio-binta-kane.firebaseapp.com",
projectId: "portofolio-binta-kane",
storageBucket: "portofolio-binta-kane.firebasestorage.app",
messagingSenderId: "1060902993577",
appId: "1:1060902993577:web:b6178b2ed341b4d52473b8"
};

// Initialisation Firebase
const app = initializeApp(firebaseConfig);

// Connexion à Firestore
export const db = getFirestore(app);