

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

/*login tranfer*/

  const signupForm = document.querySelector("signup-form");

  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = signupForm.querySelector('input[placeholder="Full Name"]').value;
    const email = signupForm.querySelector('input[placeholder="Email"]').value;
    const password = signupForm.querySelector('input[placeholder="Password"]').value;

    const res = await fetch("https://helpmitra.onrender.com/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();

    if (res.status === 201) {
      alert("Signup successful! Redirecting to login...");
      window.location.href = "l1.html"; // your login page
    } else {
      alert(data.message);
    }
  });

  const loginForm = document.querySelector("login-form");

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = loginForm.querySelector('input[placeholder="Email"]').value;
    const password = loginForm.querySelector('input[placeholder="Password"]').value;

    const res = await fetch("https://helpmitra.onrender.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.status === 200) {
      alert("Login successful! Redirecting...");
      window.location.href = "p2.html"; // the page after login
    } else {
      alert(data.message);
    }
  });  




/*service */

window.onload = function () {
    if (window.location.hash) {
        var element = document.querySelector(window.location.hash);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }
};

/*profile icon */

function toggleDropdown() {
  const dropdown = document.getElementById("dropdownMenu");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Close dropdown if clicked outside
window.onclick = function(event) {
  if (!event.target.closest('.profile')) {
    document.getElementById("dropdownMenu").style.display = "none";
  }
};

/* api  */

fetch("https://helpmitra.onrender.com/api/data")
  .then(response => response.json())
  .then(data => {
    console.log("Data from backend:", data);
    // You can now use `data` to update the UI
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });


