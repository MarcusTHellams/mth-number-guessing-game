import './index.css';

/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { getByJsId } from './utils';

function getRandomIntInclusive(min: number, max: number) {
  // Ensure min and max are integers
  min = Math.ceil(min);
  max = Math.floor(max);

  // Generate and return random integer between min and max, inclusive
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomInclusiveBetween1and100 = () => getRandomIntInclusive(1, 100);

let numberToGuess: number = getRandomInclusiveBetween1and100();
let attempts = 0;

const input = getByJsId<HTMLInputElement>('input')!;
const submit = getByJsId<HTMLButtonElement>('submit')!;

const guessing = getByJsId<HTMLDivElement>('guessing')!;
const guessed = getByJsId<HTMLDivElement>('guessed')!;
const reset = getByJsId<HTMLButtonElement>('reset')!;
const hint = getByJsId<HTMLHeadingElement>('hint')!;
const hintValue = getByJsId<HTMLSpanElement>('hint-value')!;
const attemptsSpan = getByJsId<HTMLSpanElement>('attemptsSpan')!;

const attemptsH3 = getByJsId<HTMLSpanElement>('attempts-h3')!;

reset.addEventListener('click', () => {
  numberToGuess = getRandomInclusiveBetween1and100();
  input.value = '';
  attempts = 0;
  guessing.classList.toggle('hidden');
  guessed.classList.toggle('hidden');
  attemptsH3.classList.toggle('hidden');
  hint.classList.toggle('hidden');
  hintValue.innerText = '';
  attemptsSpan.innerText = '0';
});

submit.addEventListener('click', () => {
  const value = input.value;
  if (value) {
    attempts += 1;
    hint.classList.remove('hidden');
    attemptsH3.classList.remove('hidden');
    attemptsSpan.innerText = `${attempts}`;
    if (+value > numberToGuess) {
      hintValue.innerText = 'high';
    } else if (+value < numberToGuess) {
      hintValue.innerText = 'low';
    }
  }
  if (+value === numberToGuess) {
    guessing.classList.toggle('hidden');
    guessed.classList.toggle('hidden');
  }
});
