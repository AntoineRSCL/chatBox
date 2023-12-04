import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseApp = initializeApp({
    apiKey: "AIzaSyAO2dbYXcLCi5V1mnm8v3Vo_UGR5jm9ODg",
    authDomain: "chatbox-1c7f4.firebaseapp.com",
    databaseURL: "https://chatbox-1c7f4-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chatbox-1c7f4",
    storageBucket: "chatbox-1c7f4.appspot.com",
    messagingSenderId: "645031695046",
    appId: "1:645031695046:web:9ffdc55a06e972edeffdc7"
})

const database = getDatabase(firebaseApp)

export default database