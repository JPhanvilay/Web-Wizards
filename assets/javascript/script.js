document.getElementById("sidebarIcon").addEventListener("click", function () {
  let dropdown = document.getElementById("dropdownMenu");
  if (dropdown.classList.contains("hidden")) {
    dropdown.classList.remove("hidden");
  } else {
    dropdown.classList.add("hidden");
  }
});

const questionElement = document.getElementById("question");
const questionText = "Which house do you belong to?";

function animateText() {
  let index = 0;
  const intervalId = setInterval(() => {
    questionElement.textContent = questionText.slice(0, index);
    index++;
    if (index > questionText.length) {
      clearInterval(intervalId);
    }
  }, 100);
}

function checkHouse() {
  const houseInput = document
    .getElementById("houseInput")
    .value.trim()
    .toLowerCase();

  const questionContainer = document.getElementById("questionContainer");

  if (
    houseInput === "gryffindor" ||
    houseInput === "hufflepuff" ||
    houseInput === "ravenclaw" ||
    houseInput === "slytherin"
  ) {
    const backgroundImageURL = `url("images/${houseInput}.jpeg")`;
    document.body.style.backgroundImage = backgroundImageURL;
    questionContainer.style.display = "none";
  } else {
    document.getElementById("sortingHatSuggestion").innerText =
      "If you're sure, try the Sorting Hat!";

    document.getElementById("sortingHatSuggestion").classList.remove("hidden");
  }
  randomSpell();
}
// Function to pick a random spell
function randomSpell(){
  const spellsUrl = "https://api.potterdb.com/v1/spells/";

  fetch(spellsUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (spellsObj) {

      let data = spellsObj.data;

      randomSpell = (data[Math.floor(Math.random()*data.length)]);

      const cardEl = document.getElementById("card");
      const spell = {
        Name: randomSpell.attributes.name,
        Category: randomSpell.attributes.category,
        Effect: randomSpell.attributes.effect,
        Incantation: randomSpell.attributes.incantation,
        Light: randomSpell.attributes.light,
        Wiki: randomSpell.attributes.wiki,
        Image: randomSpell.attributes.image,
      }
      console.log(spell);
      for (let key in spell){
        if(spell.hasOwnProperty(key)){
          value = spell[key];
          // let list = document.createElement("li");
          // cardEl.append(list);
          if(value !== null){
            const descriptionEl = $("#description");
            let list = document.createElement("li");
            descriptionEl.append(list);
            descriptionEl.append(`${key}: ${value}`);
          }
        }
      }
    });
}


document.addEventListener("DOMContentLoaded", function () {
  animateText();
});
