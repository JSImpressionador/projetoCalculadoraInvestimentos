import { generateReturnsArray } from './src/investmentGoals';

const form = document.getElementById('investment-form');
// const calculateButton = document.getElementById('calculate-results');

function renderProgression(evt) {
  evt.preventDefault();
  // const startingAmount = Number(form['startingAmount'].value);
  const startingAmount = Number(
    document.getElementById('starting-amount').value.replace(',', '.')
  );
  const additionalContribution = Number(
    document.getElementById('additional-contribution').value.replace(',', '.')
  );
  const timeAmount = Number(document.getElementById('time-amount').value);
  const timeAmountPeriod = document.getElementById('time-amount-period').value;
  const returnRate = Number(
    document.getElementById('return-rate').value.replace(',', '.')
  );
  const returnRatePeriod = document.getElementById('evaluation-period').value;
  const taxRate = Number(
    document.getElementById('tax-rate').value.replace(',', '.')
  );

  const returnsArray = generateReturnsArray(
    startingAmount,
    timeAmount,
    timeAmountPeriod,
    additionalContribution,
    returnRate,
    returnRatePeriod
  );

  console.log(returnsArray);
}
function validateInput(evt) {
  if (evt.target.value === '') {
    return;
  }

  const { parentElement } = evt.target;
  const grandParentElement = evt.target.parentElement.parentElement;
  const inputValue = evt.target.value.replace(',', '.');

  if (isNaN(inputValue) || Number(inputValue) <= 0) {
    // objetivo: <p class="text-red-500">Insira um valor numérico e maior que zero</p>
    const errorTextElement = document.createElement('p'); //<p></p>
    errorTextElement.classList.add('text-red-500'); //<p class='text-red-500'></p>
    errorTextElement.innerText = 'Insira um valor numérico e maior que zero'; //<p class="text-red-500">Insira um valor numérico e maior que zero</p>

    parentElement.classList.add('error');
    grandParentElement.appendChild(errorTextElement);
  }
}

for (const formElement of form) {
  if (formElement.tagName === 'INPUT' && formElement.hasAttribute('name')) {
    formElement.addEventListener('blur', validateInput);
  }
}
form.addEventListener('submit', renderProgression);
// calculateButton.addEventListener('click', renderProgression);
