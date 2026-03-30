import { initializeApp } from 'firebase/app';
import { getFirestore }  from 'firebase/firestore';

const firebaseConfig = {
  apiKey:            'AIzaSyBIDNZ0Baiay7NrLzSIggckcje0xPQdDYc',
  authDomain:        'pixel-logic.firebaseapp.com',
  projectId:         'pixel-logic',
  storageBucket:     'pixel-logic.firebasestorage.app',
  messagingSenderId: '1014361866265',
  appId:             '1:1014361866265:web:4f98654e41182607c2ea88',
};

export const app = initializeApp(firebaseConfig);
export const db  = getFirestore(app);
