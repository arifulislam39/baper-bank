/*
step-1: add event handler.
step-2: get the withdraw amount.
step-3:clear the withdraw input field.
step-4:get previous withdraw total.
step-5:calculate withdraw total and set it.
step-6: get the previous balance.
step-7:calculate new balance and set it.

*/

//1
document.getElementById('btn-withdraw').addEventListener('click', function () {
    //2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    //3
    withdrawField.value = '';

    //4 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    //5
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;
    //6
    const balaceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balaceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //7
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balaceElement.innerText = newBalanceTotal;





})