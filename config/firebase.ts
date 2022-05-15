import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
export const firebaseConfig = {
  apiKey: 'AIzaSyAW01ANDqkd9d3McnUCUPVPyd8WWJYALVM',
  authDomain: 'app-pia-675bc.firebaseapp.com',
  projectId: 'app-pia-675bc',
  storageBucket: 'app-pia-675bc.appspot.com',
  messagingSenderId: '700015163611',
  appId: '1:700015163611:web:e881c9720cfb5de61eb4fe',
  measurementId: 'G-GE9CFD0SM2'
};
const app = initializeApp(firebaseConfig);
if (typeof window !== 'undefined') {
  getAnalytics(app);
}
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
