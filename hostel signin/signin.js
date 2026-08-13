const form = document.querySelector("form");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    let matricNumber = document.getElementById("matric");
    let matricNumberValue = matricNumber.value;
    matricNumber.value = "";

    let eMail = document.getElementById("email");
    let eMailValue = eMail.value;
    eMail.value = "";

    let passWord = document.getElementById("password");
    let passWordValue = passWord.value;
    passWord.value = "";

    let userInfo = {
        matricNumber: matricNumberValue,
        email: eMailValue,
        password: passWordValue
    };

    try {
        const res = await fetch("http://localhost:3000/signin", {
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
             window.location.href = "../home/home.html";
             
        }else{
            document.getElementById("displaymessage").style.display = 'block';
            document.getElementById("displaymessage").textContent = data.message;
        }
    } catch (err) {
        console.error(err);
    }
});