
//new

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEpoipKfhO_1Zy8i6xqHdTDyVbbsmcpb8",
  authDomain: "blog-a-11.firebaseapp.com",
  projectId: "blog-a-11",
  storageBucket: "blog-a-11.appspot.com",
  messagingSenderId: "919110964451",
  appId: "1:919110964451:web:a1151e7dc54fe1203861d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth(app);
export default auth;
