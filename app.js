/* 
input deposit
deposit Balance
Balance
 */

function deposit(id1, id2, id3) {
  const inputDeposit = document.getElementById(id1).value;
  const balanceDeposit = document.getElementById(id2).innerText;
  const balance = document.getElementById(id3).innerText;

  const deposit = parseFloat(inputDeposit) + parseFloat(balanceDeposit);
  const bl = parseFloat(inputDeposit) + parseFloat(balance);
  document.getElementById(id2).innerText = deposit;
  document.getElementById(id3).innerText = bl;
  document.getElementById(id1).value = "";
}
document
  .getElementById("btn-deposit")
  .addEventListener("click", function (event) {
    deposit("deposit-input", "deposit", "balance");
  });

/* 
input withdraw
withdraw Balance
Balance
 */

function withdraw(id1, id2, id3) {
  const inputDeposit = document.getElementById(id1).value;
  const balanceDeposit = document.getElementById(id2).innerText;
  const balance = document.getElementById(id3).innerText;
  if (parseFloat(inputDeposit) < parseFloat(balance)) {
    const deposit = parseFloat(inputDeposit) + parseFloat(balanceDeposit);
    const bl = parseFloat(balance) - parseFloat(inputDeposit);
    document.getElementById(id2).innerText = deposit;
    document.getElementById(id3).innerText = bl;
    document.getElementById(id1).value = "";
  }
  document.getElementById(id1).value = "";
}
document
  .getElementById("btn-withdraw")
  .addEventListener("click", function (event) {
    withdraw("withdraw-input", "withdraw", "balance");
  });
