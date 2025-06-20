const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    email: { value: emailValue },
    password: { value: passwordValue },
  } = form.elements;

  const email = emailValue.trim();
  const password = passwordValue.trim();

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);
  form.reset();
});
