const custom = document.querySelector("#custom");
const reset = document.querySelector(".reset");
let initialBill = document.querySelector(".initial-bill");
let noOfPersons = document.querySelector(".no-of-persons");

const totalTipPerPerson = document.querySelector(".total-tip-per-person");
const totalAmtPerPerson = document.querySelector(".total-amount-per-person");
let btntips = document.querySelectorAll(".btn_tip");

const tipcalculation = function(tip){
    const bill = Number(initialBill.value);
    const persons = Number(noOfPersons.value);
    totalAmtPerPerson.textContent = `$${((tip * bill + bill)/persons).toFixed(2)}`;
    totalTipPerPerson.textContent = `$${((bill * tip)/persons).toFixed(2)}`;
}

btntips.forEach(btn => btn.addEventListener("click", function(){
    const tip = Number(btn.textContent.split("%")[0])/100;
    tipcalculation(tip);
}))

custom.addEventListener("keyup", function(e){
    const tip = Number(e.target.value)/100;
    tipcalculation(tip);
})

reset.addEventListener("click", function(){
    totalAmtPerPerson.textContent = "$0.00";
    totalTipPerPerson.textContent = "$0.00";
    noOfPersons.value = 1;
    initialBill.value = "";
    custom.value = "";
})