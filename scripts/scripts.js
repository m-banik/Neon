const lis = document.querySelectorAll("li");
const turnNeon = () => {
  lis.forEach((li, index) => {
    if (index !== 2) li.classList.toggle("off");
    else if (lis[index - 1].classList.contains("off"))
      li.style.animationPlayState = "paused";
    else li.style.animationPlayState = "running";
  });
};
document.querySelector("button").addEventListener("click", e => {
  e.target.textContent.toLowerCase() === "turn on"
    ? (e.target.textContent = "turn off")
    : (e.target.textContent = "turn on");
  turnNeon();
});
