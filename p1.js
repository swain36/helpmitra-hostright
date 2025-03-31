

/**course grid */
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const courseGrids = document.querySelectorAll(".course-grid");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            // Remove active class from all links
            document.querySelector(".nav-link.active").classList.remove("active");
            link.classList.add("active");

            // Hide all course grids
            courseGrids.forEach(grid => grid.classList.remove("active"));

            // Show the selected course grid
            const category = link.getAttribute("data-category");
            document.getElementById(category).classList.add("active");
        });
    });
});


/**login page */
function toggleForm() {
    var loginForm = document.getElementById("login-form");
    var signupForm = document.getElementById("signup-form");
    var formTitle = document.getElementById("form-title");
    var toggleText = document.querySelector(".toggle");

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
        formTitle.innerText = "Login";
        toggleText.innerText = "Don't have an account? Sign Up";
    } else {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
        formTitle.innerText = "Sign Up";
        toggleText.innerText = "Already have an account? Login";
    }
}

/*service */

window.onload = function () {
    if (window.location.hash) {
        var element = document.querySelector(window.location.hash);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }
};