// let homePageSection = document.getElementById("homePageSection");
let feedBackPageSection = document.getElementById("feedbackPageSection");
let logInPageSection = document.getElementById("logInPageSection");
let logInBtnElement = document.getElementById("logInBtnElement");
let errorMessage = document.getElementById("errorMessage");
let emailElement = document.getElementById("emailElement");
let passwordElement = document.getElementById("passwordElement");
logInBtnElement.addEventListener("click", function() {
    let emailValue = emailElement.value;
    let passwordElementValue = passwordElement.value;
    let emailEndsWith = emailValue.endsWith("@gmail.com");
    if (emailValue === "" && passwordElementValue === "") {
        errorMessage.textContent = "Enter Valid Email And Password!";
    } else if (emailValue !== "" && passwordElementValue === "") {
        errorMessage.textContent = "Enter Your Password";
    } else if (emailValue === "" && passwordElementValue !== "") {
        errorMessage.textContent = "Enter Your Email Id";
    } else if (emailValue !== "" && passwordElementValue !== "" && emailEndsWith) {
        logInPageSection.classList.add("d-none");
        feedBackPageSection.classList.add("d-block");
        // feedBackPageSection.classList.add("c-none");
        // homePageSection.classList.add("c-block");
        localStorage.setItem("password", passwordElementValue);
        localStorage.setItem("email", emailValue);
    }
});

