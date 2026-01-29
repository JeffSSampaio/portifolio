import admin from 'firebase-admin';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const serviceAccountPath = path.resolve(__dirname, 'serviceAccountKey.json');

console.log(' Procurando:', serviceAccountPath);

if (!fs.existsSync(serviceAccountPath)) {
  console.error(' serviceAccountKey.json não encontrado em:', serviceAccountPath);
  process.exit(1);
}

const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf-8'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function initializeFirestore() {
  try {
    console.log('Inicializando Firestore...');

    console.log('Firestore inicializado com sucesso!');
    process.exit(0);
  } catch (err) {
    console.error(' Erro ao inicializar Firestore:', err);
    process.exit(1);
  }
}

initializeFirestore();
