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
