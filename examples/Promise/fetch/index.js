fetch("https://catfact.ninja/fact/")
    .then((response) => {
        // Check if the request got a reply,
        // but the reply was an error message
        if (!response.ok) {
            throw new Error(`Status Error ${response.status}`);
        }
        return response.text();
    })
    .catch((err) => {
        console.log(err.message);
    })
    .then((message) => {
        console.log(message);
    })