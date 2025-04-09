//toggle bookmark on click
const bookmark = document.querySelector("[data-js=bookmark]");
bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("bookmark--active");
});

//card__answer--active
