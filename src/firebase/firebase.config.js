const firebaseConfig = {
    apiKey: "AIzaSyDmcXbiZl99iLZjVmbpUStq6Q160RabF04",
    authDomain: "travel-us-30ded.firebaseapp.com",
    projectId: "travel-us-30ded",
    storageBucket: "travel-us-30ded.appspot.com",
    messagingSenderId: "161306024226",
    appId: "1:161306024226:web:7afc2c17ea4885ca22ad7b"
};

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

export default firebaseConfig;