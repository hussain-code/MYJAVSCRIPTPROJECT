const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//All Function
function showError(input,message) {
    const formcontrol = input.parentElement;
    formControl.className = 'form-control error';
}

// This is an event listner for the form on submit
form.addEventListener('submit',function(e) {
    e.preventDefault();
   
    if (username.value === '' ) {
        showError(username,'Username is required')
    }

})