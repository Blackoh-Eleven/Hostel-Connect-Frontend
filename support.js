let namevar = document.getElementById('fullName');
let departmentvar = document.getElementById('department');
let levelvar = document.getElementById('level');
let emailvar = document.getElementById('email');




const form = document.querySelector("form");
form.addEventListener("submit", async function (e) {
let nameval = namevar.value;
let departmentval = departmentvar.value;
let levelval = levelvar.value;
let emailval = emailvar.value;

    e.preventDefault();

    console.log(nameval)
    console.log(departmentval)
        console.log(levelval)
    console.log(emailval)

// save the answers to send to backed in ibject

    let petitioner = {
        petitionerName: nameval,
        department: departmentval,
        level: levelval,
        email: emailval
        
    };


    try{
        const response = await fetch("https://hostel-connect-backend-a7sq.onrender.com/support",{
            method:'POST',
            headers:{
                "content-Type": "application/json"
            },
            body:JSON.stringify(petitioner)
        })

        const data = await response.json()
        console.log(data)
if (response.ok) {
    document.getElementById('submit-support').textContent = data.message
    document.getElementById('submit-support').style.background = 'green'

    form.reset()
} else {
    document.getElementById('submit-support').textContent = data.message
    document.getElementById('submit-support').style.background = 'red'
}

    }catch(err){
        console.error(err)
    }













})