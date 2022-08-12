document.querySelector(".answers").addEventListener("click", (event) => {
  if (event.target.classList.contains("taska.trueAnswer")) {
    alert("Правильно!");
    window.location.href = ('/topic')
  } else {
    alert("Остаешься на повтор!");
  }
});
