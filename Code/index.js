const header = document.getElementById("header");
const contentJoke = document.getElementById("content");
const app = document.querySelector(".app");

//Function to get API joke
const getJoke = () => {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((dataJoke) => {
      const { content } = dataJoke.data;
      header.textContent = content.text_head;
      contentJoke.textContent =
        content.text !== "" ? content.text : content.text_hidden;
    });
};

getJoke();

//When app clicked, play function getJoke
app.addEventListener("click", () => {
  getJoke();
});
