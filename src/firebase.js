import "firebase/firestore"
import firebase from "firebase/compat"
import 'firebase/compat/auth';
import {getDatabase, ref as DataRef, set as Dataset} from "firebase/database";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import {ref} from "vue";
import {useRouter} from "vue-router";






const firebaseConfig = {
    apiKey: "AIzaSyAx6w1Z5sUD5U5T3fOzfahEEZKBavpXSSQ",
    authDomain: "astronomical-c9399.firebaseapp.com",
    databaseURL: "https://astronomical-c9399-default-rtdb.firebaseio.com",
    projectId: "astronomical-c9399",
    storageBucket: "astronomical-c9399.appspot.com",
    messagingSenderId: "667664955975",
    appId: "1:667664955975:web:2238b8aad27c53f2594f62",
    measurementId: "G-86WSL0XGX4"
};


firebase.initializeApp(firebaseConfig);

let router = useRouter();
const db = firebase.firestore();
let auth = getAuth();
let signedIn = ref(false);





function checkIfSignedIn(){
    signedIn.value = auth.currentUser !== null;
}

function signUp(email, password, username, birthday, astrologySign, age){
    try{
        createUserWithEmailAndPassword(auth,email, password)
            .then(()=>{
                getAuth().onAuthStateChanged(()=>{
                    if(auth.currentUser !== null){
                        let userObject = {
                            UserID: auth.currentUser.uid,
                            Username: username,
                            Sign: astrologySign,
                            Birthday: birthday,
                            Age: age
                        }

                        db.collection("Users")
                            .doc(auth.currentUser.uid)
                            .set(userObject)
                            .then(()=>{
                                signedIn.value = true;
                                router.push('/').catch(()=>{
                                    console.log("Can't push")
                                })
                            })
                    }
                })
            }).then(()=>{
                signedIn.value = true;
        }).catch((err)=>{
            alert(err.message);
        })
    }catch (err){
        alert(err.message);
    }
}

function signOut(){
    auth.signOut()
        .then(()=>{
            signedIn.value = false;
        })
}

function signIn(email, password){
    signInWithEmailAndPassword(auth, email, password)
        .then(()=>{
            getAuth().onAuthStateChanged(()=>{
                signedIn.value = true;
            })
        })
        .catch((err)=>{
            alert(err.message);
        })


}


checkIfSignedIn();


export default {
    signedIn,
    signUp,
    signIn,
    auth,
    checkIfSignedIn,
    signOut
}

