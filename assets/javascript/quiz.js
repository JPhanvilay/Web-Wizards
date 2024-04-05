document.querySelectorAll(".question-label").forEach(label => {
  label.addEventListener("click", function () {
    const questionNumber = this.getAttribute("data-question");
    const options = document.querySelector(`select[name="q${questionNumber}"]`);
    options.classList.toggle("hidden-options");
  });
});

document
  .getElementById("quizForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    let gryffindorScore = 0;
    let ravenclawScore = 0;
    let slytherinScore = 0;
    let hufflepuffScore = 0;

    // Add scores based on selected answers
    formData.forEach((value, name) => {
      if (value === "gryffindor" && value !== "Choose an answer")
        gryffindorScore += 1;
      if (value === "ravenclaw" && value !== "Choose an answer")
        ravenclawScore += 1;
      if (value === "slytherin" && value !== "Choose an answer")
        slytherinScore += 1;
      if (value === "hufflepuff" && value !== "Choose an answer")
        hufflepuffScore += 1;
    });

    // Determine the highest score and display the result
    const scores = {
      gryffindor: gryffindorScore,
      ravenclaw: ravenclawScore,
      slytherin: slytherinScore,
      hufflepuff: hufflepuffScore,
    };
    const maxScore = Math.max(...Object.values(scores));
    const houseGuessed = Object.keys(scores).find(
      key => scores[key] === maxScore
    );

    document.getElementById("result").classList.remove("hidden");

    const houseImages = {
      gryffindor: "images/Gryffindor.jpeg",
      ravenclaw: "images/Ravenclaw.jpeg",
      slytherin: "images/Slytherin.jpeg",
      hufflepuff: "images/Hufflepuff.jpeg",
    };

    // Set the house name text content and color based on the guessed house
    const houseNameElement = document.getElementById("houseName");
    houseNameElement.textContent =
      houseGuessed.charAt(0).toUpperCase() + houseGuessed.slice(1);

    switch (houseGuessed) {
      case "gryffindor":
        houseNameElement.style.color = "red";
        break;
      case "ravenclaw":
        houseNameElement.style.color = "aqua";
        break;
      case "slytherin":
        houseNameElement.style.color = "green";
        break;
      case "hufflepuff":
        houseNameElement.style.color = "yellow";
        break;
    }
    houseNameElement.style.fontWeight = "bold";
    houseNameElement.style.fontSize = "45px";

    // Display the corresponding house image and score
    document.getElementById("houseImage").src = houseImages[houseGuessed];
    document.getElementById("houseScore").textContent = `Score: ${maxScore}`;
  });
