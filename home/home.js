let allPosts = [];
console.log('yes')
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

        // searchbar search
        const searchInput = document.getElementById("searchInput");
const results = document.getElementById("resultsofsearch");

searchInput.addEventListener("input", () => {

    const search = searchInput.value.toLowerCase();
        if (search === "") {
        results.innerHTML = "";
        return;
    }

    const filteredItems = posts.filter(item =>
      
        item.location.toLowerCase().includes(search)
        
    );
    console.log(filteredItems)


    // onclick =""

    results.innerHTML = filteredItems
        .map(item => `<button class="dynamicareasearch">${item.title}</button>`)
        .join("");
});


        // search icons functions
document.getElementById('selfcon-btn').addEventListener('click', function () {

    const results = posts.filter(item =>
        item.roomType.toLowerCase().includes("self-contain")
    );

    const container = document.getElementById('resultsdisplay');

    container.innerHTML = "";

    results.forEach(post => {

        container.innerHTML += `
            <div class="mini-card">

                <div class="mini-card-img">
                <img src="${post.images}" alt="Hostel">
                    <span class="mini-tag">Available</span>
                    

                    <svg viewBox="0 0 24 24" fill="none"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round">

                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>

                        <polyline points="9 22 9 12 15 12 15 22"/>

                    </svg>
                </div>

                <div class="mini-card-body">

                    <div class="mini-card-price">
                        ₦${post.price} <span>/yr</span>
                    </div>

                    <div class="mini-card-loc">
                        ${post.location}
                    </div>

                </div>

            </div>
        `;
    });
    document.getElementById('section-title').textContent = 'Available Self-Contain'
});


document.getElementById('singleroom-btn').addEventListener('click', function () {

    const results = posts.filter(item =>
        item.roomType.toLowerCase().includes("single-room")
    );

    const container = document.getElementById('resultsdisplay');

    container.innerHTML = "";

    results.forEach(post => {

        container.innerHTML += `
            <div class="mini-card">

                <div class="mini-card-img">
                <img src="${post.images}" alt="Hostel">
                    <span class="mini-tag">Available</span>

         
                </div>

                <div class="mini-card-body">

                    <div class="mini-card-price">
                        ₦${post.price} <span>/yr</span>
                    </div>

                    <div class="mini-card-loc">
                        ${post.location}
                    </div>

                </div>

            </div>
        `;
    });
    document.getElementById('section-title').textContent = 'Available Self-Contain'
});


    

  


                document.getElementById('shared-btn').addEventListener('click', function(){
                const results = posts.filter(item =>
        item.roomType.toLowerCase().includes("shared")
    );
        const container = document.getElementById('resultsdisplay');

    container.innerHTML = "";

    results.forEach(post => {

        container.innerHTML += `
            <div class="mini-card">

                <div class="mini-card-img">
                    <span class="mini-tag">Available</span>
                    <img src="${post.images}" alt="Hostel">

                    <svg viewBox="0 0 24 24" fill="none"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round">

                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>

                        <polyline points="9 22 9 12 15 12 15 22"/>

                    </svg>
                </div>

                <div class="mini-card-body">

                    <div class="mini-card-price">
                        ₦${post.price} <span>/yr</span>
                    </div>

                    <div class="mini-card-loc">
                        ${post.location}
                    </div>

                </div>

            </div>
        `;
    });
    document.getElementById('section-title').textContent = 'Available Shared Apartment'
});



                document.getElementById('underprice').addEventListener('click', function(){
                const results = posts.filter(item =>
        item.location.toLowerCase().includes("near gate")
    );
    const container = document.getElementById('resultsdisplay');

    container.innerHTML = "";

    results.forEach(post => {

        container.innerHTML += `
            <div class="mini-card">

                <div class="mini-card-img">
                    <span class="mini-tag">Available</span>
                    <img src="${post.images}" alt="Hostel">
                    <svg viewBox="0 0 24 24" fill="none"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round">

                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>

                        <polyline points="9 22 9 12 15 12 15 22"/>

                    </svg>
                </div>

                <div class="mini-card-body">

                    <div class="mini-card-price">
                        ₦${post.price} <span>/yr</span>
                    </div>

                    <div class="mini-card-loc">
                        ${post.location}
                    </div>

                </div>

            </div>
        `;
    });
    document.getElementById('section-title').textContent = 'Hostels Under ₦250k'
});



    } catch (err) {
        console.error(err);
    }
}


function createSelfConCard(post) {
    return `
        <div class="mini-card">
            <div class="mini-card-img">
                <span class="mini-tag">Available</span>

                <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
            </div>

            <div class="mini-card-body">
                <div class="mini-card-price">
                    ₦${post.price}k <span>/yr</span>
                </div>

                <div class="mini-card-loc">
                    ${post.location}
                </div>
            </div>
        </div>
    `;
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
saveBtn.addEventListener('click', async function () {

    let postId = post._id
    console.log(postId);


    // async function bookMark(postId) {
    const token = localStorage.getItem('token');

    const res = await fetch(`https://hostel-connect-backend-a7sq.onrender.com/posts/${postId}/save`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    
    const data = await res.json();
    console.log(data); 


    if(data.message ===  'Post saved'){
        const saver = this.querySelector(".save-btn");
        this.classList.add("saver");      //tells each bookmark buttton to be specific

        const icon = this.querySelector("i");
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");

        //         icon.classList.remove("fa-regular");
        // icon.classList.add("fa-solid");

    }else{
                const icon = this.querySelector("i");
        icon.classList.remove("fa-solid");
        icon.classList.add("fa-regular");

    }

       

    
//     const data = await res.text();

// console.log("Status:", res.status);
// console.log("Response:", data);
// }

// bookMark(postId);

});

    document
        .getElementById("listingContainer")
        .appendChild(card);
}

loadPost();




async function loadNotifications() {
    const token = localStorage.getItem('token');

    const res = await fetch(
        'https://hostel-connect-backend-a7sq.onrender.com/notifications',
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    const notifications = await res.json();

    console.log(notifications);
}

loadNotifications()

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



//  input.addEventListener("input", () => {

//     const value = input.value.toLowerCase();

//     const results = items.filter(item =>
//         item.toLowerCase().includes(value)
//     );
// });


// const searchInput = document.getElementById("searchInput");
// const results = document.getElementById("results");

// searchInput.addEventListener("input", () => {

//     const search = searchInput.value.toLowerCase();

//     const filteredItems = posts.filter(item =>
//         item.toLowerCase().includes(search)
//     );

//     results.innerHTML = filteredItems
//         .map(item => `<p>${item}</p>`)
//         .join("");
// });


const pills = document.querySelectorAll(".pill");

pills.forEach(pill => {
  pill.addEventListener("click", () => {

    pills.forEach(p => p.classList.remove("active"));

    pill.classList.add("active");

  });
});