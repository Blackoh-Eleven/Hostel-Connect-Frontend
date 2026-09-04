alert(` \u26A0  IMPORTANT — PLEASE READ

Hostel Connect connects students directly with hostel owners
and managers.

\uD83D\uDEA8 NEVER PAY FOR A HOSTEL YOU HAVE NOT PHYSICALLY INSPECTED.

Confirm the price, availability, location and other terms
directly with the hostel manager.

\uD83D\uDCB0 PRICE TOO HIGH?
If you believe a listing is unusually expensive or the listed
price doesn't match the actual price, REPORT THE LISTING.

If you notice anything suspicious or misleading, please
report it to us.

Our goal is to make hostel hunting safer, easier and
more affordable for students.`);


// toast

let toastTimer;

function showToast(message, duration = 3000) {

    const toastfunctionless = document.getElementById("nofunctiontoast");
    const toastMessage = document.getElementById("toastMessage");

    if (!toastfunctionless || !toastMessage) return;

    // remove previous imer
    clearTimeout(toastTimer);

    // message
    toastMessage.textContent = message;

    // Show toast
    toastfunctionless.classList.add("show");

    // Hide after duration
    toastTimer = setTimeout(() => {
        toastfunctionless.classList.remove("show");
    }, duration);
}

document.getElementById('overview').addEventListener('click',function(){
    showToast('Dont fret! Overview Featue will be rolled out soon')
})

document.getElementById('Preference').addEventListener('click',function(){
    showToast('Dont Fret Preference Feature will be updated soon')
})

document.getElementById('helpAndSupport').addEventListener('click',function(){
    showToast('Dont Fret help and Support Feature will be updated soon')
})

document.getElementById('about').addEventListener('click',function(){
    showToast('Dont Fret About Feature will be updated soon')
})



let allPosts = [];

let notificationbox = document.getElementById('insidenotification')
let notificationboxstyle = window.getComputedStyle(notificationbox)
// notificationbox.textContent = 'notification update will be rolled out soon so calm down Werey'

document.getElementById('notify-icon').addEventListener('click',function(){
    // console.log(locationboxstyle.display)
    if(notificationboxstyle.display === 'block'){
        notificationbox.style.display = 'none'
    }else{
        notificationbox.style.display = 'block'
    }
    // console.log('work wok')
    
})


// let toastbox = document.getElementById('toast')

// setTimeout(()=>{
// toastbox.style.display = 'none'
// },3000)

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
    // console.log(token)

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



        // HORIZONATAL SEARCh ICON
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
                <img src="${post.images[0]}" alt="Hostel">
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
                <img src="${post.images[0]}" alt="Hostel">
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
                    <img src="${post.images[0]}" alt="Hostel">

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
                    <img src="${post.images[0]}" alt="Hostel">

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
                    <img src="${post.images[0]}" alt="Hostel">
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

// main page listing
// function createListingCard(post) {
//     const card = document.createElement("div");

//     card.classList.add("listing-card");
//     if (!post.postedBy) return;

// card.innerHTML = `
//     <div class="listing-img">
//         <span class="listing-tag">Available</span>
       
//          <img src="${post.images[0]}" alt="Hostel">

//  <button class="save-btn">
//             <i class="${post.saved ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i>
//         </button>
//     </div>

//     <div class="listing-body">
//         <h3>
//             ₦${post.price.toLocaleString()}
//             <span>/yr</span>
//         </h3>

//         <p>${post.location}</p>

//         <p>${post.roomType} • ${post.title}</p>

//          <P class="poster-details"></P>

//         <button class="more" data-details="${post.postedBy.fullName}" data-phone="${post.postedBy.phoneNumber}">more</button>
//     </div>
// `
// let moreBtns = document.querySelectorAll('.more');
// // if (!post.postedBy) return;


// // moreBtns.forEach(morebtn =>  morebtn.addEventListener('click', function () {
// //         console.log(this.dataset.location);
// //         document.querySelectorAll('.testing').textContent = this.dataset.location
// //     })
// // )


// moreBtns.forEach(morebtn => {
//     morebtn.addEventListener('click', function () {
//         console.log(this.dataset.location);

//         const testing = document.querySelector('.poster-details');

//         console.log(testing);

//        this.parentElement.querySelector('.poster-details').textContent = `Listed By ${this.dataset.details}

