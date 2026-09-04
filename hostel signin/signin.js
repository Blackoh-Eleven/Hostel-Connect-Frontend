const backBtn = document.getElementById("backBtn");

backBtn.addEventListener("click", () => {
    history.back();
});

let toastTimer;

function showToast(message, duration = 3000) {

    const toastfunctionless = document.getElementById("nofunctiontoast");
    const toastMessage = document.getElementById("toastMessage");

    if (!toastfunctionless || !toastMessage) return;

    // remove previous imer
    clearTimeout(toastTimer);

    // message
    toastMessage.textContent = message;

    // Show toast
    toastfunctionless.classList.add("show");

    // Hide after duration
    toastTimer = setTimeout(() => {
        toastfunctionless.classList.remove("show");
    }, duration);
}

document.getElementById('signin-btn').addEventListener('click',function(){
    showToast('You cant signin with Google at the moment')
})

document.getElementById('apple').addEventListener('click',function(){
    showToast('You cant signin with Apple at the moment')
})


const form = document.querySelector("form");



form.addEventListener("submit", async function (e) {
    e.preventDefault();

    let matricNumber = document.getElementById("matric");
    let matricNumberValue = matricNumber.value;


    let eMail = document.getElementById("email");
    let eMailValue = eMail.value;
    

    let passWord = document.getElementById("password");
    let passWordValue = passWord.value;
    

    let userInfo = {
        matricNumber: matricNumberValue,
        email: eMailValue,
        password: passWordValue
    };



    try {
        const res = await fetch("https://hostel-connect-backend-a7sq.onrender.com/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        });

        const data = await res.json();
        console.log(data);

        if(data.token){
            localStorage.setItem("token", data.token)
            const tok = localStorage.getItem("token")
            matricNumberValue = ''
            eMail.value = "";
            passWord.value = "";
             window.location.href = "../home/home.html";
             
        }else{
            document.getElementById("displaymessage").style.display = 'block';
            document.getElementById("displaymessage").textContent = data.message;
        }
    } catch (err) {
        console.error(err);
    }
});


let password = document.getElementById('password')
let showpassword = document.getElementById('password-toggle')
showpassword.addEventListener('click',function(){

    if (password.type === 'password') {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
})



/* =========================
FORGOT PASSWORD MODAL
========================= */

const forgotLink = document.querySelector('.forgot-link');

const forgotModal = document.getElementById('forgotModal');

const forgotClose = document.getElementById('forgotClose');

const backToSignin = document.getElementById('backToSignin');

const forgotForm = document.getElementById('forgotForm');

const forgotMessage = document.getElementById('forgotMessage');

const forgotEmail = document.getElementById('forgotEmail');

const forgotpassword = document.getElementById('newPassword');


// Open modal

forgotLink.addEventListener('click', function (e) {


e.preventDefault();

forgotModal.classList.add('active');

document.body.classList.add('modal-open');

forgotEmail.focus();


});

// Close modal

function closeForgotModal() {


forgotModal.classList.remove('active');

document.body.classList.remove('modal-open');

forgotForm.reset();

forgotMessage.textContent = '';


}

forgotClose.addEventListener('click', closeForgotModal);

backToSignin.addEventListener('click', closeForgotModal);

// Close when clicking outside the modal box

forgotModal.addEventListener('click', function (e) {


if (e.target === forgotModal) {
    closeForgotModal();
}


});

// Close with Escape key

document.addEventListener('keydown', function (e) {


if (
    e.key === 'Escape' &&
    forgotModal.classList.contains('active')
) {
    closeForgotModal();
}


});

// Forgot password form

forgotForm.addEventListener('submit', async function (e) {


e.preventDefault();

const identifier = forgotEmail.value.trim();
const passwordnew = forgotpassword.value.trim();
console.log(identifier)
console.log(passwordnew)

if (!identifier) {
    forgotMessage.textContent = 'Please enter your email or phone number.';
    forgotMessage.style.color = '#DC2626';
    return;
}


         let usernewdetails = {
           email :identifier,
           passwordnew:passwordnew
} 


    try {
        const res = await fetch("https://hostel-connect-backend-a7sq.onrender.com/forgotPassword", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usernewdetails)
        });


        const data = await res.json();
        console.log(data);

        if(data.message === 'user not found'){
            forgotMessage.style.color = '#DC2626';
        forgotMessage.textContent = data.message;
        }else{
            forgotMessage.textContent = data.message;
            forgotMessage.style.color = '#16A34A';
        }
    }catch(err){
        console.error(err)
    }
   

// Temporary frontend response
// We will replace this with your backend request.

// forgotMessage.textContent = 'Reset instructions will be sent shortly.';

// forgotMessage.style.color = '#16A34A';
    

});

