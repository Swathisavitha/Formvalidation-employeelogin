
// Form Validation

const form = document.querySelector('#form');
const fname = document.querySelector('#firstname');
const lname=document.querySelector('#lastname');
const email = document.querySelector('#email');
const pass = document.querySelector('#password');
const phoneno=document.querySelector('#phonenumber');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    inputValidation();
})

function inputValidation() {
    const employeename = uname.value.trim();
    const EmployeeId=EmpId.value.trim();
    const emailtrim = email.value.trim();
    const password = pass.value.trim();
    const phoneNumber=phoneno.value.trim();

    if (employeename === '') {
        setError(uname, 'employeename is empty');
    } else {
        setSuccess(uname)
    }
    if (EmployeeId ===''){
        setError(uname, 'employeename is empty');
    } else {
        setSuccess(uname)
    }

    if (emailtrim === '') {
        setError(email, 'Email is empty')
    }
    else {
        setSuccess(email)
    }

    if (password === '') {
        setError(pass, 'password is empty')
    } else if (password.length > 8 || password.length < 4) {
        setError(pass, 'password must be 4 to 8 characters')
    } else {
        setSuccess(pass)
    }
    if(phoneNumber ===''){
        setError(phoneno,'phoneNumber is empty')
    }
    else{
        setSuccess(phoneno)
    }

}

function setError(input, message) {
    const inputboxes = input.parentElement;
    const err = inputboxes.querySelector('small')
    err.innerText = message;
}

function setSuccess(element) {
    const inputboxes = element.parentElement;
    const err = inputboxes.querySelector("small");
    err.innerText = '';
}
