import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
	  // firebase utils
	const db = firebase.firestore()
	//const auth = firebase.auth()
	//const currentUser = auth.currentUser

	// date issue fix according to firebase
	/*const settings = {
	    timestampsInSnapshots: true
	}
	db.settings(settings)*/

	// firebase collections
	const usersCollection = db.collection('users')
	const userBoard = db.collection('boards')
	const postsCollection = db.collection('posts')
	const commentsCollection = db.collection('comments')
	const likesCollection = db.collection('likes')

	export {
	    db,
	   // auth,
	    userBoard,
	    //currentUser,
	    usersCollection,
	    postsCollection,
	    commentsCollection,
	    likesCollection
	}