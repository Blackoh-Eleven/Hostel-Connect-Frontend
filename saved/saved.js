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


async function loadSaved() {
    const token = localStorage.getItem("token");
    console.log(token)

    const res = await fetch("https://hostel-connect-backend-a7sq.onrender.com/home", {
        
        headers: {
            Authorization: `Bearer ${token}`
        }
        
    })

    // console.log(token)
    const user = await res.json();


    let saved = user.savedPosts;
    let savedcount = saved.length
    document.getElementById('saved-count').textContent = `${savedcount} Saved`
    saved.forEach(bookmark=>{

            const card = document.createElement("div");
card.classList.add("listing-card");

card.innerHTML = `
    <div class="listing-img">
        ... ${bookmark[0]}
    </div>

    <div class="listing-info">
        ...
    </div>

    <div class="save-btn">
        ...
    </div>
`;

document.getElementById("listingContainer").appendChild(card);
    })




}

loadSaved();
