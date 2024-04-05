const descriptionEl = $("#description");
const cardEl = $("#card");
const imageEl = document.getElementById("image");

// Function to pick a random spell
function randomSpell() {
  const spellsUrl = "https://api.potterdb.com/v1/spells/";

  fetch(spellsUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (spellsObj) {

      let data = spellsObj.data
      console.log(data);
      randomSpell = data[Math.floor(Math.random() * data.length)];
  
      const spell = {
        Name: randomSpell.attributes.name,
        Category: randomSpell.attributes.category,
        Effect: randomSpell.attributes.effect,
        Incantation: randomSpell.attributes.incantation,
        Light: randomSpell.attributes.light,
      };
      
      const randomSpellEl = document.createElement("h2");
      randomSpellEl.textContent = "Random Spell";
      descriptionEl.append(randomSpellEl);

      if (randomSpell.attributes.image !== null) {
        const imgEl = document.createElement("img");
        imageEl.append(imgEl);
        imgEl.setAttribute("id", "image-spell");
        imgEl.setAttribute("class", "float-left");
        imgEl.setAttribute("alt", "spell-image");
        imgEl.setAttribute("src", randomSpell.attributes.image);
      } else{
        const imgEl = document.createElement("img");
        imageEl.append(imgEl);
        imgEl.setAttribute("id", "image-spell");
        imgEl.setAttribute("class", "float-left");
        imgEl.setAttribute("alt", "spell-image");
        imgEl.setAttribute("src", "images/spellimage.jpg");
      }

      for (let key in spell) {
        if (spell.hasOwnProperty(key)) {
          value = spell[key];
          if (value !== null) {
            let list = document.createElement("li");
            list.textContent = `${key}: ${value}`;
            descriptionEl.append(list);
          }
        }
      }
      const linkEl = document.createElement("a");
      descriptionEl.append(linkEl);
      linkEl.setAttribute("href", randomSpell.attributes.wiki);
      linkEl.setAttribute("id","thicker");
      linkEl.textContent = "Wiki-Link";
    });
}

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

document.addEventListener("DOMContentLoaded", function () {
  animateText();
});


