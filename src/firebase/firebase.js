import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUOiBsH8EjoToVi_da3dO60th_uh-v8VU",
  authDomain: "react-auth-app-868a3.firebaseapp.com",
  projectId: "react-auth-app-868a3",
  storageBucket: "react-auth-app-868a3.firebasestorage.app",
  messagingSenderId: "660505853683",
  appId: "1:660505853683:web:c21482d94a8cd224a24186"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🔥 IMPORTANT: export auth
export const auth = getAuth(app);