const submitBtn = document.querySelector(".rating__submit-btn");
const inputRadial = document.getElementsByName("rate");
const ratingSection = document.querySelector(".rating");
const thanksSection = document.querySelector(".thanks");
const selectedRate = document.querySelector(".thanks__stars span");
let ischecked_method = false;

submitBtn.addEventListener("click", radioInputChecked, false);

function radioInputChecked() {
  for (let i = 0; i < inputRadial.length; i++) {
    if (inputRadial[i].checked) {
      selectedRate.textContent = i + 1;
      hiddenTrigger();
      ischecked_method = true;
      break;
    }
  }
}

function hiddenTrigger() {
  ratingSection.classList.add("hidden");
  thanksSection.classList.remove("hidden");
}
