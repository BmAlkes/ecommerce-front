const { addDoc, collection } = require("firebase/firestore");
const { getFirestore } = require("firebase/firestore");
const { initializeApp } = require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyBIyuYsxobTVn7alU131VCpOIdVw5zCeJ0",
  authDomain: "bshop-aff64.firebaseapp.com",
  projectId: "bshop-aff64",
  storageBucket: "bshop-aff64.appspot.com",
  messagingSenderId: "903324981884",
  appId: "1:903324981884:web:919c262d7d9dc2f812c7f9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const products = [
  {
    id: "6228fc5cb7e6cb904bbe014b",
    name: "Shoes",
    displayName: "Shoes",
    imageUrl:
      "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    shoes: [
      {
        id: "6228fc8bb7e6cb904bbe014e",
        name: "Nike Run",
        price: 150,
        imageUrl:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      },
      {
        id: "6228fcb9b7e6cb904bbe0152",
        name: "Nike everyday",
        price: 250,
        imageUrl:
          "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1412&q=80",
      },
      {
        id: "6228fce4b7e6cb904bbe0154",
        name: "NiKe for womans",
        price: 300,
        imageUrl:
          "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
      },
      {
        id: "6228fd19b7e6cb904bbe0157",
        name: "Nike running gel",
        price: 250,
        imageUrl:
          "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80",
      },
      {
        id: "6228fd3bb7e6cb904bbe015a",
        name: "Super Nike",
        price: 300,
        imageUrl:
          "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
      },
      {
        id: "6228fda4b7e6cb904bbe015f",
        name: "Marathon",
        price: 250,
        imageUrl:
          "https://images.unsplash.com/photo-1562183241-b937e95585b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
      },
      {
        id: "6228fca3b7e6cb904bbe0150",
        name: "Kswiss",
        price: 300,
        imageUrl:
          "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1479&q=80",
      },
      {
        id: "6228fd63b7e6cb904bbe015c",
        name: "Nike Air",
        price: 400,
        imageUrl:
          "https://images.unsplash.com/photo-1579338559194-a162d19bf842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      },
    ],
  },
  {
    id: "6228f760b7e6cb904bbe012e",
    name: "Banner 1",
    displayName: "Womans",
    imageUrl:
      "https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    phrase: "View womans clothing collection",
    products: [
      {
        id: "6228f7a3b7e6cb904bbe0134",
        name: "yellow sweatshirt ",
        price: 350,
        imageUrl:
          "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=840&q=80",
      },
      {
        id: "6228f93db7e6cb904bbe0140",
        name: "Black Retro tshirt",
        price: 900,
        imageUrl:
          "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      },
      {
        id: "6228f8c7b7e6cb904bbe013b",
        name: "Infuse red tshirt",
        price: 200,
        imageUrl:
          "https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      },
      {
        id: "6228f96bb7e6cb904bbe0142",
        name: "white set",
        price: 500,
        imageUrl:
          "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
      },
      {
        id: "6228f7f1b7e6cb904bbe0136",
        name: "black star tshirt",
        price: 100,
        imageUrl:
          "https://images.unsplash.com/photo-1484517586036-ed3db9e3749e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      },
      {
        id: "6228f8afb7e6cb904bbe0139",
        name: "journey tshirt",
        price: 200,
        imageUrl:
          "https://images.unsplash.com/photo-1496360938681-9a918bfabc66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHdvbWFuJTIwdHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
    ],
  },
  {
    id: "6228f760b7e6cb904bbe012e1",
    name: "Banner 2",
    displayName: "Mens",
    imageUrl:
      "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    phrase: "View men's clothing collection",
    products: [
      {
        id: "6228f7a3b7e6cb904bbe01342",
        name: "Hard rock cafe",
        price: 350,
        imageUrl:
          "https://images.unsplash.com/photo-1596033389783-d31ed0c54440?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      },
      {
        id: "6228f93db7e6cb904bbe01403",
        name: "Black Retro",
        price: 900,
        imageUrl:
          "https://images.unsplash.com/photo-1567729714706-0681d0c05872?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      },
      {
        id: "6228f8c7b7e6cb904bbe013b4",
        name: "Infuse black tshirt",
        price: 200,
        imageUrl:
          "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
      },
      {
        id: "6228f96bb7e6cb904bbe01425",
        name: "black risk tshirt",
        price: 100,
        imageUrl:
          "https://images.unsplash.com/photo-1523585298601-d46ae038d7d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
      },
    ],
  },
];

const main = async () => {
  await Promise.all(
    products.map(async (category) => {
      await addDoc(collection(db, "categories"), category);
    })
  );
};

main().then(() => process.exit());
