let allPosts = [];
console.log('yes')

let notificationbox = document.getElementById('insidenotification')
let notificationboxstyle = window.getComputedStyle(notificationbox)
notificationbox.textContent = 'notification update will be rolled out soon so calm down Werey'

document.getElementById('notify-icon').addEventListener('click',function(){
    // console.log(locationboxstyle.display)
    if(notificationboxstyle.display === 'block'){
        notificationbox.style.display = 'none'
    }else{
        notificationbox.style.display = 'block'
    }
    
})

// let locationbox = document.getElementById('location-box')
// let locationboxstyle = window.getComputedStyle(locationbox)

// document.getElementById('filter-chip').addEventListener('click',function(){
//     // console.log(locationboxstyle.display)
//     if(locationboxstyle.display === 'block'){
//         locationbox.style.display = 'none'
//     }else{
//         locationbox.style.display = 'block'
//     }


//     // filter work
//  document.querySelectorAll('.location-item').forEach(button => {

//     button.addEventListener('click', function () {

//         let location = this.textContent.trim()

//         console.log(this.textContent);







//             const searchInput = document.getElementById("searchInput");
// const results = document.getElementById("resultsofsearch");

// searchInput.value = location

//     const filteredItems = posts.filter(item =>
      
//         item.location.toLowerCase().includes(search)
        
//     );
//     console.log(filteredItems)


//     // onclick =""

//     results.innerHTML = filteredItems
//         .map(item => `<button class="dynamicareasearch">${item.title}</button>`)
//         .join("");

//     });

// });

//      })



    







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
    document.getElementById('boldusername').textContent = user.fullName
}

loadProfile();

async function loadPost() {
    try {
            const token = localStorage.getItem("token");
        const res = await fetch("https://hostel-connect-backend-a7sq.onrender.com/posts",{
             headers: {
            Authorization: `Bearer ${token}`
        }
        });
        
        const posts = await res.json();



        if (!res.ok) {
            console.error(posts.message);
        } else {
            console.log(posts);
            // sort based on recently listed
            const sortedRecentlyListedPosts = [...posts].sort(
                (a,b) => new Date(b.createdAt) - new Date(a.createdAt) )

                // console.log(sortedRecentlyListedPosts)

                //   sort based on lowest price
                const sortLowestPricePost = [...posts].sort(
                    (a,b) => (a.price)  - (b.price)
                    
                )
                // console.log(sortLowestPricePost)

                // sort baesd on highest price //premium
  
                const sortHighestPricePost = [...posts].sort(
                    (a,b) => (b.price) - (a.price)
                )


            posts.forEach(post => {
                createListingCard(post) 

            });
            










document.getElementById("sortPosts").addEventListener("change", function () {
     document.getElementById('listingContainer').innerHTML = ``

     if (this.value === "default") {
    document.getElementById('section-posts-filter').textContent = ' Listings'
    console.log(posts)
                   posts.forEach(post => {
                createListingCard(post);
            });
  }

  if (this.value === "recent") {
    document.getElementById('section-posts-filter').textContent = 'Recently Listed'
                   sortedRecentlyListedPosts.forEach(post => {
                createListingCard(post);


            });
  

            
  }

  if (this.value === "low") {
    document.getElementById('section-posts-filter').textContent = 'Lowest Price'
                   sortLowestPricePost.forEach(post => {
                createListingCard(post);

            });
                           

  }

  if (this.value === "premium") {
    document.getElementById('section-posts-filter').textContent = 'Premium Hostels'
               sortHighestPricePost.forEach(post => {
                createListingCard(post);

            });
   

  }

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



let locationbox = document.getElementById('location-box')
let locationboxstyle = window.getComputedStyle(locationbox)

document.getElementById('filter-chip').addEventListener('click',function(){
    // console.log(locationboxstyle.display)
    if(locationboxstyle.display === 'block'){
        locationbox.style.display = 'none'
    }else{
        locationbox.style.display = 'block'
    }


    // filter work
 document.querySelectorAll('.location-item').forEach(button => {

    button.addEventListener('click', function () {

        let location = this.textContent.trim()

        console.log(this.textContent);

    const searchInput = document.getElementById("searchInput");
const results = document.getElementById("resultsofsearch");

searchInput.value = location

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

});

     })



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
    document.getElementById('section-title').textContent = 'Room and Self-Contain'
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
    document.getElementById('section-title').textContent = 'Available Single Room'
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


              document.getElementById('neargate-btn').addEventListener('click', function(){
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
    document.getElementById('section-title').textContent = 'Hostels Near School Gate'
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

 <button class="save-btn">
            <i class="${post.saved ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i>
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



    if (data.saved) {
    const icon = this.querySelector("i");
    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid");

} else {
    const icon = this.querySelector("i");
    icon.classList.remove("fa-solid");
    icon.classList.add("fa-regular");
}


    // if(data.saved){
    //    const icon = this.querySelector("i");

    // if (data.saved) {
    //     this.classList.add("saver");
    //     icon.classList.remove("fa-regular");
    //     icon.classList.add("fa-solid");
    // } else {
    //     this.classList.remove("saver");
    //     icon.classList.remove("fa-solid");
    //     icon.classList.add("fa-regular");
    // }

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
    console.log('work')
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




const pills = document.querySelectorAll(".pill");

pills.forEach(pill => {
  pill.addEventListener("click", () => {

    pills.forEach(p => p.classList.remove("active"));

    pill.classList.add("active");

  });
});


// const darkModeBtn = document.getElementById("darkModeBtn");

// darkModeBtn.addEventListener("click", () => {
//     document.body.classList.toggle("dark-mode");
//     // console.log('hi')
// });


const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }

});

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}


// side bar username 

