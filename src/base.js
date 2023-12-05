import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBmypWbidC2IdCErzryZMTDq-Ink7_Q1ms",
    authDomain: "fir-student-98ffc.firebaseapp.com",
    projectId: "fir-student-98ffc",
    storageBucket: "fir-student-98ffc.appspot.com",
    messagingSenderId: "93196120215",
    appId: "1:93196120215:web:9078e9125af0dc593c39d2"

}

const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)

export default firestore