const quizData = [
  {
    step: "Step 1",
    title: "Lorem ipsum dolor sit amet",
    img: "acne-cream.jpg",
  },
  {
    step: "Step 2",
    title: "Share Facebook post",
    img: "discount.jpg",
  },
  {
    step: "Step 3",
    title: "Amazon Prime",
    img: "acne-cream.jpg",
  },
  {
    step: "Step 4",
    title: "How to Buy a Product with 100% BONUS!",
    img: "acne-cream.jpg",
  },
  {
    step: "Step 5",
    title: "Buy and Provide order ID to our Manager",
    img: "acne-cream.jpg",
  },
];

const selectButton = document.querySelector(".product-info__btn");
const quizSection = document.getElementById("quiz");
let steps;

const renderPage = (index) => {
  quizSection.innerHTML = "";
  quizSection.innerHTML = `
  <div class="container">
    <div class="quiz-page">
      <div id="stepsbar" class="stepsbar">
        <ul class="stepsbar__list list-reset">
          <li class="stepsbar__item stepsbar__item--active">
            <span>Step1 Details</span>
          </li>

          <li class="stepsbar__item"><span>Step2 Details</span></li>
          <li class="stepsbar__item"><span>Step3 Details</span></li>
          <li class="stepsbar__item"><span>Step4 Details</span></li>
          <li class="stepsbar__item"><span>Step5 Details</span></li>
        </ul>
      </div>
      <div class="quiz-page__main">
        <div class="quiz-page__content">
          <div class="quiz-page__current-page">${quizData[index].step}</div>
          <h3 class="quiz-title quiz-page__title">
          ${quizData[index].title}
          </h3>
          <div class="quiz-page__info">
            <p class="quiz-page__text">
              Aliquam urna arcu, scelerisque vel viverra sed, pellentesque sit
              amet metus. Curabitur at luctus massa. Vestibulum pretium sem
              tortor, vitae mattis odio accumsan vitae. Fusce id luctus erat:
            </p>
            <ol class="quiz-page__list">
              <li class="quiz-page__list-item">
                Mauris rutrum interdum condimentum.
              </li>
              <li class="quiz-page__list-item">
                Donec commodo quis arcu eget pretium.
              </li>
            </ol>
          </div>
          <button
            class="btn btn-reset btn--primary quiz-page__btn btn-next-step"
          >
            Agree and continue
          </button>
        </div>
        <div class="quiz-page__img">
          <img src="../img/${quizData[index].img}" alt="Acne cream" />
        </div>
      </div>
    </div>
  </div>
`;

  steps = document.querySelectorAll(".stepsbar__item");
};

selectButton.addEventListener("click", () => renderPage(0));
