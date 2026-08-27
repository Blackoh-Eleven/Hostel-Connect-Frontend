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