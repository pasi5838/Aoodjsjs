
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateQuestion() {
  const isAddition = Math.random() > 0.5;
  const a = getRandomInt(1, 20);
  const b = getRandomInt(1, 20);
  const answer = isAddition ? a + b : a - b;
  const questionText = `${a} ${isAddition ? '+' : '-'} ${b} = ?`;
  document.getElementById("question").textContent = questionText;

  let answers = [answer];
  while (answers.length < 4) {
    let wrong = answer + getRandomInt(-10, 10);
    if (!answers.includes(wrong)) {
      answers.push(wrong);
    }
  }

  // Acak jawaban
  answers.sort(() => Math.random() - 0.5);

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  answers.forEach(val => {
    const btn = document.createElement("button");
    btn.textContent = val;
    btn.className = "option-btn";
    btn.onclick = () => {
      if (val === answer) {
        alert("Benar!");
      } else {
        alert("Salah!");
      }
      generateQuestion();
    };
    optionsDiv.appendChild(btn);
  });
}

window.onload = generateQuestion;
