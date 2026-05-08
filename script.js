// =========================
// SCROLL FLUIDE NAVBAR
// =========================
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// =========================
// NAVBAR ACTIVE LINK
// =========================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});


// =========================
// ANIMATION AU SCROLL
// =========================
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll(".card, .section, .skill").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});


// =========================
// EFFET BOUTONS
// =========================
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("mouseover", () => {
        btn.style.transform = "scale(1.05)";
    });

    btn.addEventListener("mouseout", () => {
        btn.style.transform = "scale(1)";
    });
});


// =========================
// FORMULAIRE (SIMULATION)
// =========================
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = form.querySelector("input[type='text']").value;
    const email = form.querySelector("input[type='email']").value;
    const message = form.querySelector("textarea").value;

    if (name === "" || email === "" || message === "") {
        alert("Veuillez remplir tous les champs !");
        return;
    }

    alert("Message envoyé avec succès !");
    form.reset();
});


// =========================
// BOUTON WHATSAPP
// =========================
const whatsappBtn = document.querySelector(".whatsapp-btn");

if (whatsappBtn) {
    whatsappBtn.addEventListener("click", function(e) {
        e.preventDefault();
        const phone = "221770860544"; // ton numéro
        const message = "Bonjour Binta, je suis intéressé par vos services.";
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    });
}


// =========================
// EFFET IMAGE HERO
// =========================
const heroImg = document.querySelector(".hero-img img");

if (heroImg) {
    heroImg.addEventListener("mouseover", () => {
        heroImg.style.transform = "scale(1.1) rotate(2deg)";
    });

    heroImg.addEventListener("mouseout", () => {
        heroImg.style.transform = "scale(1) rotate(0deg)";
    });
}