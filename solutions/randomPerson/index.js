function loadUser () {
    fetch("https://randomuser.me/api/")
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Status Error ${response.status}`);
        }

        return response.json();
    }) 
    .catch((err) => {
        const errorText = document.getElementById("status");
        errorText.innerText = err.message;
        console.log(err);
    })
    .then((data) => {
        const nameTag = document.getElementById("name");
        const emailTag = document.getElementById("email");
        const countryTag = document.getElementById("country");
        const imageHolder = document.getElementById("avatar");

        person = data.results[0];

        nameTag.innerText = person.name.title + ". " + 
            person.name.first + " " + person.name.last;

        emailTag.innerText = person.email;

        countryTag.innerText = person.location.country;

        imageHolder.src = person.picture.medium;
    })
}