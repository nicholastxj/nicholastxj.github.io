import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const app = initializeApp({
  apiKey: "AIzaSyAvRGF4Vtgx8HHXV93cbq0hodey4nEmA9g",
  authDomain: "catconnect-1306.firebaseapp.com",
  projectId: "catconnect-1306",
  storageBucket: "catconnect-1306.appspot.com",
  messagingSenderId: "427864572218",
  appId: "1:427864572218:web:d13191c74bf8d403dc1003",
});

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
