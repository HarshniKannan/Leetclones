import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyD_SYA8MwPwzfLG-0TELg5C4JdEees9dI4",
	authDomain: "leetcode-yt-b0559.firebaseapp.com",
	projectId: "leetcode-yt-b0559",
	storageBucket: "leetcode-yt-b0559.appspot.com",
	messagingSenderId: "243290184248",
	appId: "1:243290184248:web:2f55d5ae0fea76f97124cd"
  };

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };
