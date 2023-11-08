
let loginForm = document.getElementById("formming");


loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let secondPassword = document.getElementById('confirm');

  if (email.value == "" || password.value == "") {
    alert("Ensure you input a value in both fields!");
  } else if(password.value != secondPassword.value){
    alert("**Passwords are not same");
        preventDefault();
  } else if(password.value.length < 8){
    alert('password must be at least 8 characters long');
    preventDefault();
  }else {
    alert("This form has been successfully submitted!");
    window.location.assign('./page2.html')
    console.log(
      `This form has a username of ${email.value} and password of ${password.value}`
    );

    email.value = "";
    password.value = "";
  }
});