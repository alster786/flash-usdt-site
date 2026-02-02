function signup(){
  let email = document.getElementById("email").value;
  let pass  = document.getElementById("password").value;

  if(email==="" || pass===""){
    alert("Fill all fields");
    return;
  }

  localStorage.setItem("user_email", email);
  localStorage.setItem("user_pass", pass);

  alert("Signup successful. Now login.");
  showLogin();
}

function showLogin(){
  document.getElementById("title").innerText = "Login";
  document.getElementById("btn").innerText = "Login";
  document.getElementById("btn").onclick = login;
}

function login(){
  let email = document.getElementById("email").value;
  let pass  = document.getElementById("password").value;

  if(
    email === localStorage.getItem("user_email") &&
    pass  === localStorage.getItem("user_pass")
  ){
    localStorage.setItem("loggedIn","yes");
    window.location.href = "menu.html";
  }else{
    alert("Wrong login details");
  }
}
