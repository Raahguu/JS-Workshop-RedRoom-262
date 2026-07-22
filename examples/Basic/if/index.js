function check(age) {
    if (age >= 18) {
        console.log("R18+");
    }
    else if (age >= 15) {
        console.log("MA15+");
    }
    else if (age >= 13) {
        console.log("PG13+");
    }
    else {
        console.log("G");
    }
}

check(73);
check(18);
check(14);
check(7);