//        Contact via whatsapp ${this.dataset.phone}
//        `;
//     });
// });

// ;










// // moreBtns.forEach(morebtn =>  morebtn.addEventListener('click', function () {
// //         console.log(this.dataset.location);
// //         document.getElementById('testing').textContent = this.dataset.location
// //     })
// // )


// // edit profile 


// // saveBtn.addEventListener("click", async () => {

// //     // send PATCH request
// //     const response = await fetch("/posts/" + postId, {
// //         method: "PATCH",
// //         body: JSON.stringify({
// //             title: title.value
// //         }),
// //         headers: {
// //             "Content-Type": "application/json"
// //         }
// //     });

// //     if (response.ok) {
// //         overlay.classList.add("hidden"); // auto close
// //     }
// // });




// let toastbox = document.getElementById('toast');
// const saveBtn = card.querySelector('.save-btn');
// saveBtn.addEventListener('click', async function () {


//         try {
//         navigator.vibrate?.(100);
//     } catch (error) {
//         console.log('Vibration not available');
//     }





//     let postId = post._id
//     // console.log(postId);


//     // async function bookMark(postId) {
//     const token = localStorage.getItem('token');

//     const res = await fetch(`https://hostel-connect-backend-a7sq.onrender.com/posts/${postId}/save`, {
//         method: 'POST',
//         headers: {
//             'Authorization': `Bearer ${token}`
//         }
//     });

    
//     const data = await res.json();
//     console.log(data.saved)
//     // console.log(data); 

//     function showMessage(){

//     if (data.saved === true){
//              toastbox.textContent = `Added to saved`
//                  toastbox.style.display = 'flex'
//           setTimeout(()=>{
//                   toastbox.style.display = 'none'
//              },3000)
//     }else if(data.saved === false){
//                     toastbox.textContent = `Removed from saved`
//                  toastbox.style.display = 'flex'
//           setTimeout(()=>{
//                   toastbox.style.display = 'none'
//              },3000)
//     }
// }


//     if (data.saved) {
//         showMessage()
//     const icon = this.querySelector("i");
//     icon.classList.remove("fa-regular");
//     icon.classList.add("fa-solid");





// } else {

//     const icon = this.querySelector("i");
//     icon.classList.remove("fa-solid");
//     icon.classList.add("fa-regular");

//     showMessage()
// }




// });

//     document
//         .getElementById("listingContainer")
//         .appendChild(card);
// }




function createListingCard(post) {
    const card = document.createElement("div");

    card.classList.add("listing-card");
    if (!post.postedBy) return;

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

<p class="listing-desc">${post.description}</p>

<div class="amenities">
    ${(post.amenities || []).map(a => `<span class="amenity-tag">${a}</span>`).join('')}
</div>

<p class="listing-date">
    Posted ${new Date(post.createdAt).toLocaleDateString()}
</p>


<div class="post-images">
    ${(post.images || []).map(image => `
        <img src="${image}" alt="Hostel image">
    `).join('')}
</div>

<p class="poster-details"></p>

<button class="more"
    data-details="${post.postedBy.fullName}"
    data-phone="${post.postedBy.phoneNumber}">
    more
</button>


    </div>
`
// let moreBtns = document.querySelectorAll('.more');       
// if (!post.postedBy) return;


// moreBtns.forEach(morebtn =>  morebtn.addEventListener('click', function () {
//         console.log(this.dataset.location);
//         document.querySelectorAll('.testing').textContent = this.dataset.location
//     })
// )


// moreBtns.forEach(morebtn => {
//     morebtn.addEventListener('click', function () {
//         console.log(this.dataset.details);

//         // const testing = document.querySelector('.poster-details');
//         // testing.style.display = 'block'
//         // const images = document.querySelector(".post-images");
//         // images.style.display = 'flex'

//         // console.log(testing);

//        this.parentElement.querySelector('.poster-details').textContent = `Listed By ${this.dataset.details}

//        Contact via whatsapp ${this.dataset.phone}
//        `;
//     });
// });

// moreBtns.forEach(morebtn =>  morebtn.addEventListener('click', function () {

// document.addEventListener('click', function (e) {
//     if (e.target.classList.contains('more')) {
//         const btn = e.target;
//         console.log(btn)

//         btn.parentElement.querySelector('.poster-details').textContent =
//             `Listed By ${btn.dataset.details}

// Contact via whatsapp ${btn.dataset.phone}`;
//     }
// });
// }))
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('more')) {
        const btn = e.target;
        const post = btn.parentElement;

        post.querySelector('.poster-details').style.display = 'block';
        post.querySelector('.post-images').style.display = 'flex';

        post.querySelector('.poster-details').textContent =
            `Listed By ${btn.dataset.details}

Contact via whatsapp ${btn.dataset.phone}`;
    }
});










