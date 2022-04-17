// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtcJldQJ6jsP_W62Z9cW9MmyBV8SdV5Xs",
  authDomain: "gym-body-builder.firebaseapp.com",
  projectId: "gym-body-builder",
  storageBucket: "gym-body-builder.appspot.com",
  messagingSenderId: "128470396360",
  appId: "1:128470396360:web:440d055414e41c8d8d24fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;