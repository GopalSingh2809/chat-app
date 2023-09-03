import firebase from 'firebase/app';
const config = {
  apiKey: 'AIzaSyBaW2TSovb26Y_Jz36sAO8C2UvXBwpQkLw',
  authDomain: 'chat-web-app-db78c.firebaseapp.com',
  databaseURL: 'https://chat-web-app-db78c-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-db78c',
  storageBucket: 'chat-web-app-db78c.appspot.com',
  messagingSenderId: '526055510091',
  appId: '1:526055510091:web:3c8e24673ded7d34b7fdce',
};

const app = firebase.initializeApp(config);
