document.getElementById('calculateButton').addEventListener('click', function() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    const numberOfPeople = parseInt(document.getElementById('split').value);

    if (billAmount && numberOfPeople) {
        const totalTip = (billAmount * (tipPercentage / 100));
        const totalBill = billAmount + totalTip;
        const totalPerPerson = totalBill / numberOfPeople;

        document.getElementById('totalPerPerson').textContent = `$${totalPerPerson.toFixed(2)}`;
        document.getElementById('result').classList.remove('hidden');
    } else {
        alert("Please enter valid values");
    }
});
