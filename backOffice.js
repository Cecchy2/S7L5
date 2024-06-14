const authorization =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZjlhOTdjMjM5YzAwMTUyZjRiM2QiLCJpYXQiOjE3MTgzNTIyOTgsImV4cCI6MTcxOTU2MTg5OH0.y7gHg1PKQ4OQXp0Hab01t6w5m7V4aSUl2Lau-YghrEo";

const URL = "https://striveschool-api.herokuapp.com/api/product/";
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
