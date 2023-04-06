// const loginForm = document.getElementById("login-form");
// const loginButton = document.getElementById("login-form-submit");
// const loginErrorMsg = document.getElementById("login-error-msg");

// loginButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     const username = loginForm.username.value;
//     const password = loginForm.password.value;

//     if (username === "user" && password === "user") {
//         alert("You have successfully logged in.");
        
//         location.reload();
//     } else {
//         loginErrorMsg.style.opacity = 1;
//     }
// })

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username === "user" && password === "user") {
      window.location.href = "index.html";
    } else {
      alert("Invalid username or password!");
    }
  }
  