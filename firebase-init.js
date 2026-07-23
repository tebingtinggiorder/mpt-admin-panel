// ========================================
// MPT STORE - Firebase Initialization
// ========================================

// Konfigurasi Firebase
const firebaseConfig = {
    apiKey: "ISI_API_KEY_ANDA",
    authDomain: "ISI_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://tebingtinggiorder-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ISI_PROJECT_ID",
    storageBucket: "ISI_PROJECT_ID.appspot.com",
    messagingSenderId: "ISI_SENDER_ID",
    appId: "ISI_APP_ID"
};

// Inisialisasi Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Database
const database = firebase.database();

// Storage
const storage = firebase.storage();

// Referensi Database
const REF = {
    products: database.ref("produk"),
    categories: database.ref("kategori"),
    users: database.ref("users"),
    orders: database.ref("orders"),
    settings: database.ref("settings"),
    visitors: database.ref("visitors"),
    comments: database.ref("comments")
};

// Membuat ID unik
function createId(prefix = "") {
    return prefix + "_" + Date.now() + "_" + Math.random().toString(36).substring(2, 8);
}

// Format Rupiah
function rupiah(nominal) {
    return "Rp " + Number(nominal || 0).toLocaleString("id-ID");
}

// Format tanggal Indonesia
function formatTanggal(time) {
    return new Date(time).toLocaleString("id-ID");
}

// Upload gambar ke Firebase Storage
async function uploadImage(file) {

    if (!file) return "";

    const filename = "produk/" + Date.now() + "_" + file.name;

    const ref = storage.ref(filename);

    await ref.put(file);

    return await ref.getDownloadURL();
}

// Simpan data
function save(path, data) {
    return database.ref(path).set(data);
}

// Update data
function update(path, data) {
    return database.ref(path).update(data);
}

// Hapus data
function remove(path) {
    return database.ref(path).remove();
}

// Ambil data sekali
function get(path) {
    return database.ref(path).once("value");
}

// Realtime Listener
function listen(path, callback) {
    database.ref(path).on("value", callback);
}

// Push data otomatis
function push(path, data) {
    return database.ref(path).push(data);
}

console.log("✅ Firebase Connected");
