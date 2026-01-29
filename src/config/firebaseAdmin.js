import admin from 'firebase-admin';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const serviceAccountPath = path.join(__dirname, '../../serviceAccountKey.json');

let db;
let isInitialized = false;

if (fs.existsSync(serviceAccountPath)) {
  try {
    const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf-8'));
    
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
    
    db = admin.firestore();
    isInitialized = true;
    console.log(' Firebase Admin initialized com serviceAccountKey.json');
  } catch (err) {
    console.error('Erro ao inicializar Firebase Admin:', err.message);
  }
} else {
  console.error(' serviceAccountKey.json não encontrado na raiz do projeto');
 
}

export { db, isInitialized };
