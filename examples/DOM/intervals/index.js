let int;

function print() {
    console.log(1);
}

function set() {
    if (int == undefined) {
        int = setInterval(print, 500);
    } else {
        clearInterval(int);
        int = undefined;
    }
}