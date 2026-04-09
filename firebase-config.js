// ==================== MOKA - Firebase Configuration ====================
const firebaseConfig = {
    apiKey: "AIzaSyBtLujUdKoq1zGb20LSZXG5ogPVqMfhhzg",
    authDomain: "gomka-bc223.firebaseapp.com",
    databaseURL: "https://gomka-bc223-default-rtdb.firebaseio.com/",
    projectId: "gomka-bc223",
    storageBucket: "gomka-bc223.firebasestorage.app",
    messagingSenderId: "355944182113",
    appId: "1:355944182113:web:3606605581e4c52239d520"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Services
const auth = firebase.auth();
const db = firebase.database();
const storage = firebase.storage();

// Cloudinary
const CLOUD_NAME = 'dk9xej3cf';
const UPLOAD_PRESET = 'k30_mk';

// Agora
const AGORA_APP_ID = '929646610d814d529a06c4081c81325f';

// Admin Account
const ADMIN_EMAIL = 'jasim88v@gmail.com';
const ADMIN_PASSWORD = 'kk2314kk';

// Site Name
const SITE_NAME = 'MOKA';

console.log('✅ MOKA - Firebase, Cloudinary & Agora Ready');
