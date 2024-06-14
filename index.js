window.addEventListener("DOMContentLoaded", () => {
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZjlhOTdjMjM5YzAwMTUyZjRiM2QiLCJpYXQiOjE3MTgzNTIyOTgsImV4cCI6MTcxOTU2MTg5OH0.y7gHg1PKQ4OQXp0Hab01t6w5m7V4aSUl2Lau-YghrEo",
    },
  })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
    })
    .then((objectsArray) => {
      const row = document.getElementById("row");

      objectsArray.forEach((singleObj) => {
        const card = document.createElement("div");
        card.className = "col card m-1 ";

        const imgCard = document.createElement("img");
        imgCard.className = "card-img-top";
        imgCard.id = "cardImg";
        imgCard.src = singleObj.imageUrl;

        const cardTitle = document.createElement("h3");
        cardTitle.innerText = singleObj.name;
        cardTitle.className = "card-title";

        const cardDescription = document.createElement("p");
        cardDescription.innerText = singleObj.description;
        cardDescription.className = "cardDescription";

        const brand = document.createElement("h5");
        brand.innerText = singleObj.brand;
        brand.className = "brand";

        const cardPrice = document.createElement("p");
        cardPrice.innerText = singleObj.price;
        cardPrice.className = "card-Price";

        const details = document.createElement("a");
        details.href = `./details.html?objectId=${singleObj._id}`;
        details.innerText = "Details";
        details.className = "btn btn-secondary";

        const modifica = document.createElement("a");
        modifica.href = `./backOffice.html?objectId=${singleObj._id}`;
        modifica.innerText = "Modifica";
        modifica.className = "btn btn-primary";

        card.appendChild(imgCard);
        card.appendChild(cardTitle);
        card.appendChild(brand);
        card.appendChild(cardDescription);
        card.appendChild(cardPrice);
        card.appendChild(details);
        card.appendChild(modifica);

        row.appendChild(card);
      });
    })
    .catch((err) => console.log(err));
});
