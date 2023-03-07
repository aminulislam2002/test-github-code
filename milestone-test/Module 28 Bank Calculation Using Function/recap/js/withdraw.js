// add event handler with the withdraw button
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // get withdraw amount from the withdraw input field
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  // convert string to number
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
  // clear the withdraw input field after getting the value
  withdrawField.value = "";
  // get the previous withdraw total
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousTotalWithdrawString = withdrawTotalElement.innerText;
  const previousTotalWithdraw = parseFloat(previousTotalWithdrawString);
  // calculate new withdraw total and set the value to the withdraw total
  const newWithdrawTotal = previousTotalWithdraw + newWithdrawAmount;
  withdrawTotalElement.innerText = newWithdrawTotal;
  // get current balance total
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  // calculate the new balance and set it to the balance total element
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = newBalanceTotal;
});
