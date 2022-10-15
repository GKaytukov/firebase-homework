import { initializeApp, cert } from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';


import serviceAccount from './serviceAccount.js';


initializeApp({
    credential: cert(serviceAccount)
}); 

const db = getFirestore(); 

const newGame = {


}

//Practice this first steps over and over 