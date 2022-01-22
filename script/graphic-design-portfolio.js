let nav = document.getElementById("hamburger");
nav.addEventListener("click", navigation);


function navigation() {
    let navLinks = document.getElementById("navLinks");

    if (navLinks.style.display === "none") {
        navLinks.style.display = "block";
    }else {
        navLinks.style.display = "none";
    }
}
