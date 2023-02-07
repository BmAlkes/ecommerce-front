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
      "https://res.cloudinary.com/binvent/image/upload/v1675522836/BInvent%20App/nike2_wddvzb.png",
    phrase: "View All Shoes collection",
    products: [
      {
        id: "6228fc8bb7e6cb904bbe014e",
        name: "Nike Run",
        price: 150,
        imageUrl:
          "https://res.cloudinary.com/binvent/image/upload/v1675522836/BInvent%20App/nike2_wddvzb.png",
      },
      {
        id: "6228fc8bb7e6cb904bbe014e2",
        name: "Nike Run3",
        price: 150,
        imageUrl:
          "https://res.cloudinary.com/binvent/image/upload/v1675522836/BInvent%20App/nike2_wddvzb.png",
      },
      {
        id: "6228fc8bb7e6cb904bbe014e3",
        name: "Nike Run 3",
        price: 150,
        imageUrl:
          "https://res.cloudinary.com/binvent/image/upload/v1675522836/BInvent%20App/nike2_wddvzb.png",
      },
      {
        id: "6228fc8bb7e6cb904bbe014e4",
        name: "Nike Run 4",
        price: 150,
        imageUrl:
          "https://res.cloudinary.com/binvent/image/upload/v1675522836/BInvent%20App/nike2_wddvzb.png",
      },
      {
        id: "6228fc8bb7e6cb904bbe014e5",
        name: "Nike Run 5",
        price: 150,
        imageUrl:
          "https://res.cloudinary.com/binvent/image/upload/v1675522836/BInvent%20App/nike2_wddvzb.png",
      },
      {
        id: "6228fc8bb7e6cb904bbe014e6",
        name: "Nike Run 6",
        price: 150,
        imageUrl:
          "https://res.cloudinary.com/binvent/image/upload/v1675522836/BInvent%20App/nike2_wddvzb.png",
      },
    ],
  },
];

const main = async () => {
  await Promise.all(
    products.map(async (category) => {
      await addDoc(collection(db, "products"), category);
    })
  );
};

main().then(() => process.exit());
