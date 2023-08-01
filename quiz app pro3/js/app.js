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
const queBox = document.getElementById("queBox");
const optionInputs = document.querySelectorAll(".options");
const loadQuestion = () => {
  const data = questions[index];
  queBox.innerHTML = `(${index + 1})${data.que}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
};

// submit button function

const submitQuiz = () => {
  const ans = getAnswers();
};

const getAnswers = () => {
  optionInputs.forEach((input) => {
    if (input.checked) {
      console.log("yes");
    } else {
      console.log("no");
    }
  });
};

// intial call
loadQuestion();
