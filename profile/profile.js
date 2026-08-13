async function userData (){
const token = localStorage.getItem("token");
    console.log(token)

    const res = await fetch("http://localhost:3000/home", {
        
        headers: {
            Authorization: `Bearer ${token}`
        }
        
    })

    console.log(token)
    const user = await res.json();
    console.log(user)

    document.getElementById("profile-name").textContent = user.fullName
    document.getElementById("profile-email").textContent = user.email
        document.getElementById("profile-phone").textContent = user.phoneNumber
    document.getElementById("profile-matric").textContent = user.matricNumber

}

userData()
 
 
 


function navigateTo(page) {

    switch (page) {

        case "home":
            window.location.href = "../home/home.html";
            break;

        case "saved":
            window.location.href = "../saved/saved.html";
            break;

        case "post":
            window.location.href = "../post/post.html";
            break;

        case "message":
            window.location.href = "../message/message.html";
            break;

        case "profile":
            window.location.href = "../profile/profile.html";
            break;
    }
}