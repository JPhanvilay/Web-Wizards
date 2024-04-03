document.addEventListener("DOMContentLoaded", function () {
  // Show the modal
  document.getElementById("letterModal").classList.remove("hidden");

  // Close modal functionality
  document
    .getElementById("closeModalButton")
    .addEventListener("click", function () {
      document.getElementById("letterModal").classList.add("hidden");
      animateText();
    });
});

// Fetch

document.addEventListener("DOMContentLoaded", function () {
  const spellsBtn = document.getElementById("spellsBtn");
  const spellsList = document.getElementById("spellsList");
  const charactersBtn = document.getElementById("charactersBtn");
  const charactersList = document.getElementById("charactersList");
  fetchSpells();
  fetchCharacters();
  // spellsBtn.addEventListener("click", function () {
  //   spellsList.classList.toggle("hidden");
  //   if (!spellsList.classList.contains("hidden")) {
  //     fetchSpells();
  //   }
  // });

  // charactersBtn.addEventListener("click", function () {
  //   charactersList.classList.toggle("hidden");
  //   if (!charactersList.classList.contains("hidden")) {
  //     fetchCharacters();
  //   }
  // });
});

function fetchSpells() {
  fetch("https://api.potterdb.com/v1/spells")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      populateDropdown(data, "spellsList");
    })
    .catch(error => console.error("Error fetching spells", error));
}

function fetchCharacters() {
  fetch("https://api.potterdb.com/v1/characters")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      populateDropdown(data, "charactersList");
    })
    .catch(error => console.error("Error fetching characters", error));
}

function populateDropdown(data, dropdownId) {
  console.log(data);
  const dropdownList = document.getElementById(dropdownId);
  dropdownList.innerHTML = "";
  console.log(dropdownList);
  data.data.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.attributes.name;
    li.className = "text-black";
    dropdownList.appendChild(li);
  });
}

// Navbar
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
}
