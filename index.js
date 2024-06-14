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
      objectsArray.forEach((singleObj) => {
        const row = document.getElementById("row");

        const card = document.createElement("div");
        card.className = "col-4 card";

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
        brand.className = "btn btn-primary";

        const cardPrice = document.createElement("p");
        cardPrice.innerText = singleObj.name;
        cardPrice.className = "card-Price";

        card.append("price");
        card.append("brand");
        card.append("cardDescription");
        card.append("cardTitle");
        card.append("imgCard");
        row.append("card");
      });
    })
    .catch((err) => console.log(err));
});