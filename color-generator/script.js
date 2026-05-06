const colors = [
  "green",
  "red",
  "rgba(133, 122, 200)",
  "#f15025",
  "#E63946",
  "#2EC4B6",
  "#FF6B35",
  "#9B5DE5",
  "#F7C948",
  "rgba(30, 144, 255, 0.85)",
  "#06D6A0",
  "#FF4D6D",
  "#118AB2",
  "rgba(255, 140, 0, 0.9)",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  // get random number between 0-3
  const randomNum = getRandomNum();
  document.body.style.backgroundColor = colors[randomNum];
  color.textContent = colors[randomNum];
});

function getRandomNum() {
  return Math.floor(Math.random() * colors.length);
}
