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
  console.log("CLICKED", document.elementsFromPoint(fl.clientX, fl.clientY)[0]);
  $(document.elementsFromPoint(fl.clientX, fl.clientY)[0]).focus();
  $(document.elementsFromPoint(fl.clientX, fl.clientY)[0]).trigger("click");
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
