function check() {
    // Get the output box
    const out = document.getElementById("message");

    // Check the Name
    const name = document.getElementById("name").value;

    if (name.length < 3) {
        out.innerText = "Name must be 3 characters or more";
        return;
    } else if (name.length > 40) {
        out.innerText = "Name must be 40 characters or less";
        return;
    } else if (!name.includes(" ")) { // Check for space
        out.innerText = "Name must include a space";
        return;
    }

    // Check Email
    const email = document.getElementById("email").value;

    if (!email.includes("@")) {
        out.innerText = "Email must include a '@'";
        return;
    } else if (!email.includes(".com") && !email.includes(".au")) {
        out.innerText = "Email must be either from a .com or .au domain";
        return;
    }

    // Check Age
    const age = document.getElementById("age").value;

    if (isNaN(Number(age))) {
        out.innerText = `The age must be a number, not ${age}`;
        return;
    } else if (age < 18) {
        out.innerText = "The age must be at least 18";
        return;
    }

    // All checks were successful
    out.innerText = "Sign Up Successful";
}