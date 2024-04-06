
    
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6ZExN0B8SxkphGvb0AMPxXelBNWTMW2U",
    authDomain: "authentication-7e627.firebaseapp.com",
    projectId: "authentication-7e627",
    storageBucket: "authentication-7e627.appspot.com",
    messagingSenderId: "637053193527",
    appId: "1:637053193527:web:a2cdddd15465b5c5aa5eb2"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
console.log(auth);
const authForm = document.querySelector('#authenticationForm');
const email = authForm.querySelector('input[type="email"]');
const password = authForm.querySelector('input[type="password"]');
const hiddenContent = document.querySelector('#hiddenContent');

function onUserStateChanged() {
    if (auth.currentUser) {
        authForm.style.display = 'none';
        hiddenContent.style.display = 'block';
        document.querySelector('#username').innerText = auth.currentUser.email;
    } else {
        authForm.style.display = 'block';
        hiddenContent.style.display = 'none';
    }
}

auth.onAuthStateChanged((user) => {
    onUserStateChanged();
});

authForm.querySelector('button[id="signUp"]')
    .addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    });

authForm.querySelector('button[id="signIn"]')
    .addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        signInWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    });


document.querySelector('button[id="signOut"]')
    .addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        signOut(auth)
            .then(() => {
                console.log('Sign out');
            })
            .catch((error) => {
                console.log(error);
            });
    });

