// =========================================
// MPT STORE V2
// Firebase Configuration
// admin/js/firebase.js
// =========================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";

import {
    getAuth
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

import {
    getDatabase,
    ref,
    push,
    set,
    update,
    remove,
    get,
    onValue
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

import {
    getStorage,
    ref as storageRef,
    uploadBytes,
    getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-storage.js";


// =========================================
// FIREBASE CONFIG
// =========================================

const firebaseConfig = {

    apiKey: "AIzaSyAHFgI1sxXMxu9umSfCQMLB2j4C2zH87N8",

    authDomain: "tebingtinggiorder.firebaseapp.com",

    databaseURL:
        "https://tebingtinggiorder-default-rtdb.asia-southeast1.firebasedatabase.app",

    projectId: "tebingtinggiorder",

    storageBucket:
        "tebingtinggiorder.firebasestorage.app",

    messagingSenderId:
        "374470707588",

    appId:
        "1:374470707588:web:d1fa72f4832753b401f5d1",

    measurementId:
        "G-BPKTES3HPY"

};


// =========================================
// INITIALIZE
// =========================================

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getDatabase(app);

const storage = getStorage(app);


// =========================================
// EXPORT
// =========================================

export {

    app,

    auth,

    db,

    storage,

    ref,

    push,

    set,

    update,

    remove,

    get,

    onValue,

    storageRef,

    uploadBytes,

    getDownloadURL

};


// =========================================
// HELPER
// =========================================

export function rupiah(value = 0) {

    return "Rp " +

        Number(value)

        .toLocaleString("id-ID");

}

export function uid(prefix = "") {

    return prefix +

        Date.now() +

        Math.random()

        .toString(36)

        .substring(2,8);

}

export function tanggal(time){

    return new Date(time)

    .toLocaleString("id-ID");

}

console.log("===================================");

console.log("MPT STORE V2");

console.log("Firebase Connected");

console.log("===================================");
