// firebase-init.js - Konfigurasi Utama Firebase SDK Compat
const firebaseConfig = {
    apiKey: "MASUKKAN_API_KEY_ANDA",
    authDomain: "MASUKKAN_AUTH_DOMAIN_ANDA",
    databaseURL: "https://tebingtinggiorder-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "MASUKKAN_PROJECT_ID_ANDA",
    storageBucket: "MASUKKAN_STORAGE_BUCKET_ANDA",
    messagingSenderId: "MASUKKAN_MESSAGING_SENDER_ID_ANDA",
    appId: "MASUKKAN_APP_ID_ANDA"
};

// Inisialisasi Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const database = firebase.database();
const storage = firebase.storage();
