var email = document.getElementById("exampleInputEmail1");
var pwd = document.getElementById("exampleInputPassword1");

function validate(){
    let username = "admin";
    let password = "12345";

    if(username==email.value&&password==pwd.value){
        return true;
    }
    else{
        error.innerHTML = "wrong username or password";
		error.style.color = "red";
        return false;
    }
}