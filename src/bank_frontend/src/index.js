import { bank_backend } from "../../declarations/bank_backend";

window.addEventListener("load", async function () {
 update();
});

document.querySelector("form").addEventListener("submit", async function(event){
  event.preventDefault();

  const button = event.target.querySelector("#submit-btn");

  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const outputAmount = parseFloat(document.getElementById("withdrawl-amount").value);
  const PLIamount = parseFloat(document.getElementById("pli_amount").value);
  const PLIintrest = parseFloat(document.getElementById("pli_rate").value);
  const PLItime = parseFloat(document.getElementById("pli_time").value);
  const pli = await bank_backend.pli_calculator(PLIamount, PLIintrest, PLItime);
  document.getElementById("pli").innerText = Math.round(pli * 100) / 100;

  button.setAttribute("disabled", true);

  if(document.getElementById("input-amount").value.length != 0){
    await bank_backend.topUp(inputAmount);
  }

  if(document.getElementById("withdrawl-amount").value.length != 0){
    await bank_backend.withdrawl(outputAmount);
  }


  update();

  document.getElementById("input-amount").value = "";
  document.getElementById("withdrawl-amount").value = "";

  button.removeAttribute("disabled");
});

async function update(){
  const currentAmount = await bank_backend.checkBalance();
  document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;
  const si = await bank_backend.simpleIntrest();
  document.getElementById("simple").innerText = Math.round(si * 100) / 100;
}