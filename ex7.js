let num = 1000000;
const myObj = {
  style: "currency",
  currency: "EUR"
}
let text = num.toLocaleString("en-GB");

document.getElementById("tien").innerHTML = text;