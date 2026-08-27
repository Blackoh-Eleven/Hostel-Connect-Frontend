async function userData (){
const token = localStorage.getItem("token");
    console.log(token)

    const res = await fetch("https://hostel-connect-backend-a7sq.onrender.com/home", {
        
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
    document.getElementById('numberofsaved').textContent =user.savedPosts.length

}

userData()

document.getElementById('logout-btn').addEventListener('click' ,function(){
    localStorage.removeItem("token")
    window.location.href = "../hostel signin/signin.html"
})
 





async function userPostData (){
const token = localStorage.getItem("token");
    console.log(token)

    const res = await fetch("https://hostel-connect-backend-a7sq.onrender.com/mylistings", {
        
        headers: {
            Authorization: `Bearer ${token}`
        }
        
    })

    
    const userPost = await res.json();
    console.log(userPost)

    document.getElementById('numberofposts').textContent =userPost.length
     



}

userPostData()
 

document.getElementById('gotolistpage').addEventListener('click' , function(){

    window.location.href = "../profile/mylist.html";
})
 

let editProfileBtn = document.getElementById('editProfile')
editProfileBtn.addEventListener('click',function(){
    console.log('settings active')
     overlay.classList.remove("hidden");
})


// openBtn.addEventListener("click", () => {
//     overlay.classList.remove("hidden");
// });

cancelBtn.addEventListener("click", () => {
    overlay.classList.add("hidden");
});

saveBtn.addEventListener("click", async () => {

    // send PATCH request
    const response = await fetch("/posts/" + postId, {
        method: "PATCH",
        body: JSON.stringify({
            title: title.value
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.ok) {
        overlay.classList.add("hidden"); // auto close
    }
});








// settinfgs open

const settingsBtn = document.getElementById("settingsBtn");
const settingsOverlay = document.getElementById("settingsOverlay");
const closeSettings = document.getElementById("closeSettings");


/* OPEN SETTINGS */

settingsBtn.addEventListener("click", () => {

    settingsOverlay.classList.add("active");

});


/* CLOSE SETTINGS */

closeSettings.addEventListener("click", () => {

    settingsOverlay.classList.remove("active");

});


/* CLOSE WHEN CLICKING OUTSIDE */

settingsOverlay.addEventListener("click", (event) => {

    if (event.target === settingsOverlay) {

        settingsOverlay.classList.remove("active");

    }

});












document.getElementById('viewsaved').addEventListener('click', function(){
    console.log('hi')
                window.location.href = "../saved/saved.html";

})






































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