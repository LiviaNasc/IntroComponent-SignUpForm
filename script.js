const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault(); // O form não será enviado de maneira tradicional, permitindo que controle o que acontece com os dados manualmente

    var firstName = fname.value.trim();
    var lastName = lname.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(firstName === ''){ 
        errorFunc(fname, 'First Name cannot be empty');
    }
    else{
        successFunc(fname);
    }

    if(lastName === ''){ 
        errorFunc(lname, 'Last Name cannot be empty');
    }
    else{
        successFunc(lname);
    }

    if(emailValue === ''){ 
        errorFunc(email, 'Email cannot be empty');
    } else if(!emailValue.match(pattern)){
        errorFunc(email, 'Looks like not an email');
    }
    else{
        successFunc(email);
    }

    if(passwordValue === ''){
        errorFunc(password, 'Password cannot be empty');
    }
    else{
        successFunc(password);
    }

});
//manipular as mensagens de erro no form
function errorFunc(req, message){
    const formControl = req.parentElement;
    const span = formControl.querySelector('span'); // procura o elemento span para exivir o erro
    span.innerText = message; // atualiza a mensagem do span para mostrar a mensagem de erro
    req.className += 'error'; // adiciona a classe css 'error' ao campo do gorm 
    span.className += 'error-text'; // adiciona a classe css 'error-text' ao elemento span 
    if(req !== email){ // limpa os outros cantos que nao são email
        req.value = '';
    }else{
        req.style.color = "hsl(0, 100%, 74%)";
    }
}

function successFunc(req){ // req = elemento html q representa o campo do form q esta sendo marcado como válido
    req.className += 'success'; // adiciona a classe css 'success' ao campo do form 
}