import { Eeuu, China, Ford, Ferrari, F1, Rally } from "./candidates.js";
const sideA = document.getElementById("box1");
const sideB = document.getElementById("box2");

//Different options to test the format 

// const candidateA = Eeuu;
// const candidateB = China;

const candidateA = Ford;
const candidateB = Ferrari;


// const candidateA = F1;
// const candidateB = Rally;

//Handlers for the candidates
function handleVoteA() {
  voteFor(candidateA, sideA, candidateB, sideB);
}
function handleVoteB() {
  voteFor(candidateB, sideB, candidateA, sideA);
}


document.addEventListener("DOMContentLoaded", () => {
  startCandidates(candidateA, sideA);
  startCandidates(candidateB, sideB);
  document.body.classList.add("ready");
  updateDividerText("Click to vote");

  sideA.addEventListener("click", handleVoteA);
  sideB.addEventListener("click", handleVoteB);
});

//Function that handel the canidates interactions
function voteFor(candidate, side, opponent, opponentSide) {
  candidate.votes++;
  showPercentages(candidate, side);
  showPercentages(opponent, opponentSide);
  disableInteraction(side, opponentSide);
  addButton(candidate, side);
  addButton(opponent,opponentSide);
  updateDividerText("Thanks for voting!", candidate.color);
}

//Disables interactions with candidates
function disableInteraction(selectedSide, otherSide) {
  selectedSide.classList.add("bright", "no-hover");
  otherSide.classList.add("dull", "no-hover");
  sideA.removeEventListener("click", handleVoteA);
  sideB.removeEventListener("click", handleVoteB);
}

//Function that fills a candidates starting html
function startCandidates(candidate, side) {
  const candidateText = side.getElementsByClassName("candidate-text")[0];
  const image = side.getElementsByClassName("image")[0];
  candidateText.innerHTML = `${candidate.candidate}`;
  image.src = `${candidate.image}`; 
}

//Function to show the candidate total percentage and votes
function showPercentages(candidate, side){
  const totalVotes = candidateA.votes + candidateB.votes;
  const candidatePercent = (candidate.votes / totalVotes) * 100;
  let img = side.querySelector(".image");
  img.style.opacity = 0.8;
  let overlay =  side.querySelector(".fill-overlay");
  overlay.style.backgroundColor = candidate.color;
  overlay.style.width = `${candidatePercent}%`;
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
  <p class="vote-percentage"></p>
  <p class="num-votes">Total votes: ${candidate.votes}</p>
  `;
  const sideContent = side.querySelector(".box-content");
  sideContent.appendChild(newDiv);
  const percentageText = side.querySelector(".vote-percentage"); 
  animatePercentage(percentageText, candidatePercent);
  
}

//Animation for the rising percentages
function animatePercentage(element, target) {
  let current = 0;
  const duration = 1000; 
  const stepTime = 20; 
  const increment = target / (duration / stepTime);

  const interval = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    element.textContent = `${Math.round(current)}%`;
  }, stepTime);
}

//Function to add a button in the voted candidate to visit a specific url
function addButton(candidate, side) {
  const container = side.querySelector(".box-content");
  if (!container) return console.error("No se encontró .box-content en", side);

  const button = document.createElement("button");
  button.innerText = "Visit site";
  button.classList.add("button");
  button.addEventListener("click", () => {
    window.open(candidate.url, "_blank");
  });

  container.appendChild(button);
}

//Function to update the text between candidates
function updateDividerText(newText, color = null) {
  const divider = document.querySelector(".divider");
  if (color) divider.style.color = color;

  divider.textContent = newText;
  divider.classList.remove("typewriter"); 
  void divider.offsetWidth; 
  divider.classList.add("typewriter"); 

  const textWidth = divider.scrollWidth; 
  divider.style.width = `${textWidth}px`;
}
