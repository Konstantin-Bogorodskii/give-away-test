let currentStep = 0;

quizSection.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-next-step")) {
    if (currentStep === 4) {
      steps[4].classList.remove("stepsbar__item--active");
      steps[4].classList.add("stepsbar__item--done");
      location.reload();
    }
    if (currentStep < steps.length - 1) {
      steps[currentStep].classList.remove("stepsbar__item--active");
      steps[currentStep].classList.add("stepsbar__item--done");

      steps[currentStep + 1].classList.add("stepsbar__item--active");
      currentStep++;
      renderPage(currentStep);
    }
  }
});
