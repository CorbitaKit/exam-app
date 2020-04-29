import * as firebase from "firebase";
import "firebase/firestore";

//initialize configuration

const config = {
	apiKey: process.env.VUE_APP_FIRE_BASE_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_DATABASE_URL,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUKET,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
    appId : process.env.VUE_APP_APP_ID,
    messeurementId : process.env.VUE_APP_MEASUREMENT_ID
};

firebase.initializeApp(config);

//firebase utilities

const db = firebase.firestore();

export {
    db
};