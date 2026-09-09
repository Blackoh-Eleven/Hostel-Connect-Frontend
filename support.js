let namevar = document.getElementById('fullName');
let departmentvar = document.getElementById('department');
let levelvar = document.getElementById('level');
let emailvar = document.getElementById('email');

const form = document.querySelector("form");
const submitBtn = document.getElementById('submit-support');

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    let nameval = namevar.value;
    let departmentval = departmentvar.value;
    let levelval = levelvar.value;
    let emailval = emailvar.value;

    console.log(nameval);
    console.log(departmentval);
    console.log(levelval);
    console.log(emailval);

    let petitioner = {
        petitionerName: nameval,
        department: departmentval,
        level: levelval,
        email: emailval
    };

    try {

        submitBtn.textContent = "Processing...";
        submitBtn.disabled = true;

        const response = await fetch("https://hostel-connect-backend-a7sq.onrender.com/support", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(petitioner)
        });

        const data = await response.json();
        console.log(data);

        if (response.ok) {
            submitBtn.textContent = data.message;
            submitBtn.style.background = 'green';

            form.reset();
        } else {
            submitBtn.textContent = data.message;
            submitBtn.style.background = 'red';
            submitBtn.disabled = false;
        }

    } catch (err) {
        console.error(err);

        submitBtn.textContent = "Something went wrong";
        submitBtn.style.background = 'red';
        submitBtn.disabled = false;
    }
});