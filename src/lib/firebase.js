import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB1uGneHK3xzkFDpJexEHfCpza0bTg-1IQ',
  authDomain: 'instagram-mevin.firebaseapp.com',
  databaseURL: 'https://instagram-mevin.firebaseio.com',
  projectId: 'instagram-mevin',
  storageBucket: 'instagram-mevin.appspot.com',
  messagingSenderId: '549340810544',
  appId: '1:549340810544:web:e27912e63cd170371d8cf5',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
export {
  auth,
};
