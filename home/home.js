let allPosts = [];
async function loadProfile() {
    const token = localStorage.getItem("token");
    console.log(token)

    const res = await fetch("https://hostel-connect-backend-a7sq.onrender.com/home", {
        
        headers: {
            Authorization: `Bearer ${token}`
        }
        
    })

    // console.log(token)
    const user = await res.json();
    // console.log(user.password)
    let greet = document.getElementById('greeting').textContent = user.fullName
    // console.log(status, res.status);
}

loadProfile();

async function loadPost() {
    try {
        const res = await fetch("https://hostel-connect-backend-a7sq.onrender.com/posts");
        const posts = await res.json();

        if (!res.ok) {
            console.error(posts.message);
        } else {
            console.log(posts);

            posts.forEach(post => {
                createListingCard(post);
            });
        }

    } catch (err) {
        console.error(err);
    }
}


function createListingCard(post) {
    const card = document.createElement("div");

    card.classList.add("listing-card");

card.innerHTML = `
    <div class="listing-img">
        <span class="listing-tag">Available</span>

        <img src="${post.images[0]}" alt="Hostel">

        <button class="save-btn" >
            <i class="fa-regular fa-bookmark"></i>
        </button>
    </div>

    <div class="listing-body">
        <h3>
            ₦${post.price.toLocaleString()}
            <span>/yr</span>
        </h3>

        <p>${post.location}</p>

        <p>${post.roomType} • ${post.title}</p>
    </div>
`;


const saveBtn = card.querySelector('.save-btn');
saveBtn.addEventListener('click', function () {

    let postId = post._id
    console.log(postId);


    async function bookMark(postId) {
    const token = localStorage.getItem('token');

    const res = await fetch(`https://hostel-connect-backend-a7sq.onrender.com/posts/${postId}/save`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await res.json();
    console.log(data); 
    
//     const data = await res.text();

// console.log("Status:", res.status);
// console.log("Response:", data);
}

bookMark(postId);

});

    document
        .getElementById("listingContainer")
        .appendChild(card);
}

loadPost();

//bottom nav

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




const sidebar = document.getElementById("sidebar");

let sidecomputed = window.getComputedStyle(sidebar)
console.log(sidecomputed.display)

document.getElementById("cancelbtn").addEventListener("click", function () {
    if (sidecomputed.display === "block") {
        sidebar.style.display = "none";
        console.log(sidebar.style.display)
        
    }
});


document.getElementById("sidebaropen").addEventListener("click", function () {
    if (sidecomputed.display === "none") {
        sidebar.style.display = "block";
        console.log(sidebar.style.display)
        
    }
});




 //bookMark('64f1a2b3c4d5e6f7890abcde')


