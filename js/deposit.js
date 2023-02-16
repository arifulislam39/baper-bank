/*
Step-1: addeventListener
step-2: get deposit amount from the deposit input field
step-3:convert string to number
step-4: clear the deposit input field.
step-5:get the previous deposit total
step-6:calculate new deposit total and set the value.
step-7:get the current balance
step-8: calculate the new balance and set it

 */

//step 1:
document.getElementById('btn-deposit').addEventListener('click', function () {
    //2
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    //3
    const newDepositAmount = parseFloat(newDepositAmountString);

    //4
    depositField.value = '';

    //5
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //6
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

    //7
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousTotalBalanceAmount = parseFloat(previousBalanceTotalString);

    //8
    const newBalanceTotal = previousTotalBalanceAmount + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;

})