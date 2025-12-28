let index = 0;
let score = 0;

const questionBox = document.getElementById("question");
const optionsBox = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const scoreText = document.getElementById("score");

function showQuestion() {
  let q = questions[index];
  questionBox.innerHTML = `${index + 1}. ${q.question}`;
  optionsBox.innerHTML = "";

  q.options.forEach((opt, i) => {
    optionsBox.innerHTML += `<button onclick="checkAnswer(${i})">${opt}</button>`;
  });
}

function checkAnswer(selected) {
  if (selected === questions[index].answer) {
    score++;
  }
  index++;

  if (index < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizBox.classList.add("hide");
  resultBox.classList.remove("hide");
  scoreText.innerHTML = `${score} / ${questions.length}`;
}

showQuestion();
