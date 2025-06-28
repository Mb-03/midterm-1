// https://api.github.com/users/

const userInput = document.querySelector("#input");
const getBtn = document.querySelector("#api-btn");
const nameOutput = document.querySelector("#username");
const bioOutput = document.querySelector("#bio");
const imgOutput = document.querySelector("#avatar");

getBtn.addEventListener("click", () => {
    document.querySelector("#container").classList.add("visible")
  fetch(`https://api.github.com/users/${userInput.value}`)
    .then((res) => res.json())
    .then((data) => {
      nameOutput.textContent = data.login;
      if (data.bio) {
        bioOutput.textContent = data.bio;
      } else {
        bioOutput.textContent = "No bio available";
      }
      imgOutput.src = data.avatar_url;
    });
});
