const password = document.getElementById("password")
const passwordConfirm = document.getElementById("confirm_password")
const errorText= document.getElementById("error_message")


let messages=[];

password.addEventListener("focus", function() {
    if (password.value==passwordConfirm.value) {
        password.className="correct";
        passwordConfirm.className="correct";
        messages=[]
        errorText.innerHTML = ''
    }
    
    if (password.value!==passwordConfirm.value) {
        password.className="error";
        passwordConfirm.className="error";
    }
    
    if (password.className=="error" || passwordConfirm.className=="error") {
        messages.push('Passwords do not match');
    }
    
    if(messages.length > 0) {
        errorText.innerText = messages.join(', ')
    } 
})



passwordConfirm.addEventListener("focus", function() {
    if (password.value==passwordConfirm.value) {
        password.className="correct";
        passwordConfirm.className="correct";
        messages=[];
        errorText.innerHTML = ''
    }
    
    if (password.value!==passwordConfirm.value) {
        password.className="error";
        passwordConfirm.className="error";
    }
    
    if (password.className=="error" || passwordConfirm.className=="error") {
        messages.push('Passwords do not match');
    }
    
    if(messages.length > 0) {
        errorText.innerText = messages.join(', ')
    } 
})






