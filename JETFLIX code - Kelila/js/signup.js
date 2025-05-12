function validateName(){
    var name = document.getElementById("name").value;
    var name_color = document.querySelector(".name_small");

    // name
    if(name == ''){
        document.getElementById("name_warning").innerHTML = "Name must be filled!";
        name_color.style.color = "red";
        return false;
    }
    else{
        document.getElementById("name_warning").innerHTML = "Name is valid";
        name_color.style.color = "green";
        return true;
    }
}

function validatePass(){
    var pass = document.getElementById("pass").value;
    var pass_color = document.querySelector(".pass_small");
    var pass = document.getElementById("pass").value;
    var conf_pass = document.getElementById("conf_pass").value;
    var conf_pass_color = document.querySelector(".conf_pass_small");

    //password
    if(pass == ''){
        document.getElementById("pass_warning").innerHTML = "Password must be filled!";
        pass_color.style.color = "red";
    }
    else{
        document.getElementById("pass_warning").innerHTML = "Password is valid";
        pass_color.style.color = "green";
    }

    //confirm password
    if(conf_pass == ''){
        document.getElementById("conf_pass_warning").innerHTML = "Password confirmation must be filled!";
        conf_pass_color.style.color = "red";
    }
    else if(conf_pass != pass){
        document.getElementById("conf_pass_warning").innerHTML = "Password doesn't match!";
        conf_pass_color.style.color = "red";
    }
    else{
        document.getElementById("conf_pass_warning").innerHTML = "Passwords match";
        conf_pass_color.style.color = "green";
        return true;
    }

    return false;
}

function validateDate(){
    var date = document.getElementById("date").value;
    var date_color = document.querySelector(".date_small");

    //date
    if(date == ''){
        document.getElementById("date_warning").innerHTML = "Date of birth is incomplete!";
        date_color.style.color = "red";
        return false;
    }
    else{
        document.getElementById("date_warning").innerHTML = "Date of birth is valid";
        date_color.style.color = "green";
        return true;
    }
}

function validateGender(){
    var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked;
    var gender_color = document.querySelector(".gender_small");

    if(male == false && female == false){
        document.getElementById("gender_warning").innerHTML = "Gender must be selected!";
        gender_color.style.color = "red";
        return false;
    }
    else{
        document.getElementById("gender_warning").innerHTML = "Gender valid";
        gender_color.style.color = "green";
        return true;
    }
}

function validateTnc(){
     var tnc = document.getElementById("tnc").checked;
     var tnc_color = document.querySelector(".tnc_small");

     if(tnc == false){
        document.getElementById("tnc_warning").innerHTML = "You must agree to the terms and conditions!";
        tnc_color.style.color = "red";
        return false;
     }
     else{
        document.getElementById("tnc_warning").innerHTML = " ";
        return true;
     }
}

function validateSignup(){
    var name = validateName();
    var pass = validatePass();
    var date = validateDate();
    var gender = validateGender();
    var tnc = validateTnc();

    if(name, pass, date, gender, tnc == true){
        alert("Successfully signed up");
        window.location = "movies.html";
    }
}