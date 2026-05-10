import { db } from "./firebase-config.js";
import { collection, addDoc, serverTimestamp }
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Récupération des éléments
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

// Sécurité : vérifier que le formulaire existe
if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const nom = document.getElementById("nom").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Vérification
        if (!nom || !email || !message) {
            status.textContent = "⚠️ Remplis tous les champs";
            status.style.color = "orange";
            return;
        }

        status.textContent = "⏳ Envoi en cours...";
        status.style.color = "gray";

        try {
            await addDoc(collection(db, "Messages"), {
                nom: nom,
                email: email,
                message: message,
                date: serverTimestamp()
            });

            status.textContent = "✅ Message envoyé avec succès !";
            status.style.color = "green";

            form.reset();

        } catch (error) {
            console.error("Erreur Firestore :", error);

            status.textContent = "❌ Erreur lors de l'envoi";
            status.style.color = "red";
        }
    });
}