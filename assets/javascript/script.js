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
document.addEventListener("DOMContentLoaded", function () {
  const dropdownMenu = document.querySelector(
    ".dropdown-hover .dropdown-content"
  );
  const sidebarIcon = document.getElementById("sidebarIcon");

  sidebarIcon.addEventListener("mouseenter", function () {
    dropdownMenu.classList.remove("hidden");
  });

  sidebarIcon.addEventListener("mouseleave", function () {
    dropdownMenu.classList.add("hidden");
  });

  dropdownMenu.addEventListener("mouseenter", function () {
    dropdownMenu.classList.remove("hidden");
  });

  dropdownMenu.addEventListener("mouseleave", function () {
    dropdownMenu.classList.add("hidden");
  });
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

function init() {
  document.onmousemove = mousemove;
}

function mousemove(event) {
  var mouse_x = event.clientX;
  var mouse_y = event.clientY;

  var fl = document.getElementById("flashlight");
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
  var mouse_x = event.clientX;
  var mouse_y = event.clientY;

  var fl = document.getElementById("flashlight");
  fl.style.transform =
    "translate(calc(" +
    mouse_x +
    "px - 50vw), " +
    "calc(" +
    mouse_y +
    "px - 50vh))";
}

init();

var image = document.getElementById("cursor");

// Add event listener for mouse move
document.addEventListener("mousemove", function (event) {
  // Set the image position to follow the cursor
  image.style.left = event.pageX + "px";
  image.style.top = event.pageY + "px";
});
