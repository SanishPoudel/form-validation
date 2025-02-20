const pass = document.querySelector("#password");
const conf = document.querySelector("#confirm");
const submit = document.querySelector("button");
const first = document.querySelector("#firstName");
const last = document.querySelector("#lastName");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const form = document.querySelector("form");

function checkPassword(event) {
    event.addEventListener("input", (thisEvent)=> {
        thisEvent.preventDefault();
        form.reportValidity();
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
    
    event.preventDefault();
    form.reportValidity();

    if (first.value === "") {
        first.setCustomValidity("Please enter your first name.")
        return;
    } else {
        first.setCustomValidity("");
    }

    if (last.value === "") {
        last.setCustomValidity("Please enter your last name.")
        return;
    } else {
        last.setCustomValidity("");
    }

    if (phone.value === "") {
        phone.setCustomValidity("Please enter your phone number.")
        return;
    } else {
        phone.setCustomValidity("");
    }

    if (email.value === "") {
        email.setCustomValidity("Please enter your email address.");
        return;
    } else {
        email.setCustomValidity("");
    }

    if(pass.value === "") {
        pass.setCustomValidity("Please enter your password.")
        return;
    } else {
        pass.setCustomValidity("");
    }

    if (!(pass.value === conf.value)) {
        conf.setCustomValidity("Passwords don't match")
        form.reportValidity();
        return;
    } else {
        conf.setCustomValidity("");
    }

    alert("Hi five!!!");

});

function emptyCondition(inputField) {
    inputField.addEventListener("input", ()=> {
        if (!inputField.validity.valueMissing) {
            inputField.setCustomValidity("");
        }
    })
}

emptyCondition(first);
emptyCondition(last);
emptyCondition(phone);
emptyCondition(email);

function validate(field) {
    field.addEventListener("blur", ()=> {
        field.reportValidity();
    })
}

validate(first);
validate(last);
validate(phone);
validate(email);
validate(pass);
validate(conf);