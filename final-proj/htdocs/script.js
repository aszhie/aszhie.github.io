function validate() {
    const errormessages = document.getElementsByClassName("error");
    const successmessage = document.getElementById("success");

    let nm_err = document.getElementById("nm_err");
    let bd_err = document.getElementById("bd_err");
    let sx_err = document.getElementById("sx_err");
    let radiochecked = false;
    let em_err = document.getElementById("em_err");
    let usnm_err = document.getElementById("usnm_err");
    let pass_err = document.getElementById("pass_err");
    let conf_err = document.getElementById("conf_err");

    const fullname = document.getElementById("fullname");
    const birthdate = document.getElementById("birthdate");
    const email = document.getElementById("email");
    const username = document.getElementById("username");
    const pass = document.getElementById("pass");
    const confirm = document.getElementById("confirm");

    successmessage.textContent = "";

    for (let i = 0; i < errormessages.length; i++) {
        console.log("got error message");
        errormessages[i].textContent = "";
    }

    // sets error messages and success message to blank

    let valid = true;

    if (fullname.value.length < 2) {
        nm_err.textContent = "Full name is too small!"
        valid = false;
    }

    // checks if the length of the full name given is less than 2 and invalidates the form if it isn't

    const today = new Date();
    const inputted_date = new Date(birthdate.value);

    if (isNaN(inputted_date.getTime())) {
        bd_err.textContent = "Please enter a valid date.";
        valid = false;
    } else {
        const age = today.getFullYear() - inputted_date.getFullYear();
        const birthdaypassed = today.getMonth() > inputted_date.getMonth() || (today.getMonth() === inputted_date.getMonth() && today.getDate() >= inputted_date.getDate());

        const actualage = birthdaypassed ? age : age - 1;

        if (actualage < 13) {
            bd_err.textContent = "You're under 13!";
            valid = false;
        }
    }

    // makes a new date for both today and the given date in the form
    // checks if the given date is a valid date, invalidating the form if it isn't
    // after that, the age is checked to check if the user is of the required age (13)
    // we also check if the birthday of the user has passed to get the actual age
    // finally, we compare the age of the user and check if they are under or over 13, invalidating the form if they don't meet the requirement

    const radios = document.getElementsByName("sex");
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            radiochecked = true;
            break;
        }
    }

    if (!radiochecked) {
        sx_err.textContent = "Please select a sex.";
        valid = false;
    }

    // checks if any of the radio buttons are checked, invalidating the form if they aren't

    if (!email.value.includes("@")) {
        em_err.textContent = "Please enter a valid email address.";
        valid = false;
    } else if (!email.value.includes(".")) {
        em_err.textContent = "Please enter a valid email address.";
        valid = false;
    }

    // checks if the email contains an "@" and a ".", invalidating the form if it doesn't

    if (username.value.length < 8 || username.value.length > 20) {
        usnm_err.textContent = "Username must be between 8 and 20 characters.";
        valid = false;
    } else if (username.value.includes(" ") || username.value.includes("@") || username.value.includes("#") || username.value.includes("$") || username.value.includes("%") || username.value.includes("^") || username.value.includes("&") || username.value.includes("*")) {
        usnm_err.textContent = "Username contains invalid characters.";
        valid = false;
    }

    // checks if the username is between 8 and 20 characters, invalidating the form if it isn't
    // also checks if the username contains any spaces or special characters, invalidating the form if it does

    if (pass.value.length < 10) {
        pass_err.textContent = "Password must be at least 10 characters long.";
        valid = false;
    } else if (!/[A-Z]/.test(pass.value) || !/[a-z]/.test(pass.value) || !/[0-9]/.test(pass.value)) {
        pass_err.textContent = "Password must include an uppercase letter, a lowercase letter, and a number.";
        valid = false;
    }

    // checks if the password is at least 10 characters long, invalidating the form if it isn't
    // also checks if the password contains at least one uppercase letter, one lowercase letter, and one number, invalidating the form if it doesn't

    if (confirm.value !== pass.value) {
        conf_err.textContent = "Passwords do not match.";
        valid = false;
    }

    return valid;
}