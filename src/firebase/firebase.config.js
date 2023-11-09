// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_SENDERID,
  appId: import.meta.env.VITE_APPID
};
// const firebaseConfig = {
//   apiKey: "AIzaSyCtJnYrBh4iO2z9Q1skAvj5uNJTZdB_E0s",
//   authDomain: "community-food-sharing-85ff9.firebaseapp.com",
//   projectId: "community-food-sharing-85ff9",
//   storageBucket: "community-food-sharing-85ff9.appspot.com",
//   messagingSenderId: "900078307666",
//   appId: "1:900078307666:web:38802765ee1fdd8b93d28b"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
export default app;