function getBalance(elementid) {
  const income = document.getElementById(elementid);
  const iv = income.value;
  const floater = parseFloat(iv);
  income.value = "";
  return floater;
}

function getBalanceText(Text, value) {
  const textt = document.getElementById(Text);

  textt.innerText = value;
  return value;
}
