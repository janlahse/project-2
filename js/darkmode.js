const darkSwitch = document.querySelector("[data-js=darkmode-input]");
const header = document.querySelector("[data-js=header]");
const counterItem1 = document.querySelector("[data-js=counter-item-1]");
const counterItem2 = document.querySelector("[data-js=counter-item-2]");

darkSwitch.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
  header.classList.toggle("darkmode");
  counterItem1.style.background = "white";
  counterItem2.style.background = "white";
});
