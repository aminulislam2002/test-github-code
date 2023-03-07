// add event listener to the deposite button
document.getElementById("btn-deposite").addEventListener("click", function () {
  // get deposite amount from the deposite input field
  const depositeField = document.getElementById("deposite-field");
  const newDepositeAmountString = depositeField.value;
  // convert string to number
  const newDepositeAmount = parseFloat(newDepositeAmountString);
  // clear the deposite input field after getting the value
  depositeField.value = "";
  // get the previous deposite total
  const depositeTotalElement = document.getElementById("deposite-total");
  const previousDepositeTotalString = depositeTotalElement.innerText;
  const previousDepositeTotal = parseFloat(previousDepositeTotalString);
  // calculate new deposite total and set the value to the deposite total
  const newDepositeTotal = previousDepositeTotal + newDepositeAmount;
  depositeTotalElement.innerText = newDepositeTotal;
  // get current balance total
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  // calculate the new balance and set it to the balance total element
  const newBalanceTotal = previousBalanceTotal + newDepositeAmount;
  balanceTotalElement.innerText = newBalanceTotal;
});
