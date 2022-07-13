const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

    if (email.value === "" || email.value === "" || password.value === "" || password.value === "") {
        alert("все поля должны быть заполнены.");
    }
    else {
        console.log(`Email: ${email.value}, Password: ${password.value}`);    
    }
    event.currentTarget.reset();
}
