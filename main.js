function generateQuestion() {
  const num1 = Math.floor(Math.random() * 20);
  const num2 = Math.floor(Math.random() * 20);
  const operator = Math.random() < 0.5 ? '+' : '-';
  const answer = operator === '+' ? num1 + num2 : num1 - num2;

  document.getElementById('question').textContent = `Berapakah ${num1} ${operator} ${num2}?`;

  let choices = new Set();
  choices.add(answer);
  while (choices.size < 4) {
    let wrong = answer + Math.floor(Math.random() * 10 - 5);
    if (wrong !== answer) choices.add(wrong);
  }

  let shuffled = Array.from(choices).sort(() => Math.random() - 0.5);

  const container = document.getElementById('choices');
  container.innerHTML = '';
  shuffled.forEach(choice => {
    const btn = document.createElement('button');
    btn.textContent = choice;
    btn.onclick = () => {
      alert(choice === answer ? 'Benar!' : 'Salah!');
      generateQuestion();
    };
    container.appendChild(btn);
  });
}

window.onload = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
  }
  generateQuestion();
};