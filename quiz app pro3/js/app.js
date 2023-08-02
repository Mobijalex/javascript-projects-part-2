const questions = [
  {
    que: "which of the following is a markup language ?",
    a: "HTML",
    b: "css",
    c: "javaScript",
    d: "php",
    correct: "a",
  },
  {
    que: "what year was javascript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    que: "What does css stands for ?",
    a: "Hyper Markup Language",
    b: "cascading style sheet ",
    c: "Json object notation",
    d: "helicopters terminals motorboats lamborginis",
    correct: "b",
  },
];

// function
let index = 0;
let total = questions.length;
let right = 0,
  wrong = 0;
const queBox = document.getElementById("queBox");
const optionInputs = document.querySelectorAll(".options");
const loadQuestion = () => {
  if (index === total) {
    return endQuiz();
  }
  reset();
  const data = questions[index];
  queBox.innerHTML = `(${index + 1})${data.que}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
};

// submit button function

const submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswers();
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};

const getAnswers = () => {
  let answer;
  optionInputs.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

// reseting the form function

const reset = () => {
  optionInputs.forEach((input) => {
    input.checked = false;
  });
};

const endQuiz = () => {
  document.getElementById("box").innerHTML = `
  <div style= "text-align:center"><h3> Thankyou for playing the quiz </h>
  <h2>${right}, ${total} are correct</h2> `;
};

// intial call
loadQuestion();
