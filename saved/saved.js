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

    const res = await fetch("https://hostel-connect-backend-a7sq.onrender.com/saved", {
        
        headers: {
            Authorization: `Bearer ${token}`
        }
        
    })

    // console.log(token)
    const savedArray = await res.json();



    let saved = savedArray;
     console.log(saved)


    let savedcount = saved.length
    document.getElementById('saved-count').textContent = `${savedcount} Saved`
      savedArray.forEach(bookmark=>{

            const card = document.createElement("div");
card.classList.add("listing-card");

card.innerHTML = `
    <div class="listing-imgsaved">
     <img src="${bookmark.images[0]}" alt="">
    </div>

    <div class="listing-infosavedsaved">
        ${bookmark.title}
    </div>

    
    <div class="listing-locationsaved">

    <i class="fa-solid fa-map-pin"></i>
        ${bookmark.location}
    </div>

    <div class="save-btnsaved">
        <i class="fa-regular fa-bookmark"></i>
    </div>
`;

document.getElementById("listingContainer").appendChild(card);
    })




}

loadSaved();


const token = localStorage.getItem('token');

async function testing(){

const res = await fetch(
    'https://hostel-connect-backend-a7sq.onrender.com/saved',
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
);

const saved = await res.json();

console.log(saved);

}

testing()