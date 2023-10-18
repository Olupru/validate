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

  


  // let myForm = document.getElementById("form");
  // let passwordInput = document.getElementById("password");
  // let confirmPasswordInput = document.getElementById("confirm-password");
  // let errorDiv = document.getElementsByClassName("error");

  // form.addEventListener("submit", (e) => {
  //   e.preventDefault();

  //   let password = passwordInput.value;
  //   let confirmPassword = confirmPasswordInput.value;

  //   if (password !== confirmPassword) {
  //     errorDiv.textContent = "Passwords do not match";
  //   } else {
  //     errorDiv.textContent = "";
  //     form.submit();
  //   }
  // })

 


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


  // this is for when the user click on the password box show message
  let myInput = document.getElementById("password");
  let letter = document.getElementById("letter");
  let capital = document.getElementById("capital");
  let number = document.getElementById("number");
  let length = document.getElementById("length");
  confirmPassword = document.getElementById("confirm-password")
  myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
  }
  function correspon() {
    let message = document.getElementById("message")
 
    let password = document.getElementById("password")
    let error = document.getElementsByClassName("error")
    let confirmPassword = document.getElementById("confirm-password")

    if (confirmPassword !== password) {
      error.innerHTML = "password does not match"
      
    } else {
      error.innerHTML = "";
    }

  }
  correspon()
  // when the user clicks outside of the password box hide the message
  myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
  }

  // when the user start typying something inside the password box
  myInput.onkeyup = function() {
    // validate lowercase letter
    let lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
    }
    // validate uppercase
    let upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }
    // validate number
    let numbers = /[0-9]/g;
    if(myInput.value.match(numbers)) {
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }
    // validate length
    if(myInput.value.length >= 8) {
      
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
  }


 function datePart() {
   date = document.getElementById("age");
   errorMsg = document.getElementsByClassName("error");

  form.addEventListener("submit", (e) => {
    e.preventDefault();


    let dateInput = new Date(date.value);
    let currentDate = new Date();
    let age = currentDate.getFullYear() - dateInput.getFullYear();

    if (age < 18) {
      errorMsg[0].innerHTML = "This field cannot be empty";
      id.style.border = "2px solid red"


      // failureMsg[0].style.opacity = "1"
      // successMsg[0].style.opacity = "0"
    } else {
      errorMsg[0].innerHTML = "";
      
    }
  })
}
datePart();

//  for the password eye and eye slash
function eyetoggle() {
const togglePassword = document.querySelector('#togglePassword');
const passwordInput = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);

  this.classList.toggle('bi-eye');
})
}
eyetoggle();

// confirmPassword eye toggle
function eyetoggle2() {
  const toggleEye2 = document.querySelector('#toggleEye2');
  const passwordInput = document.querySelector('#confirm-password');

  toggleEye2.addEventListener('click', function (e) {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    this.classList.toggle('bi-eye');
  })
}
eyetoggle2();