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
    id: 1,
    title: "Nike Air Max 270 G ",
    price: 399,
    description:
      "Look legendary in the Nike Air Max 270 G. The silhouette is a stitch-for-stitch reconstruction of the original big Air icon, with the addition of breathable mesh and innovative traction that performs at the highest level of play.",
    img: [
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      "https://images.unsplash.com/photo-1473010350295-2c82192ebd8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    ],
    sizes: [39, 40, 41, 42, 43],
  },
  {
    id: 2,
    title: "Nike SuperRep Go 3 ",
    price: 259,
    description:
      "The new Nike SuperRep Go 3 Flyknit Shoe is a radical design story rooted in sustainability and innovation. The zoned Flyknit construction wraps your foot in 360 degrees of comfort and support. A finely ground, reclaimed foam midsole gives you responsive cushioning for high-impact training. The lightweight, packable design lets you keep them close, no matter where your next workout takes you.",
    img: [
      "https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      "https://images.unsplash.com/photo-1559745206-ca4056293ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    ],
    sizes: [38, 39, 40, 41, 42, 43],
  },
  {
    id: 3,
    title: "Nike RuN 2022 ",
    price: 189,
    description:
      "The new Nike Run 2022 Flyknit Shoe is a radical design story rooted in sustainability and innovation. The zoned Flyknit construction wraps your foot in 360 degrees of comfort and support. A finely ground, reclaimed foam midsole gives you responsive cushioning for high-impact training. The lightweight, packable design lets you keep them close, no matter where your next workout takes you.",
    img: [
      "https://images.unsplash.com/photo-1562183241-b937e95585b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
      "https://images.unsplash.com/photo-1562183241-840b8af0721e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
    ],
    sizes: [40, 41, 42, 43, 44, 45],
  },
  {
    id: 4,
    title: "New Converse ",
    price: 229,
    description:
      "New Converse Flyknit Shoe is a radical design story rooted in sustainability and innovation. The zoned Flyknit construction wraps your foot in 360 degrees of comfort and support. A finely ground, reclaimed foam midsole gives you responsive cushioning for high-impact training. The lightweight, packable design lets you keep them close, no matter where your next workout takes you.",
    img: [
      "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1494496195158-c3becb4f2475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    ],
    sizes: [40, 41, 42, 43],
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
