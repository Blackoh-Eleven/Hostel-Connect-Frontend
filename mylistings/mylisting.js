

// console.log('working')

// async function loadMyListing(){
//         const token = localStorage.getItem("token");
//     console.log(token)

//     const res = await fetch("https://hostel-connect-backend-a7sq.onrender.com/mylistings", {
        
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
        
//     })

//     let data = await res.json()

//     console.log(data)
// }

// loadMyListing()





























console.log("My listings page working");


const listingsContainer = document.getElementById("listingsContainer");
const loadingState = document.getElementById("loadingState");
const emptyState = document.getElementById("emptyState");
const errorState = document.getElementById("errorState");
const listingCount = document.getElementById("listingCount");

const retryBtn = document.getElementById("retryBtn");
const backBtn = document.getElementById("backBtn");


async function loadMyListing() {

    loadingState.classList.remove("hidden");
    listingsContainer.innerHTML = "";

    emptyState.classList.add("hidden");
    errorState.classList.add("hidden");

    try {

        const token = localStorage.getItem("token");

        if (!token) {
            throw new Error("No authentication token");
        }


        const res = await fetch(
            "https://hostel-connect-backend-a7sq.onrender.com/mylistings",
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );


        if (!res.ok) {
            throw new Error("Failed to fetch listings");
        }


        const data = await res.json();

        console.log("My listings:", data);


        loadingState.classList.add("hidden");


        if (!Array.isArray(data) || data.length === 0) {

            listingCount.textContent = "0 listings";

            emptyState.classList.remove("hidden");

            return;
        }


        listingCount.textContent =
            `${data.length} ${data.length === 1 ? "listing" : "listings"}`;


        data.forEach(post => {

            const card = document.createElement("article");

            card.className = "listing-card";


            const image = post.images && post.images.length > 0
                ? `
                    <img
                        class="listing-image"
                        src="${post.images[0]}"
                        alt="${escapeHTML(post.title)}"
                    >
                `
                : `
                    <div class="no-image">
                        <i class="fa-solid fa-house"></i>
                    </div>
                `;


            const amenities = post.amenities && post.amenities.length
                ? `
                    <div class="amenities">
                        ${post.amenities
                            .map(item => `
                                <span class="amenity">
                                    ${escapeHTML(item)}
                                </span>
                            `)
                            .join("")}
                    </div>
                `
                : "";


            const date = post.createdAt
                ? new Date(post.createdAt).toLocaleDateString("en-NG", {
                    day: "numeric",
                    month: "short",
                    year: "numeric"
                })
                : "";


            card.innerHTML = `
                ${image}

                <div class="listing-content">

                    <h2 class="listing-title">
                        ${escapeHTML(post.title || "Untitled listing")}
                    </h2>

                    <div class="listing-location">
                        <i class="fa-solid fa-location-dot"></i>
                        <span>
                            ${escapeHTML(post.location || "Location unavailable")}
                        </span>
                    </div>

                    <div class="listing-price">
                        ₦${Number(post.price || 0).toLocaleString()}
                    </div>

                    <div class="listing-meta">

                        <span class="meta-item">
                            ${escapeHTML(post.roomType || "Room type unavailable")}
                        </span>

                    </div>

                    ${amenities}

                    ${
                        date
                            ? `<p class="listing-date">Listed ${date}</p>`
                            : ""
                    }

                </div>
            `;


            listingsContainer.appendChild(card);

        });


    } catch (error) {

        console.error("My listings error:", error);

        loadingState.classList.add("hidden");

        listingCount.textContent = "Unable to load listings";

        errorState.classList.remove("hidden");
    }
}


function escapeHTML(value) {

    const div = document.createElement("div");

    div.textContent = value;

    return div.innerHTML;
}


retryBtn.addEventListener("click", loadMyListing);


backBtn.addEventListener("click", () => {
    window.history.back();
});


loadMyListing();
