  // Configuração do Aplicativo do Firebase.com
  var firebaseConfig = {
    apiKey: "AIzaSyAJIaJEkilJd5W1cXFl2qT2BrRPnMuBfpU",
    authDomain: "dog-world-8eb5f.firebaseapp.com",
    databaseURL: "https://dog-world-8eb5f.firebaseio.com",
    projectId: "dog-world-8eb5f",
    storageBucket: "dog-world-8eb5f.appspot.com",
    messagingSenderId: "547092435255",
    appId: "1:547092435255:web:6b550969d01ef75a640ab2"
  };

  // Inicializa Firebase.com
  var firebase = firebase.initializeApp(firebaseConfig);

  // Inicializa o Cloud Firestore (Banco de dados)
  var db = firebase.firestore();