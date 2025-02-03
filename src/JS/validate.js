function key_focus(next) {
    const element = document.getElementById(next);
    console.log("1");
    if (element) {
        console.log('2');
        element.focus();
    } else {
        console.log(`Elemento com ID "${next}" não encontrado.`);
    }
}


function validate_password() {
    const password = document.getElementById("password");

    const length = document.getElementById("length");
    const number = document.getElementById("number");
    const letter = document.getElementById("letter");
    const special = document.getElementById("special");
    let validate = false;
    var i=0;
    console.log("validate_password");

    // first condition
    if(password.value.length >= 8){
        length.classList.remove("text-red-500");
        length.classList.add("text-green-500");
        length.classList.remove("marker:text-red-500");
        length.classList.add("marker:text-green-500");
        i++;
    }
    else{
        length.classList.remove("text-green-500");
        length.classList.add("text-red-500");
        length.classList.remove("marker:text-green-500");
        length.classList.add("marker:text-red-500");
        i--;
    }

    // second condition  
    if(/\d/.test(password.value)){
        number.classList.remove("text-red-500");
        number.classList.add("text-green-500");
        number.classList.remove("marker:text-red-500");
        number.classList.add("marker:text-green-500");
        i++;
    }
    else{
        number.classList.remove("text-green-500");
        number.classList.add("text-red-500");
        number.classList.remove("marker:text-green-500");
        number.classList.add("marker:text-red-500");
        i--;
    }

    // third condition
    if(/[a-zA-Z]/.test(password.value)){
        letter.classList.remove("text-red-500");
        letter.classList.add("text-green-500");
        letter.classList.remove("marker:text-red-500");
        letter.classList.add("marker:text-green-500");
        i++;
    }
    else{
        letter.classList.remove("text-green-500");
        letter.classList.add("text-red-500");
        letter.classList.remove("marker:text-green-500");
        letter.classList.add("marker:text-red-500");
    }


    // fourth condition
    if(/[!@#$%^&*¨(),.?":{}=|<>;:_+-]/.test(password.value)){
        special.classList.remove("text-red-500");
        special.classList.add("text-green-500");
        special.classList.remove("marker:text-red-500");
        special.classList.add("marker:text-green-500");
        i++;
    }
    else{
        special.classList.remove("text-green-500");
        special.classList.add("text-red-500");
        special.classList.remove("marker:text-green-500");
        special.classList.add("marker:text-red-500");
        i--;
    }

    if(i==4){
        validate = true;
        console.log("1");
        password.classList.remove("focus:ring-sky-500");
        password.classList.remove("focus:ring-red-500");
        password.classList.add("focus:ring-green-500");
        password.classList.remove("border-slate-300");
        password.classList.remove("border-red-500");
        password.classList.add("border-green-500");
    }
    else{
        validate = false;
        password.classList.remove("border-slate-300");
        password.classList.remove("border-green-500");
        password.classList.add("border-red-500");
        password.classList.add("focus:ring-red-500");
        password.classList.remove("focus:ring-sky-500");
        password.classList.remove("focus:ring-green-500");
    }
    if(password.value == ""){
        password.classList.add("border-slate-300");
        password.classList.remove("border-green-500");
        password.classList.remove("border-red-500");
        password.classList.remove("focus:ring-red-500");
        password.classList.add("focus:ring-sky-500");
        password.classList.remove("focus:ring-green-500");
    }
    
    
    return validate;
}

function validate_username(){
    const username = document.getElementById("username");
    let validate = false;

    if(username.validity.valid){
        validate = true;
        username.classList.remove("border-slate-300");
        username.classList.remove("border-red-500");
        username.classList.remove("focus:ring-red-500");
        username.classList.add("focus:ring-sky-500");
    }
    else{
        validate = false;
        username.classList.remove("border-slate-300");
        username.classList.add("border-red-500");
        username.classList.remove("focus:ring-sky-500");
        username.classList.add("focus:ring-red-500");

    }

    return validate; 
}

// procurar um jeito melhor de realizar essa abordagem, usando o async=true
function validate_email() {
    const email = $('#email');
    const alert_email = $('#alert_email');
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let validate = false;

    $.ajax({
        url: "verify_email.php",
        type: "POST",
        data: { email: email.val() },
        async: false, 
        success: function(data) {
            if (data === "Email is already in use") {
                validate = false;
                alert_email.css("display", "block");
                email.removeClass("focus:ring-sky-500").addClass("focus:ring-red-500");
                email.removeClass("border-slate-300").addClass("border-red-500");
                console.log("Email já está em uso");
            } else {
                validate = true;
                alert_email.css("display", "none");
                email.removeClass("focus:ring-red-500").addClass("focus:ring-sky-500");
                email.removeClass("border-red-500").addClass("border-slate-300");
                console.log("Email disponível");
            }
        },
        error: function(xhr, status, error) {
            console.error("Erro na requisição AJAX:", error);
        }
    });

    

    return validate;  // Agora esse retorno vai ser feito após a requisição
}

function validate_email2(){
    const email = document.getElementById("email");
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (emailRegex.test(email.value)){
        if (email.value.length > 0){
            email.classList.remove("border-red-500", "focus:ring-red-500");
            email.classList.add("border-slate-300", "focus:ring-sky-500");
            return true;
        }
        
    }
    else{
        if (email.value.length > 0){
            email.classList.add("border-red-500", "focus:ring-red-500");
            email.classList.remove("border-slate-300", "focus:ring-sky-500");
            return false;
        }
        
    }

}


function validate_form(){
    const submit = document.getElementById("submit");
    const alert = document.getElementById("alert");
    const email = document.getElementById("email");
    validate_to_match = validate_match();
    validate_to_password = validate_password();
    validate_to_email = validate_email();
    validate_to_email2 = validate_email2();
    validate_to_username = validate_username();

    console.log(validate_to_email, validate_to_email2, validate_to_match, validate_to_password, validate_to_username);

    if (validate_to_password && validate_to_match && validate_to_email && validate_to_email2 && validate_to_username) {
        submit.disabled = false;
        submit.classList.add("bg-indigo-500", "text-gray-100", "transition_button", "hover:bg-indigo-600");
        submit.classList.remove("bg-slate-300", "text-gray-400");
        console.log("FALSO");
    } else {
        submit.disabled = true;
        submit.classList.add("bg-slate-300", "text-gray-400");
        submit.classList.remove("bg-indigo-500", "text-gray-100", "transition_button","hover:bg-indigo-600");
        console.log("VERDADEIRO");
    }
    
}

function validate_newPassword(){
    const submit = document.getElementById("submit3");
    validate_to_match = validate_match();
    validate_to_password = validate_password();

    console.log(validate_to_match, validate_to_password);

    if (validate_to_password && validate_to_match) {
        submit.disabled = false;
        submit.classList.add("bg-indigo-500", "text-gray-100", "transition_button", "hover:bg-indigo-600");
        submit.classList.remove("bg-slate-300", "text-gray-400");
        console.log("FALSO");
    } else {
        submit.disabled = true;
        submit.classList.add("bg-slate-300", "text-gray-400");
        submit.classList.remove("bg-indigo-500", "text-gray-100", "transition_button", "hover:bg-indigo-600");
        console.log("VERDADEIRO");
    }
    
    
}

function validate_match(){
    const password = document.getElementById("password");
    const password2 = document.getElementById("password2");
    const match = document.getElementById("match");
    const submit = document.getElementById("submit");
    let validate = false;
    console.log("MACTCH");
    
    if(password.value != "" && password2.value != ""){
        // If password do not match
        if (password.value != password2.value){
            match.textContent = "Passwords do not match";
            password2.classList.remove("focus:ring-sky-500");
            password2.classList.remove("focus:ring-green-500");
            password2.classList.remove("border-slate-300");
            password2.classList.remove("border-green-500")
            match.classList.remove("text-green-500");
            match.classList.add("text-red-500");
            password2.classList.add("border-red-500");
            password2.classList.add("focus:ring-red-500");
            validate = false;
        }
        // If passwords match
        if (password.value == password2.value){
            match.textContent = "Passwords match";
            match.classList.remove("text-red-500");
            password2.classList.remove("border-red-500");
            password2.classList.remove("focus:ring-red-500");
            match.classList.add("text-green-500");
            password2.classList.add("border-green-500");
            password2.classList.add("focus:ring-green-500");
            validate = true;
        }
    }
    if(password2.value == ""){
        match.textContent = "";
        password2.classList.remove("border-green-500");
        password2.classList.remove("border-red-500");
        password2.classList.remove("focus:ring-green-500");
        password2.classList.remove("focus:ring-red-500");
        password2.classList.add("border-slate-300");
        password2.classList.add("focus:ring-sky-500");
        validate = false;
    }
    
    return validate;
    

}






  