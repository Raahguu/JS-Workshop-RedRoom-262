const description = document.getElementById("description");

function clicked(caller) {
    buttonId = caller.innerText;
    description.innerText = `You clicked button ${buttonId}!`;
}