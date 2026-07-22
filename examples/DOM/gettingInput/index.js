function yes() {
    const inp = document.getElementById("inputing").value;
    const p = document.getElementById("description");

    if (inp > 18) {
        p.innerText = "18+";
    } else if (isNaN(Number(inp))) {
        p.innerText = "NaN";
    } else {
        p.innerText = "< 18"
    }
}