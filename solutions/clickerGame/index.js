let stone = 0;
const stoneDisplay = document.getElementById("stone");
const errorMessage = document.getElementById("errorMessage");

function displayError(msg = "Unknown Error") {
    errorMessage.innerText = msg;
    errorMessage.hidden = false;

    setTimeout(() => {
        errorMessage.hidden = true;
    }, 2000);
}

function mine(amount = 1) {
    stone += amount;
    stoneDisplay.innerText = stone;
}

function buyWorker(name, price, caller, mineAmount) { 
    if (stone < price) {
        displayError(`Not enough to buy ${name}`);
        return;
    }

    stone -= price;
    stoneDisplay.innerText = stone;

    amountHolder = caller.parentElement.children[2].children[0];

    amountHolder.innerText = Number(amountHolder.innerText) + 1;

    setInterval(() => mine(mineAmount), 1000);
}

function buyMiner(caller) {
    let price = 10;
    buyWorker("Miner", price, caller, 1);
}

function buyExcavator(caller) {
    let price = 1000;
    buyWorker("Excavator", price, caller, 100);
}

function buyExcavator(caller) {
    let price = 100000;
    buyWorker("TNT", price, caller, 10000);
}
