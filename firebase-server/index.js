// firebase-server/index.js
const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const serviceAccount = require('./keys/serviceAccountKey.json');

// Initialiser Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://bd-test-ced90.firebaseio.com"
});

const db = admin.firestore();
const app = express();
app.use(cors({ origin: true }));

// Endpoint pour obtenir les projets
app.get('/api/projects', async (req, res) => {
  try {
    const snapshot = await db.collection('projects').get();
    const projects = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(projects);
  } catch (error) {
    console.error("Erreur lors de la récupération des projets :", error);
    res.status(500).send('Erreur serveur');
  }
});

// Lancer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
