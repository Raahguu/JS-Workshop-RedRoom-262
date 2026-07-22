const messageHolder = document.getElementById("description");

function msg () {
    messageHolder.innerText = "Don't press me!";
    messageHolder.hidden = false;

    setTimeout(function () {
        messageHolder.hidden = true;
    }, 2000);
}