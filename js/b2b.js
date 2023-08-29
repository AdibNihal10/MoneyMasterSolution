document.getElementById("calcbtn").addEventListener("click", function () {
  const incomevalue = getBalance("incomeid");
  const foodv = getBalance("foodbtn");
  const rentv = getBalance("rentbtn");
  const cv = getBalance("clothesbtn");

  const totalexpenses = foodv + rentv + cv;

  getBalanceText("Expenses", totalexpenses);

  const remainingbalance = incomevalue - totalexpenses;

  getBalanceText("Balance", remainingbalance);
});

document.getElementById("savebtn").addEventListener("click", function () {
  const incomekoro = getBalance("incomeid");
  const saveings = getBalance("saveinput");

  const totalsavings = incomekoro * saveings;
  const savinghobe = totalsavings / 100;
  getBalanceText("Saving", savinghobe);

  const balancenao = document.getElementById("Balance");
  const balancevalue = balancenao.innerText;

  const savingerpor = balancevalue - savinghobe;
  getBalanceText("Remaining", savingerpor);
});
