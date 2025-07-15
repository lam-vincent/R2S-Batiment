// cookies.js

window.addEventListener("load", function () {
    window.cookieconsent.initialise({
      palette: {
        popup: { background: "#1f2b6c", text: "#ffffff" },
        button: { background: "#fcb900", text: "#000000" }
      },
      position: "bottom-right",
      theme: "classic",
      type: "opt-in",
      content: {
        message: "Nous utilisons des cookies pour améliorer votre expérience.",
        allow: "Accepter",
        deny: "Refuser",
        link: "En savoir plus",
        href: "/politique-confidentialite.html"
      }
    });
  });
  