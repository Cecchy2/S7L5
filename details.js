const params = new URLSearchParams(window.location.search);

const id = params.get("objectId");

console.log("Id Pagina:", id);

window.addEventListener("DOMContentLoaded", () => {
  fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZjlhOTdjMjM5YzAwMTUyZjRiM2QiLCJpYXQiOjE3MTgzNTIyOTgsImV4cCI6MTcxOTU2MTg5OH0.y7gHg1PKQ4OQXp0Hab01t6w5m7V4aSUl2Lau-YghrEo",
    },
  })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("ERRORE FETCH");
      }
    })
    .then((singleObj) => {
      const detailsContainer = document.getElementById("product-details");

      const card = document.createElement("div");
      card.className = "card";

      const imgCard = document.createElement("img");
      imgCard.className = "card-img-top";
      imgCard.id = "cardImg";
      imgCard.src = singleObj.imageUrl;

      const cardBody = document.createElement("div");
      cardBody.className = "card-body";

      const cardTitle = document.createElement("h3");
      cardTitle.innerText = singleObj.name;
      cardTitle.className = "card-title";

      const cardDescription = document.createElement("p");
      cardDescription.innerText = singleObj.description;
      cardDescription.className = "card-text";

      const brand = document.createElement("h5");
      brand.innerText = `Brand: ${singleObj.brand}`;
      brand.className = "card-subtitle mb-2 text-muted";

      const cardPrice = document.createElement("p");
      cardPrice.innerText = `Price: $${singleObj.price}`;
      cardPrice.className = "card-text";

      cardBody.appendChild(cardTitle);
      cardBody.appendChild(brand);
      cardBody.appendChild(cardDescription);
      cardBody.appendChild(cardPrice);

      card.appendChild(imgCard);
      card.appendChild(cardBody);

      detailsContainer.appendChild(card);
    })
    .catch((err) => console.log(err));
});
