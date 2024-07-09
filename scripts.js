
//Nav drop down when screen size changes//
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                let activeLink = document.querySelector(`header nav a[href*=${id}]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            });
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Function to add the 'active' class
function showNavbar() {
    navbar.classList.add('active');
}

// Function to remove the 'active' class
function hideNavbar(event) {
    // Check if the clicked element is outside the menu icon and navbar
    if (!menuIcon.contains(event.target) && !navbar.contains(event.target)) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x'); // Ensure menu icon reverts when navbar is hidden
    }
}

// Show the navbar on hover
menuIcon.addEventListener('mouseover', showNavbar);

// Hide the navbar on click outside
document.addEventListener('click', hideNavbar);


//Toggle bar that hides different difficulty level projects when selected//
function toggleProjects(level) {
    var levels = ['beginner', 'intermediate', 'advanced'];

    // Remove 'hidden' class from all project lists
    levels.forEach(function(lvl) {
        var projectList = document.getElementById(lvl);
        projectList.classList.remove('hidden');
    });

    // Hide projects based on selected difficulty level if not 'all'
    if (level !== 'all') {
        levels.forEach(function(lvl) {
            var projectList = document.getElementById(lvl);
            if (lvl !== level) {
                projectList.classList.add('hidden');
            }
        });
    }
}

//Flips the certification card when hovered over//
document.querySelectorAll('.certification-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});
