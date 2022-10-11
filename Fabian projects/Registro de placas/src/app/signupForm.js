const signupForm = document.querySelector('#sigunp-form')
signupForm,addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value
    console.log(email, password)
}) 