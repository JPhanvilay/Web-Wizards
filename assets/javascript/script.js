document.addEventListener("DOMContentLoaded", function () {
  // Show the modal
  document.getElementById("letterModal").classList.remove("hidden");
  document.getElementById("spell").classList.add("hidden");

  // Close modal functionality
  document
    .getElementById("closeModalButton")
    .addEventListener("click", function () {
      document.getElementById("letterModal").classList.add("hidden");
      animateText();
    });
});

const descriptionEl = $("#description");
const cardEl = $("#card");
const imageEl = document.getElementById("image");

// Function to pick a random spell
function randomSpell() {
  document.getElementById("spell").classList.remove("hidden");

  const spellsUrl = "https://api.potterdb.com/v1/spells/";

  fetch(spellsUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (spellsObj) {
      let data = spellsObj.data;
      randomSpell = data[Math.floor(Math.random() * data.length)];

      const spell = {
        Name: randomSpell.attributes.name,
        Category: randomSpell.attributes.category,
        Effect: randomSpell.attributes.effect,
        Incantation: randomSpell.attributes.incantation,
        Light: randomSpell.attributes.light,
      };

      const randomSpellEl = document.createElement("h3");
      randomSpellEl.textContent = "Random Spell";
      descriptionEl.append(randomSpellEl);

      if (randomSpell.attributes.image !== null) {
        const imgEl = document.createElement("img");
        imageEl.append(imgEl);
        imgEl.setAttribute("id", "image-spell");
        imgEl.setAttribute("class", "float-left");
        imgEl.setAttribute("alt", "spell-image");
        imgEl.setAttribute("src", randomSpell.attributes.image);
      } else {
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
      linkEl.setAttribute("id", "thicker");
      linkEl.textContent = "Wiki-Link";

      hideFlashlight();
    });
}

function hideFlashlight() {
  const fl = document.getElementById("flashlight");
  if (fl) {
    fl.style.display = "none";
  }
}

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
    const backgroundImageURL = `url("images/${houseInput}.png")`;
    document.body.style.backgroundImage = backgroundImageURL;
    questionContainer.style.display = "none";
  } else {
    document.getElementById("sortingHatSuggestion").innerText =
      "If you're not sure, try the Sorting Hat!";

    document.getElementById("sortingHatSuggestion").classList.remove("hidden");
  }

  sortingHatSuggestion.style.fontSize = "1.8rem";
  randomSpell();
}

function init() {
  document.onmousemove = mousemove;
}

function mousemove(event) {
  let mouse_x = event.clientX;
  let mouse_y = event.clientY;

  let fl = document.getElementById("flashlight");
  fl.style.transform =
    "translate(calc(" +
    mouse_x +
    "px - 50vw), " +
    "calc(" +
    mouse_y +
    "px - 50vh))";
}

function init() {
  document.onmousemove = mousemove;
}

function mousemove(event) {
  let mouse_x = event.clientX;
  let mouse_y = event.clientY;

  let fl = document.getElementById("flashlight");
  fl.style.transform =
    "translate(calc(" +
    mouse_x +
    "px - 50vw), " +
    "calc(" +
    mouse_y +
    "px - 50vh))";
}
$("#flashlight").click(fl => {
  $("#flashlight").hide();
  $(document.elementsFromPoint(fl.clientX, fl.clientY)).focus();
  $(document.elementsFromPoint(fl.clientX, fl.clientY)).trigger("click");
  $("#flashlight").show();
});
init();

let image = document.getElementById("cursor");

// Add event listener for mouse move
document.addEventListener("mousemove", function (event) {
  // Set the image position to follow the cursor
  image.style.left = event.pageX + "px";
  image.style.top = event.pageY + "px";
});

document
  .getElementById("startQuizButton")
  .addEventListener("click", function () {
    window.location.href = "quiz.html";
  });
