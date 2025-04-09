//toggle bookmark on click
const bookmark = document.querySelector("[data-js=bookmark]");
bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("bookmark--active");
});

//toggle answer visibility & button caption on click
const answerButton = document.querySelector("[data-js=answer-button]");
const answer = document.querySelector("[data-js=answer]");
answerButton.addEventListener("click", () => {
  answer.classList.toggle("card__answer--active");
  if (answer.classList.contains("card__answer--active")) {
    answerButton.innerHTML = "Hide answer";
  } else {
    answerButton.innerHTML = "Show answer";
  }
});
