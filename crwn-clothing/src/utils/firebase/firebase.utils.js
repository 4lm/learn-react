import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2P_s6sI-beuk7vKye3uCCOfffTjQ2rDk",
  authDomain: "crwn-clothing-v2-8feb8.firebaseapp.com",
  projectId: "crwn-clothing-v2-8feb8",
  storageBucket: "crwn-clothing-v2-8feb8.appspot.com",
  messagingSenderId: "377280021013",
  appId: "1:377280021013:web:1c7339d02634c27a1e041c",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
