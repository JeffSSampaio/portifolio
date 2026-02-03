import { collection, getDocs, doc, runTransaction } from "firebase/firestore";
import { db } from "../config/firebase.js"; 
import { Info } from "../models/info.js";


export async function getInfo() {
    const infoRef = collection(db, "info");
    const snapshot = await getDocs(infoRef);

    if (snapshot.empty) throw new Error("Nenhum Info encontrado");

    const infos = [];
    snapshot.forEach(docSnap => {
        infos.push(Info.fromJSON({ id: docSnap.id, ...docSnap.data() }));
    });

    return infos;
}


export async function addInfo(infoData) {
    const counterRef = doc(db, "counters", "info");
    const infoRef = collection(db, "info");

    return runTransaction(db, async (transaction) => {
        const counterDoc = await transaction.get(counterRef);
        const nextId = counterDoc.data().current + 1;

        const docRef = doc(infoRef); 

        transaction.update(counterRef, { current: nextId });
        transaction.set(docRef, { id: nextId, ...infoData });

        return nextId;
    });
}
