const steps = document.querySelectorAll(".stepsbar__item");
const button = document.querySelector("#btn-next");
let currentStep = 0;

button.addEventListener("click", (e) => {
  if (currentStep < steps.length) {
    console.log(steps[currentStep]);
    steps[currentStep].classList.remove("stepsbar__item--active");
    steps[currentStep].classList.add("stepsbar__item--done");
    console.log(steps[currentStep]);

    steps[currentStep + 1].classList.add("stepsbar__item--active");
    console.log(steps[currentStep + 1]);
    currentStep++;
    console.log(currentStep);
  }
});
