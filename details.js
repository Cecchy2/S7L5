const params = new URLSearchParams(window.location.search);

const id = params.get("objectId");

console.log("Id Pagina:", id);

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
      } else {
        throw new Error("ERRORE FETCH");
      }
    })
    .then((singleObj) => {})
    .catch((err) => console.log(err));
});
