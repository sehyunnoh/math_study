const first = document.querySelector('#first');
const second = document.querySelector('#second');
const operator = document.querySelector('#operator');
const answer = document.querySelector('#answer');
const score = document.querySelector('#score');
const question = document.querySelector('.question');
const submit = document.querySelector('#submit');
const result = document.querySelector('#result');
const reward = document.querySelectorAll('.reward');

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let operators = ['+', '-', '*', '/'];
let operatorIndex = getRandomArbitrary(0, 4);

function refresh() {
  operatorIndex = getRandomArbitrary(0, 4);
  let fMin = 1;
  let fMax = 0;
  let sMin = 1;
  let sMax = 0;
  if (operators[operatorIndex] === '+') {
    fMax = sMax = 100;
  } else if (operators[operatorIndex] === '-') {
    fMax = 100;
    sMax = 100;
  } else if (operators[operatorIndex] === '*') {
    fMax = 11;
    sMax = 12;
  } else if (operators[operatorIndex] === '/') {
    fMax = 100;
    sMax = 11;
  }


  first.innerHTML = getRandomArbitrary(fMin, fMax);
  second.innerHTML = getRandomArbitrary(sMin, sMax);
  operator.innerHTML = operators[operatorIndex];
  answer.value = '';
}

function correct() {
  score.innerHTML = parseInt(score.innerHTML) + 1;
  result.innerHTML = 'Correct!';
  question.style.backgroundColor = 'lightgreen';

  if (parseInt(score.innerHTML) >= 100) {
    question.style.backgroundColor = 'gold';
    result.innerHTML = 'You win!';
    submit.disabled = true;

    reward[0].classList.remove('hide');
    reward[1].classList.remove('hide');
  }
}

function incorrect() {
  score.innerHTML = parseInt(score.innerHTML) - 1;
  result.innerHTML = 'Incorrect!';
  question.style.backgroundColor = 'rgba(255, 124, 124, 0.8)';
}


submit.addEventListener('click', () => {
  if (operators[operatorIndex] === '/') {
    if (+answer.value === parseInt(parseInt(first.innerHTML) / parseInt(second.innerHTML))) {
      correct();
    } else {
      incorrect();
    }
  } else {
    if (answer.value == eval(first.innerHTML + operators[operatorIndex] + second.innerHTML)) {
     correct();
    } else {
     incorrect();
    }
  }

  refresh();
});

refresh();