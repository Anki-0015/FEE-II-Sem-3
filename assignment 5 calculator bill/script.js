const style = document.createElement('style');
style.textContent = `
  body {
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 20px;
  }
  
  input, button {
    margin: 10px 0;
    padding: 10px;
    width: 200px;
  }
`;
document.head.appendChild(style);

const container = document.createElement('div');
document.body.appendChild(container);

const heading = document.createElement('h1');
heading.textContent = 'Simple Bill Calculator';
container.appendChild(heading);

const billInput = document.createElement('input');
billInput.placeholder = 'Enter bill amount';
container.appendChild(billInput);

const tipInput = document.createElement('input');
tipInput.placeholder = 'Enter tip percentage';
container.appendChild(tipInput);

const splitInput = document.createElement('input');
splitInput.placeholder = 'Number of people';
container.appendChild(splitInput);

const button = document.createElement('button');
button.textContent = 'Calculate';
container.appendChild(button);

const resultDiv = document.createElement('div');
container.appendChild(resultDiv);

button.onclick = () => {
  const bill = parseFloat(billInput.value);
  const tipPercent = parseFloat(tipInput.value);
  const people = parseInt(splitInput.value);

  if (isNaN(bill) || isNaN(tipPercent) || isNaN(people) || people <= 0) {
    resultDiv.textContent = 'Please enter valid numbers';
    return;
  }

  const tipAmount = (bill * tipPercent) / 100;
  const totalAmount = bill + tipAmount;
  const perPerson = totalAmount / people;

  resultDiv.textContent = `Tip: $${tipAmount.toFixed(2)}, Total: $${totalAmount.toFixed(2)}, Per Person: $${perPerson.toFixed(2)}`;
};