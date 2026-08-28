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

document.getElementById('google').addEventListener('click',function(){
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
