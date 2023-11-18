/* eslint-disable no-undef */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-EEq_KSn1JXhQjlIELH7DZLjKWwNOTQg",
  authDomain: import.meta.env.REACT_APP_authDomain,
  projectId: import.meta.env.REACT_APP_projectId,
  storageBucket: import.meta.env.REACT_APP_storageBucket,
  messagingSenderId: import.meta.env.REACT_APP_messagingSenderId,
  appId: import.meta.env.REACT_APP_appId,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
