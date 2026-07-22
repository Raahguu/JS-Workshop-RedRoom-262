function yes() {
    const p = document.getElementById("description");
    current_value = Number(p.innerText);
    if (isNaN(current_value)) {
        p.innerText = 0;
    } else {
        p.innerText = current_value + 1;
    }
}