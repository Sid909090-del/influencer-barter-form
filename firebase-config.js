// ============================================================
// FIREBASE SETUP INSTRUCTIONS (one-time, 100% free - Spark plan)
// ============================================================
// 1. https://console.firebase.google.com -> Add Project (any name).
// 2. Build -> Authentication -> Sign-in method -> Enable "Email/Password".
// 3. Build -> Firestore Database -> Create database (production mode, region close to India).
// 4. Project settings -> General -> "Your apps" -> Web icon (</>) -> register app.
// 5. Paste the config values below.
// 6. Paste firestore-rules.txt into Firestore Rules tab and Publish.
// 7. ADMIN LOGIN: username "siddheshmayuri", password "ILOVEYOU".
//    One-time setup: open register.html once and create an account using
//    email "siddheshmayuri@brandcrafter.tech" and password "ILOVEYOU"
//    (use any phone placeholder like 9999999999 for this admin account).
//    After that, admin.html login with username "siddheshmayuri" will work.
// 8. Deploy apps-script.gs as a Web App (see its own comments) and paste the
//    Web App URL into APPS_SCRIPT_URL below - it sends real OTP emails for free.

const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY",
  authDomain: "PASTE_YOUR_PROJECT.firebaseapp.com",
  projectId: "PASTE_YOUR_PROJECT_ID",
  storageBucket: "PASTE_YOUR_PROJECT.appspot.com",
  messagingSenderId: "PASTE_YOUR_SENDER_ID",
  appId: "PASTE_YOUR_APP_ID"
};

const ADMIN_USERNAME = "siddheshmayuri";
const ADMIN_EMAIL = "siddheshmayuri@brandcrafter.tech";
const APPS_SCRIPT_URL = "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";
