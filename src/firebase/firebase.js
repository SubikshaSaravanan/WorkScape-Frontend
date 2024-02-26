import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";


const firebaseApp = initializeApp({
    apiKey: "AIzaSyB89wEJdvqawQFYZZuMCTGpHrvVcz-UR_4",
    authDomain: "workscape-21f86.firebaseapp.com",
    projectId: "workscape-21f86",
    storageBucket: "workscape-21f86.appspot.com",
    messagingSenderId: "958065473606",
    appId: "1:958065473606:web:d748b52fe4197202dd3247"
});


const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);

export {auth, storage};