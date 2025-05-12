function validateLogin(event){
    console.log(event);
    event.preventDefault();
    var name = document.getElementById("name").value;
    var pass = document.getElementById("pass").value;

    if(name == '' && pass ==''){
        document.getElementById("name_warning").innerHTML = "Name must be filled!";
        document.getElementById("pass_warning").innerHTML = "Password must be filled!";
    }
    else if(name == '' && pass != ''){
        document.getElementById("name_warning").innerHTML = "Name must be filled!";
        document.getElementById("pass_warning").innerHTML = " ";
    }
    else if(name != '' && pass == ''){
        document.getElementById("pass_warning").innerHTML = "Password must be filled!";
        document.getElementById("name_warning").innerHTML = " ";
    }
    else{
        document.getElementById("name_warning").innerHTML = " ";
        document.getElementById("pass_warning").innerHTML = " ";

        alert("Successfully logged in");
        window.location = "movies.html";
    }
}