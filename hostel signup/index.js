const form = document.querySelector("form");

form.addEventListener("submit", async function (e) {
    e.preventDefault(); //page wont reload after submit from to avoid data lossbefore use

    document.getElementById('signup-btn').innerText = 'please wait ..'


        let fullName = document.getElementById('name')
    let fullNameValue = fullName.value;
  

            let matricNumber = document.getElementById('matric')
    let matricNumberValue = matricNumber.value;
   

    let eMail = document.getElementById('email')
    let eMailValue = eMail.value.toLowerCase();
    

            let phoneNumber = document.getElementById('phone')
    let phoneNumberValue = phoneNumber.value;
   

    let passWord = document.getElementById('password')
    let passWordValue = passWord.value
   


    let userInfo = {
        fullName:fullNameValue,
        matricNumber:matricNumberValue,
        email:eMailValue,
        phoneNumber:phoneNumberValue,
        password:passWordValue
    }


  const res =  await fetch("https://hostel-connect-backend-a7sq.onrender.com/signup", {
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify(userInfo)
    })


const data = await res.json();
console.log(data);

if (data.message === 'Signup Successful.Kindly proceed to Login') {
    document.getElementById('signup-btn').innerText = 'Signup Successful';
    document.getElementById('signup-btn').style.background = 'green';
    fullName.value = ''
     matricNumber.value = ''
     eMail.value = '';
      phoneNumber.value = ''
       passWord.value = ''
       window.location.href = "../hostel signin/signin.html";
}else{
    document.getElementById('errorlogs').textContent = data.message
     document.getElementById('signup-btn').innerText = 'Sign up';
}



    
})
