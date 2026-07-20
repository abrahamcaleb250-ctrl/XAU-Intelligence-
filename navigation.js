/* ================================= */
/* XAU Intelligence Navigation */
/* ================================= */

document.addEventListener("DOMContentLoaded", function () {

    const menuBubble = document.getElementById("menuBubble");
    const sideMenu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");

    if (!menuBubble) {
        console.log("menuBubble not found");
        return;
    }

    if (!sideMenu) {
        console.log("sideMenu not found");
        return;
    }

    if (!overlay) {
        console.log("overlay not found");
        return;
    }

    menuBubble.onclick = function () {

        sideMenu.classList.add("open");
        overlay.classList.add("show");

    };

    overlay.onclick = function () {

        sideMenu.classList.remove("open");
        overlay.classList.remove("show");

    };

});
// ==============================
// Navigation Links
// ==============================

document.getElementById("navDashboard").onclick = () => {
    window.location.href = "index.html";
};

document.getElementById("navJournal").onclick = () => {
    window.location.href = "journal.html";
};

document.getElementById("navHistory").onclick = () => {
    window.location.href = "history.html";
};
document.getElementById("navConsistency").onclick = () => {
    window.location.href = "consistency.html";
};
document.getElementById("navNews").onclick = () => {
    window.location.href = "news.html";
};
