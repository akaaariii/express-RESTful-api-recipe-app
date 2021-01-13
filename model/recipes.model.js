const {v4:uuid} = require('uuid');

// Fake database
let recipes = [
  {
    id: uuid(),
    image_url: "https://cdn.pixabay.com/photo/2020/03/26/05/04/meatball-4969274_1280.jpg",
    name: "Spagetti Meatballs",
  },
  {
    id: uuid(),
    image_url: "https://cdn.pixabay.com/photo/2019/08/15/09/00/pilaf-4407499_1280.jpg",
    name: "Lamb Pilaf",
  },
  {
    id: uuid(),
    image_url: "https://cdn.pixabay.com/photo/2020/05/04/21/20/creme-caramel-5130830_1280.jpg",
    name: "Custard Pudding",
  },
  {
    id: uuid(),
    image_url: "https://images.unsplash.com/photo-1565280654386-36c3ea205191?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    name: "Chicken Curry",
  },
];

module.exports = recipes;