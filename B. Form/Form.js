const inputName = document.getElementById('form-name')
const inputEmail = document.getElementById('form-email')
const inputGender = document.getElementsByName('gender')
const male = document.getElementById('male')
const female = document.getElementById('female')

const nameWarning = document.getElementById('name-warning')
const emailWarning = document.getElementById('email-warning')
const genderWarning = document.getElementById('gender-warning')

const submit = document.getElementById('submit')
const form = document.getElementById('form')

// instant validation name & email
inputName.addEventListener('keyup', () => {
    if (inputName.value == "" || inputName.value == null){
        nameWarning.classList.remove('hidden')
    } else {
        nameWarning.classList.add('hidden')
    }
})

inputEmail.addEventListener('keyup', () => {
    if (inputEmail.value == "" || inputEmail.value == null){
        emailWarning.classList.remove('hidden')
    } else {
        emailWarning.classList.add('hidden')
    }
})

// check on click
male.addEventListener('click', () => {
    if (male.checked == false && female.checked == false){
        genderWarning.classList.remove('hidden')
    } else {
        genderWarning.classList.add('hidden')
    }
})

female.addEventListener('click', () => {
    if (male.checked == false && female.checked == false){
        genderWarning.classList.remove('hidden')
    } else {
        genderWarning.classList.add('hidden')
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // check on submit
    if (inputGender[0].checked == false && inputGender[1].checked == false) {
        genderWarning.classList.remove('hidden')
    } else {
        genderWarning.classList.add('hidden')
    }
});
