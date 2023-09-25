let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  password = id("password"),
  confirmPassword = id("confirm-password"),
  gender = id("gender"),
  // checkbox = id("checkbox"),
  terms = id("terms"),
  date = id("age"),

  errorMsg = classes("error"),
  successMsg = classes("success-icon"),
  failureMsg = classes("failure-icon");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    engine(username, 0, "This field cannot be empty");
    engine(email, 1, "This field cannot be empty");
    engine(password, 2, "This field cannot be empty");
    engine(confirmPassword, 3, "This field cannot be empty");
    engine(gender, 4, "This field cannot be empty");
    engine(terms, 5, "Agree to our terms to continue");
  })

  

  let myForm = document.getElementById("form");
  let passwordInput = document.getElementById("password");
  let confirmPasswordInput = document.getElementById("confirm-password");
  let errorDiv = document.getElementsByClassName("error");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let password = passwordInput.value;
    let confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
      errorDiv.textContent = "Passwords do not match";
    } else {
      errorDiv.textContent = "";
      form.submit();
    }
  })




  let engine = (id, serial, message) => {

    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red"


        failureMsg[serial].style.opacity = "1"
        successMsg[serial].style.opacity = "0"
        
    }
    else{
        errorMsg[serial].innerHTML = ""
        id.style.border = "2px solid green"

        successMsg[serial].style.opacity = "1"
        failureMsg[serial].style.opacity = "0"
    }
  }


 
  //  date = document.getElementById("age");
  //  errorMsg = document.getElementsByClassName("error");

  // form.addEventListener("submit", (e) => {
  //   e.preventDefault();


  //   let dateInput = new Date(date.value);
  //   let currentDate = new Date();
  //   let age = currentDate.getFullYear() - dateInput.getFullYear();

  //   if (age < 18) {
  //     errorMsg[0].innerHTML = "This field cannot be empty";
  //     id.style.border = "2px solid red"


  //     // failureMsg[0].style.opacity = "1"
  //     // successMsg[0].style.opacity = "0"
  //   } else {
  //     errorMsg[0].innerHTML = "";
      
  //   }
  // })