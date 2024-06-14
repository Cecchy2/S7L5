const id = new URLSearchParams(window.location.search).get("objectId");

console.log("RESOURCE ID", id);

const URL = id
  ? "https://striveschool-api.herokuapp.com/api/product/" + id
  : "https://striveschool-api.herokuapp.com/api/product/";

const authorization =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZjlhOTdjMjM5YzAwMTUyZjRiM2QiLCJpYXQiOjE3MTgzNTIyOTgsImV4cCI6MTcxOTU2MTg5OH0.y7gHg1PKQ4OQXp0Hab01t6w5m7V4aSUl2Lau-YghrEo";

window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.onsubmit = formFunct;

  if (id) {
    const form = document.querySelector("form");

    const textChange = document.getElementById("CreaOModifica");
    textChange.innerText = "MODIFICA OGGETTO";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger";
    deleteBtn.innerText = "cancella il prodotto";
    deleteBtn.type = "button";
    deleteBtn.onclick = deleteProduct;

    const submitBtn = document.getElementById("backOfficeBtn");
    submitBtn.innerText = "Modifica";

    form.appendChild(deleteBtn);

    fetch(URL, {
      headers: {
        Authorization: authorization,
      },
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("ERRORE");
        }
      })
      .then((singleObj) => {
        const { name, description, brand, imageUrl, price } = singleObj;
        document.getElementById("inputName").value = name;
        document.getElementById("description").value = description;
        document.getElementById("brand").value = brand;
        document.getElementById("imageUrl").value = imageUrl;
        document.getElementById("price").value = price;
      })
      .catch((err) => console.log(err));
  }
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
    method: id ? "PUT" : "POST",
    body: JSON.stringify(newObject),
    headers: {
      "Content-Type": "application/json",

      Authorization: authorization,
    },
  })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("Error creating/updating the object");
      }
    })
    .then((createObject) => {
      console.log("Object created/updated successfully", createObject);
      // Optional: redirect or clear form
    })
    .catch((err) => console.log(err));
};

const deleteProduct = () => {
  fetch(URL, {
    method: "DELETE",
    headers: {
      Authorization: authorization,
    },
  })
    .then((resp) => {
      if (resp.ok) {
        console.log("PRODOTTO ELIMINATO");
        // Optional: redirect or notify user
      } else {
        throw new Error("ERRORE NELLA CANCELLAZIONE");
      }
    })
    .catch((err) => console.log(err));
};
