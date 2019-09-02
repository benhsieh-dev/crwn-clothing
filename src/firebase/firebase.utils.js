import firebase from 'firebase/app'; 
import 'firebase/firestore';
import 'firebase/auth'; 

const config = {
        apiKey: "AIzaSyByIOcHylkfR2X2EIrIuvy23_L2KSY_pCg",
        authDomain: "crwn-db-8dd35.firebaseapp.com",
        databaseURL: "https://crwn-db-8dd35.firebaseio.com",
        projectId: "crwn-db-8dd35",
        storageBucket: "",
        messagingSenderId: "198528788666",
        appId: "1:198528788666:web:5b9be768598b2b3a"
}; 

firebase.initializeApp(config); 

export const auth = firebase.auth(); 
export const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider(); 
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider); 

export default firebase; 