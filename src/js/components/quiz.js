const stepPageOne = `
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
  <button class="btn btn-reset btn--primary quiz-page__btn btn-next-step">
    Agree and continue
  </button>
`;

const stepPageTwo = `
  <div class="quiz-page__info">
    <p style="margin-bottom: 5rem;" class="quiz-page__text">
    To participate in this giveaway please share this giveaway offer with your friends. Not only your friends will appreciate this offer but you will receive $10 Amazon Gift Card for each of your friends that participates in this giveaway!
    </p>
  </div>
  <button class="btn btn-reset btn--primary quiz-page__btn btn-next-step">
    continue
  </button>
`;

const stepPageThree = `
  <div class="quiz-page__info">
    <p style="margin-bottom: 2rem;" class="quiz-page__text">
    Do you have an Amazon Prime account?
    </p>
    <p style="margin-bottom: 5rem;" class="quiz-page__text">
    To be able to participate in this giveaway you need to have Amazon Prime.
    </p>
  </div>
  <div class="quiz-page__btns">
    <button style="margin-right: 2rem;" class="btn btn-reset btn--flex-bs btn--primary btn-next-step">
    Yes, i have
    </button>
    <button class="btn btn-reset btn--secondary btn--flex-bs btn-next-step">
    no, i don’t have
    </button>
  </div>
`;

const stepPageFour = `
  <div class="quiz-page__info">
    <ul class="bonus-list list-reset">
      <li class="bonus-list__item">
        You need to Buy our Product on Amazon at the specified price $20.89!
      </li>
      <li class="bonus-list__item">
        After the purchase - Send us your Order Number or the Screenshot to our
        manager in FB Messenger
      </li>
      <li class="bonus-list__item">
        When you receive the product please use it and share product reviews
      </li>
      <li class="bonus-list__item">
        We will send you the 25$ Amazon Gift Card code within 24 hours after we
        get short review from you.
      </li>
      <li class="bonus-list__item">
        As a result, you will receive our Product Free!
      </li>
    </ul>
  </div>
  <div class="quiz-page__btns" style="flex-direction: column;">
    <button style="margin-bottom: 2rem;" class="btn btn-reset btn--primary quiz-page__btn btn-next-step">
      get offer
    </button>
    <button class=" btn-reset quiz-page__offer  btn-next-step">
    I don't like offer terms
    </button>
  </div>
`;

const stepPageFive = `
  <div class="quiz-page__info">
    <p style="margin-bottom: 2rem;" class="quiz-page__text">
    Click the button <strong>GO TO AMAZON</strong>  and <strong>Buy a Product</strong>
    </p>
  </div>
  <button style="margin-bottom: 5.5rem;" class="btn btn-reset btn--primary quiz-page__btn btn-next-step">
    Go to amazon
  </button>
    <p style="margin-bottom: 1rem;" class="quiz-page__text">
    Click on the button below and <strong>Provide Order ID 
    to our Manager</strong> in FB Messenger
    </p>
    <p style="margin-bottom: 2rem;" class="quiz-page__italic">
    (If you have any questions, you can ask them to our Manager)
    </p>
    <button  class="btn btn-reset btn--primary quiz-page__btn btn-next-step">
    provide order id
  </button>
`;

const quizData = [
  {
    step: "Step 1",
    title: "Lorem ipsum dolor sit&nbsp;amet",
    img: "acne-cream.jpg",
    content: stepPageOne,
  },
  {
    step: "Step 2",
    title: "Share Facebook post",
    img: "discount.jpg",
    content: stepPageTwo,
  },
  {
    step: "Step 3",
    title: "Amazon Prime",
    img: "acne-cream.jpg",
    content: stepPageThree,
  },
  {
    step: "Step 4",
    title: "How to Buy a Product with 100% BONUS!",
    img: "acne-cream.jpg",
    content: stepPageFour,
  },
  {
    step: "Step 5",
    title: "Buy and Provide order ID to our Manager",
    img: "acne-cream.jpg",
    content: stepPageFive,
  },
];

const selectButton = document.querySelector(".product-info__btn");
const quizSection = document.getElementById("quiz");
let steps;

const renderPage = (index) => {
  if (index === 0) {
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
            ${quizData[index].content}
        </div>
        <div class="quiz-page__img">
          <img src="../img/${quizData[index].img}" alt="Acne cream" />
        </div>
    </div>
  </div>
`;
  } else {
    const quizPageMain = document.querySelector(".quiz-page__main");

    quizPageMain.innerHTML = ``;
    quizPageMain.innerHTML = `
    <div class="quiz-page__content">
    <div class="quiz-page__current-page">${quizData[index].step}</div>
    <h3 class="quiz-title quiz-page__title">
    ${quizData[index].title}
    </h3>
    ${quizData[index].content}
  </div>
  <div class="quiz-page__img">
    <img src="../img/${quizData[index].img}" alt="Acne cream" />
  </div>
    `;
  }

  steps = document.querySelectorAll(".stepsbar__item");
};

selectButton.addEventListener("click", () => renderPage(0));
