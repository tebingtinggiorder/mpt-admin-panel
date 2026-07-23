// =========================================
// MPT STORE V2
// Firebase Authentication
// admin/js/auth.js
// =========================================

import {
    auth,
    db,
    ref,
    get
} from "./firebase.js";

import {
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

// =========================================
// LOGIN
// =========================================

export async function login(email, password) {

    try {

        const result = await signInWithEmailAndPassword(

            auth,

            email,

            password

        );

        const uid = result.user.uid;

        const snap = await get(

            ref(db, "users/" + uid)

        );

        if (!snap.exists()) {

            alert("Data admin tidak ditemukan.");

            await signOut(auth);

            return false;

        }

        const user = snap.val();

        if (!user.status) {

            alert("Akun dinonaktifkan.");

            await signOut(auth);

            return false;

        }

        if (

            user.role !== "superadmin" &&

            user.role !== "admin"

        ) {

            alert("Anda bukan administrator.");

            await signOut(auth);

            return false;

        }

        localStorage.setItem(

            "mpt_admin",

            JSON.stringify({

                uid: uid,

                email: user.email,

                name: user.name,

                role: user.role

            })

        );

        location.href = "dashboard.html";

    }

    catch (err) {

        console.error(err);

        alert(err.message);

    }

}

// =========================================
// LOGOUT
// =========================================

export async function logout() {

    await signOut(auth);

    localStorage.removeItem("mpt_admin");

    location.href = "index.html";

}

// =========================================
// CURRENT USER
// =========================================

export function currentUser() {

    const data =

        localStorage.getItem("mpt_admin");

    if (!data)

        return null;

    return JSON.parse(data);

}

// =========================================
// GUARD
// =========================================

export function guard() {

    onAuthStateChanged(auth, user => {

        if (!user) {

            location.href = "index.html";

        }

    });

}

// =========================================
// LOAD PROFILE
// =========================================

export function loadProfile() {

    const admin = currentUser();

    if (!admin)

        return;

    const email =

        document.getElementById("user-email");

    if (email)

        email.innerText = admin.email;

    const name =

        document.getElementById("user-name");

    if (name)

        name.innerText = admin.name;

}

// =========================================

console.log("Authentication Ready");
