const form = document.querySelector("[data-js=form]");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const newCardList = document.createElement("ul");
  newCardList.classList.add("card-list");
  document.body.append(newCardList);

  const newCard = document.createElement("li");
  newCard.classList.add("card-list__item");
  newCardList.append(newCard);

  const newArticle = document.createElement("article");
  newArticle.classList.add("card");
  newCard.append(newArticle);

  const newHeader = document.createElement("h2");
  newHeader.classList.add("card__question");
  newHeader.innerHTML = data.question;
  newArticle.append(newHeader);

  const newButton = document.createElement("button");
  newButton.classList.add("card__button-answer");
  newButton.setAttribute("type", "button");
  newButton.setAttribute("data-js", "answer-button");
  newButton.innerHTML = "Hide answer";
  newArticle.append(newButton);

  const newP = document.createElement("p");
  newP.classList.add("card__answer", "card__answer--active");
  newP.setAttribute("data-js", "answer");
  newP.innerHTML = data.answer;
  newArticle.append(newP);

  const newUl = document.createElement("ul");
  newUl.classList.add("card__tag-list");
  newArticle.append(newUl);

  const newTag = document.createElement("li");
  newTag.classList.add("card__tag-list-item");
  newTag.innerHTML = "#" + data.tag;
  newUl.append(newTag);

  const newBMContainer = document.createElement("div");
  newBMContainer.classList.add("card__button-bookmark");
  newArticle.append(newBMContainer);

  const newBMButton = document.createElement("button");
  newBMButton.classList.add("bookmark");
  newBMButton.setAttribute("aria-label", "bookmark");
  newBMButton.setAttribute("type", "button");
  newBMButton.setAttribute("data-js", "bookmark");
  newBMContainer.append(newBMButton);

  const newIcon = document.createElement("svg");
  newIcon.classList.add("bookmark__icon");
  newIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  newIcon.setAttribute("viewBox", "0 0 24 24");
  newBMButton.append(newIcon);

  const newIconPath = document.createElement("path");
  newIconPath.setAttribute(
    "d",
    "M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
  );
  newIcon.append(newIconPath);
});
