const form = document.querySelector("form");

form.addEventListener("submit", async function (e) {
    e.preventDefault(); //page wont reload after submit from to avoid data lossbefore use

    document.getElementById('signup-btn').innerText = 'please wait ..'


        let fullName = document.getElementById('name')
    let fullNameValue = fullName.value;
    fullName.value = ''

            let matricNumber = document.getElementById('matric')
    let matricNumberValue = matricNumber.value;
    matricNumber.value = ''

    let eMail = document.getElementById('email')
    let eMailValue = eMail.value;
    eMail.value = '';

            let phoneNumber = document.getElementById('phone')
    let phoneNumberValue = phoneNumber.value;
    phoneNumber.value = ''

    let passWord = document.getElementById('password')
    let passWordValue = passWord.value
    passWord.value = ''


    let userInfo = {
        fullName:fullNameValue,
        matricNumber:matricNumberValue,
        email:eMailValue,
        phoneNumber:phoneNumberValue,
        password:passWordValue
    }


  const res =  await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify(userInfo)
    })

    const data = await res.json()
    console.log(data)

    if (data){
        document.getElementById('signup-btn').innerText = 'signup successful'
        document.getElementById('signup-btn').style.background = 'green'
    }



    
})
