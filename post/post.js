const token = localStorage.getItem('token');

const form = document.querySelector("form");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    document.getElementById('submit').innerText = '...uploading images';

 // Get images
    const imageInput = document.getElementById('images');
    const files = imageInput.files;

    if (files.length === 0) {
        console.log("Choose at least one image");
        document.getElementById('submit').innerText = 'Post';
        return;
    }

    // Put images into FormData
    const formData = new FormData();

    for (const file of files) {
        formData.append("images", file);
    }

    try {

        const uploadRes = await fetch("https://hostel-connect-backend-a7sq.onrender.com/upload", {
            method: "POST",
            body: formData
        });

        const uploadData = await uploadRes.json();

        console.log("Upload result:", uploadData);

        if (!uploadRes.ok) {
            console.error(uploadData.message);
            document.getElementById('submit').innerText = 'Post';
            return;
        }

        // Cloudinary URLs
        const imageUrls = uploadData.images;

        console.log("Image URLs:", imageUrls);


// wantto get the post data 
        document.getElementById('submit').innerText = '...creating post';

        const titleValue =
            document.getElementById('title').value;

        const descriptionValue =
            document.getElementById('description').value;

        const priceValue =
            document.getElementById('price').value;

        const locationValue =
            document.getElementById('location').value;

        const roomTypeValue =
            document.querySelector(
                'input[name="roomType"]:checked'
            )?.value;

        const amenitiesChecked =
            document.querySelectorAll(
                'input[name="amenities"]:checked'
            );

        const amenitiesValue =
            Array.from(amenitiesChecked)
                .map(input => input.value);



        const postAndAuthorInfo = {

            title: titleValue,

            description: descriptionValue,

            price: priceValue,

            location: locationValue,

            roomType: roomTypeValue,

            amenities: amenitiesValue,

            images: imageUrls
        };


        console.log("Post being sent:", postAndAuthorInfo);


// send to backend

        const res = await fetch("https://hostel-connect-backend-a7sq.onrender.com/posts", {

            method: "POST",

            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },

            body: JSON.stringify(postAndAuthorInfo)
        });


        const data = await res.json();

        console.log("Post result:", data);


        if (!res.ok) {

            console.error(data.message);

            document.getElementById('submit').innerText = 'Post';

            return;
        }
// alhamdulilahi

        console.log("POST CREATED SUCCESSFULLY");

        document.getElementById('submit').innerText = 'Post';

    } catch (err) {

        console.error(err);

        document.getElementById('submit').innerText = 'Post';
    }
});







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