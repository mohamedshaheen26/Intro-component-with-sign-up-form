let form = document.getElementById("form"),
  fName = document.getElementById("fname"),
  lName = document.getElementById("lname"),
  email = document.getElementById("email"),
  password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let firstName = fName.value.trim();
  let lastName = lName.value.trim();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();
  let patternEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (firstName !== "") {
    if (isNaN(+firstName)) {
      success(fName);
    } else {
      errorMessage(fName, "First name must not contain numbers");
    }
  } else {
    errorMessage(fName, "Last name must not contain numbers");
  }

  if (lastName !== "") {
    if (isNaN(+lastName)) {
      success(lName);
    } else {
      errorMessage(lName, "Last Name not include number");
    }
  } else {
    errorMessage(lName, "Last Name Cannot be empty");
  }

  if (emailValue !== "") {
    if (emailValue.match(patternEmail)) {
      success(email);
    } else {
      errorMessage(email, "Looks Like this is not an email");
    }
  } else {
    errorMessage(email, "Email Cannot be empty");
  }

  if (passwordValue !== "") {
    if (passwordValue.length < 8) {
      errorMessage(password, "Pasword Must be 8 Characters");
    } else {
      success(password, "");
    }
  } else {
    errorMessage(password, "Password Cannot be empty");
  }
});

function errorMessage(req, message) {
  const formControl = req.parentElement;
  const span = formControl.querySelector("span");
  span.innerText = message;
  req.className = "error";
  span.className = "error-text";

  if (req === email) {
    req.style.color = "hsl(0, 100%, 74%)";
  }
}

function success(req) {
  req.className = "success";
  const formControl = req.parentElement;
  const span = formControl.querySelector("span");
  span.innerText = "";
  req.style.color = "black";
}
