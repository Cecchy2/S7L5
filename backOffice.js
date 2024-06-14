/* authorization key:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZjlhOTdjMjM5YzAwMTUyZjRiM2QiLCJpYXQiOjE3MTgzNTIyOTgsImV4cCI6MTcxOTU2MTg5OH0.y7gHg1PKQ4OQXp0Hab01t6w5m7V4aSUl2Lau-YghrEo  */
const authorization =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZjlhOTdjMjM5YzAwMTUyZjRiM2QiLCJpYXQiOjE3MTgzNTIyOTgsImV4cCI6MTcxOTU2MTg5OH0.y7gHg1PKQ4OQXp0Hab01t6w5m7V4aSUl2Lau-YghrEo";
/* fetch("https://striveschool-api.herokuapp.com/api/product/", {
    headers: {
    "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZjlhOTdjMjM5YzAwMTUyZjRiM2QiLCJpYXQiOjE3MTgzNTIyOTgsImV4cCI6MTcxOTU2MTg5OH0.y7gHg1PKQ4OQXp0Hab01t6w5m7V4aSUl2Lau-YghrEo"
    }
    }) */

/* object-data: {
        "name": "Nokia 3310",
        "description": "Indestructible cellphone",
        "brand": "Nokia",
        "imageUrl": "https://example.com/3310.jpg",
        "price": 99
        }
 */
const URL = "https://striveschool-api.herokuapp.com/api/product/";

class Object {
  constructor(name, description, brand, imageUrl, price) {
    this.name = name;
    this.description = description;
    this.brand = brand;
    this.imageUrl = imageUrl;
    this.price = price;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.onsubmit = formFunct;
});

const formFunct = (event) => {
  event.preventDefault();
  const newObject = {
    name: document.getElementById("inputName").value,
    description: document.getElementById("description").value,
    brand: document.getElementById("brand").value,
    imageUrl: document.getElementById("imageUrl").value,
    price: document.getElementById("price").value,
  };

  fetch(URL, {
    method: "POST",
    body: JSON.stringify(newObject),
    headers: {
      "Content-Type": "application/json",

      Authorization: authorization,
    },
  }).then((resp) => {
    if (resp.ok) {
      return resp.json();
    } else {
      throw new Error("ERRORE NELLA CREAZIONE DELL'OGGETTO");
    }
  });
};
