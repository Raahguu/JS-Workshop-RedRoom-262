function reloadFact() {
    fetch("https://catfact.ninja/fact/")
    .then((response) => {
        // Check if the request got a reply,
        // but the reply was an error message
        if (!response.ok) {
            throw new Error(`Status Error ${response.status}`);
        }
        return response.json();
    })
    .catch((err) => {
        console.log(err.message);
    })
    .then((message) => {
        const p = document.getElementById("description");
        p.innerText = message.fact;
    });
}