// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// 2do paso importo getfirestore
import {getFirestore} from "firebase/firestore"
// paso 1 copio el certificado de la pag firebase, dentro de config de proyecto.
const firebaseConfig = {
  apiKey: "AIzaSyB9wdSD9p1eS2B1gcGpft-UHbIBmfBPNpA",
  authDomain: "doctacoffe.firebaseapp.com",
  projectId: "doctacoffe",
  storageBucket: "doctacoffe.appspot.com",
  messagingSenderId: "167023975364",
  appId: "1:167023975364:web:0b5bb7f7569517b19da291"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// 3er paso creo una variable para usar en todo el proyecto y poder consumir la base de datos de firebase
 export const db = getFirestore (app)