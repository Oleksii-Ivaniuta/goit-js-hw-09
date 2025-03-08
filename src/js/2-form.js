"use strict";

const form = document.querySelector(".feedback-form");
const formData = { email: "", message: "" };
const emailInput = form.elements.email;
const messageInput = form.elements.message;
const formBtn = form.children[2];
const labelEmail = emailInput.parentNode;
const labelMessage = messageInput.parentNode;
formBtn.classList.add("form-btn");
labelEmail.classList.add("form-label");
labelMessage.classList.add("form-label");
emailInput.classList.add("form-input");
messageInput.classList.add("form-input");

emailInput.addEventListener("focus", () => {
    emailInput.setAttribute("placeholder", "Type area");
})

emailInput.addEventListener("blur", () => {
    emailInput.setAttribute("placeholder", "");
})

messageInput.addEventListener("focus", () => {
    messageInput.setAttribute("placeholder", "Type area");
})

messageInput.addEventListener("blur", () => {
    messageInput.setAttribute("placeholder", "");
})

form.addEventListener("input", () => {
    formData.email = emailInput.value;
    formData.message = messageInput.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

if (localStorage.getItem("feedback-form-state")) {
    const savedEmail = JSON.parse(localStorage.getItem("feedback-form-state")).email;
    const savedMessage = JSON.parse(localStorage.getItem("feedback-form-state")).message;
    formData.email = savedEmail;
    formData.message = savedMessage;
    emailInput.value = savedEmail;
    messageInput.value = savedMessage;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (emailInput.value && messageInput.value) {
        console.log(formData);
        form.reset();
        localStorage.removeItem("feedback-form-state");
        return
    }
    alert(`Fill please all fields`);
});




