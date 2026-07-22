const messageHolder = document.getElementById("description");

function remove() {
    messageHolder.hidden = true;
}

function msg () {
    messageHolder.innerText = "Don't press me!";
    messageHolder.hidden = false;

    setTimeout(remove, 2000);
}