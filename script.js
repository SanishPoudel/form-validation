const pass = document.querySelector("#password");
const conf = document.querySelector("#confirm");
const submit = document.querySelector("button");
const first = document.querySelector("#firstName");
const last = document.querySelector("#lastName");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");

function checkPassword(event) {
    event.addEventListener("input", ()=> {
        if (event.validity.tooShort) {
            event.setCustomValidity("Please enter a password that is atleast 8 characters long.")
        } else {
            event.setCustomValidity("");
        }
    })
}

checkPassword(pass);
checkPassword(conf);

submit.addEventListener("click", (event)=> {

    if(pass.value === "") {
        pass.setCustomValidity("Please enter your password.")
    } else {
        pass.setCustomValidity("");
    }

    if (first.value === "") {
        first.setCustomValidity("Please enter your first name.")
    } else {
        first.setCustomValidity("");
    }

    if (last.value === "") {
        last.setCustomValidity("Please enter your last name.")
    } else {
        last.setCustomValidity("");
    }

    if (phone.value === "") {
        phone.setCustomValidity("Please enter your phone number.")
    } else {
        phone.setCustomValidity("");
    }

    if (email.value === "") {
        email.setCustomValidity("Please enter your email address.");
    } else {
        email.setCustomValidity("");
    }

    if (!(pass.value === conf.value)) {
        conf.setCustomValidity("Passwords don't match")
    } else {
        conf.setCustomValidity("");
    }
});

function emptyCondition(inputField) {
    inputField.addEventListener("input", ()=> {
        if (!inputField.validity.valueMissing) {
            inputField.setCustomValidity("");
        }
    })
}

emptyCondition(first);