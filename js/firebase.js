  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
  import {
    getFirestore, collection, getDocs, addDoc, updateDoc,
    deleteDoc, doc, setDoc, getDoc, serverTimestamp
  } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";
  import {
    getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,
    signOut, onAuthStateChanged, updateProfile
  } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCYFt12IsMtPEUOlaV0TauBTjWtg1uNkRk",
    authDomain: "mariage-keziah-et-briac.firebaseapp.com",
    projectId: "mariage-keziah-et-briac",
    storageBucket: "mariage-keziah-et-briac.firebasestorage.app",
    messagingSenderId: "279749705930",
    appId: "1:279749705930:web:b9e5f706da973a5f4e7433"
  };

  const app = initializeApp(firebaseConfig);
  const db  = getFirestore(app);
  const auth = getAuth(app);

  // Expose Firestore
  window.db = db;
  window.fbCollection = collection; window.fbGetDocs = getDocs;
  window.fbAddDoc = addDoc;         window.fbUpdateDoc = updateDoc;
  window.fbDeleteDoc = deleteDoc;   window.fbDoc = doc;
  window.fbSetDoc = setDoc;         window.fbGetDoc = getDoc;
  window.fbServerTimestamp = serverTimestamp;

  // Expose Auth
  window.fbAuth = auth;
  window.fbSignIn = signInWithEmailAndPassword;
  window.fbSignUp = createUserWithEmailAndPassword;
  window.fbSignOut = signOut;
  window.fbUpdateProfile = updateProfile;

  // ── Gestion de l'état d'authentification ──
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // Connecté → masquer l'overlay
      window.currentUser = user;
      const overlay = document.getElementById('auth-overlay');
      overlay.style.opacity = '0';
      setTimeout(() => { overlay.style.display = 'none'; }, 400);
      // Afficher le nom dans le nav
      if (typeof updateNavUser === 'function') updateNavUser(user);
      // Charger les données Firebase
      window.loadAllFromFirebase();
    } else {
      // Déconnecté → afficher l'overlay
      window.currentUser = null;
      const overlay = document.getElementById('auth-overlay');
      overlay.style.display = 'flex';
      overlay.style.opacity = '1';
      if (typeof updateNavUser === 'function') updateNavUser(null);
      // Remettre le bouton de login
      const btn = document.getElementById('login-btn');
      if (btn) { btn.disabled = false; btn.textContent = 'Se connecter'; }
    }
  });

  console.log("Firebase + Auth connectés 🚀");
