const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, "dist")));


app.post("/api/contact", (req, res) => {
  const { nom, email, message } = req.body;

  if (!nom || !email || !message) {
    return res.status(400).json({
      message: "Tous les champs sont obligatoires"
    });
  }

  const nouveauMessage = {
    nom,
    email,
    message,
    date: new Date()
  };

  const fichier = "messages.json";

  let messages = [];

  if (fs.existsSync(fichier)) {
    messages = JSON.parse(fs.readFileSync(fichier));
  }

  messages.push(nouveauMessage);

  fs.writeFileSync(
    fichier,
    JSON.stringify(messages, null, 2)
  );

  res.json({
    message: "Message reçu avec succès"
  });
});


app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "dist", "index.html")
  );
});


app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});