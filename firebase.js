// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, push, set } from "firebase/database";
// import { getDatabase, ref, set, push } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBodL-nt1_bN2URVTqiFIujrSzZZR7C0N8",
  authDomain: "portfolio-db-2f39b.firebaseapp.com",
  databaseURL: "https://portfolio-db-2f39b-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "portfolio-db-2f39b",
  storageBucket: "portfolio-db-2f39b.appspot.com",
  messagingSenderId: "84266637472",
  appId: "1:84266637472:web:e40c47914d290db26491c5",
  measurementId: "G-L6E5X22M16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
//console.log(analytics)
// const analytics = getAnalytics(app);

// obtenha uma referência para o Realtime Database
const db = getDatabase(app);

export function enviarPedidoContato(pedidoContato) {
  const pedidosRef = ref(db, "pedidos");
  const novoPedidoRef = push(pedidosRef);
  
  return set(novoPedidoRef, pedidoContato);
}

export default db;


//teste de conexão á bd
// set(ref(db, "/test"), "Hello Firebase!")
//   .then(() => {
//     console.log("Conexão bem-sucedida!");
//   })
//   .catch((error) => {
//     console.error("Erro ao conectar ao Firebase:", error);
//   });

  //Adicionando um nó chamado users com um objeto com os valores e chaves correspondentes
  // const tabelaRef = ref(db, "users");
  
  // const objeto = {
  //   nome: "Jorge Morais",
  //   email: "jorgemopanc@icloud.com",
  //   contato: "+351 910559307",
  //   descricao: "Descrição",
  // };
  
  // set(tabelaRef, objeto)
  //   .then(() => {
  //     console.log("Objeto adicionado à tabela com sucesso!");
  //   })
  //   .catch((error) => {
  //     console.error("Erro ao adicionar objeto à tabela:", error);
  //   });

    //Adicionando um novo com o método push() nó dentro do nó users que criei acima
    // const usersRef = ref(db, 'users')
    // const newUserRef = push(usersRef)
    // const newObj = {
    //   nome: 'João',
    //   email: 'joao@example.com',
    //   contato: '123456789',
    //   descricao: 'Este é um novo usuário'
    // }
    // set(newUserRef, newObj)
    //   .then(() => {
    //     console.log('Novo objeto adicionado com sucesso!')
    //   })
    //   .catch((error) => {
    //     console.error('Erro ao adicionar novo objeto:', error)
    //   })    
    
    
    
    
    
    