// moreBtns.forEach(morebtn =>  morebtn.addEventListener('click', function () {
//         console.log(this.dataset.location);
//         document.getElementById('testing').textContent = this.dataset.location
//     })
// )


// edit profile 


// saveBtn.addEventListener("click", async () => {

//     // send PATCH request
//     const response = await fetch("/posts/" + postId, {
//         method: "PATCH",
//         body: JSON.stringify({
//             title: title.value
//         }),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     });

//     if (response.ok) {
//         overlay.classList.add("hidden"); // auto close
//     }
// });




let toastbox = document.getElementById('toast');
const saveBtn = card.querySelector('.save-btn');
saveBtn.addEventListener('click', async function () {


        try {
        navigator.vibrate?.(100);
    } catch (error) {
        console.log('Vibration not available');
    }





    let postId = post._id
    // console.log(postId);


    // async function bookMark(postId) {
    const token = localStorage.getItem('token');

    const res = await fetch(`https://hostel-connect-backend-a7sq.onrender.com/posts/${postId}/save`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    
    const data = await res.json();
    console.log(data.saved)
    // console.log(data); 

    function showMessage(){

    if (data.saved === true){
             toastbox.textContent = `Added to saved`
                 toastbox.style.display = 'flex'
          setTimeout(()=>{
                  toastbox.style.display = 'none'
             },3000)
    }else if(data.saved === false){
                    toastbox.textContent = `Removed from saved`
                 toastbox.style.display = 'flex'
          setTimeout(()=>{
                  toastbox.style.display = 'none'
             },3000)
    }
}


    if (data.saved) {
        showMessage()
    const icon = this.querySelector("i");
    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid");





} else {

    const icon = this.querySelector("i");
    icon.classList.remove("fa-solid");
    icon.classList.add("fa-regular");

    showMessage()
}




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

notifications.forEach(notificationMainMsg => {
    notificationbox.innerHTML += `
        <div class="each-notif" data-id="${notificationMainMsg._id}">
            <span>${notificationMainMsg.message}</span>
            ${!notificationMainMsg.read ? '<span class="unread-dot"></span>' : ''}
        </div>
    `;

   console.log(notificationMainMsg.read);

const notifDot = document.querySelector(".notif-dot");

const hasUnreadNotification = notifications.some(
    notification => notification.read === false
);

if (!hasUnreadNotification && notifDot) {
    notifDot.remove();
}
});


document.querySelectorAll('.each-notif').forEach(notification => {
    notification.addEventListener('click', async function () {

const notificationId = this.dataset.id;

console.log(notificationId);

const response = await fetch(
    `https://hostel-connect-backend-a7sq.onrender.com/notifications/${notificationId}/read`,
    {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }
);

// const result = await response.text();

// console.log(response.status);
// console.log(result);
const result = await response.json();

console.log(result);


if (response.ok) {
    const dot = this.querySelector('.unread-dot');

    if (dot) {
        dot.remove();
    }
}

        
    });
});

















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
        // console.log(sidebar.style.display)
        
    }
});


document.getElementById('mylisting').addEventListener('click', function(){
    console.log('hi')
                window.location.href = "../mylistings/mylisting.html";

})




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

    const currentTheme =
        document.documentElement.getAttribute("data-theme");

    const newTheme =
        currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);

    localStorage.setItem("theme", newTheme);

});


document.getElementById('logout').addEventListener('click' ,function(){
    localStorage.removeItem("token")
    window.location.href = "../hostel signin/signin.html"
})


// side bar username 






// editprofilebtn.addEventListener("click", () => {
//     // overlay.classList.remove("hidden");
//     console.log('working')
// });

// cancelBtn.addEventListener("click", () => {
//     overlay.classList.add("hidden");
// });






