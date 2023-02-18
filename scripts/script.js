console.log('- .... . .-. . -....- .. ... -....- -. --- -....- .--- --- -.- . -....- .... . .-. .');

//// Theme Swapping

var themeToggle = document.getElementById("theme-toggle");
var darkModeSpan = document.getElementById("dark-mode-span");
var lightModeSpan = document.getElementById("light-mode-span");
var socialIcons = document.getElementsByClassName("social-icon");

// Retrieve theme preference from device
var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme);

// Toggle between light and dark
themeToggle.onclick = function() {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";

    if (currentTheme === "light") {
        targetTheme = "dark";
        lightModeSpan.style.display = "none";
        darkModeSpan.style.display = "block";
        // Loop through array of social icons to invert them
        for(var i=0; i < socialIcons.length; i++) {
            socialIcons[i].style.filter = "invert(100%)";
        }
    } else {
        targetTheme = "light";
        darkModeSpan.style.display = "none";
        lightModeSpan.style.display = "block";
        // Loop through socials array to unset filter
        for(var i=0; i < socialIcons.length; i++) {
            socialIcons[i].style.filter = "unset";
        }
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
};

// Apply correct theme button on pageload
function refreshThemeToggle() {
    if (darkModeSpan && lightModeSpan) { // Null check
        if (storedTheme === "dark") {
            darkModeSpan.style.display = "block";
            lightModeSpan.style.display = "none";
            for(var i=0; i < socialIcons.length; i++) {
                socialIcons[i].style.filter = "invert(100%)";
            }
        } else {
            lightModeSpan.style.display = "block";
            darkModeSpan.style.display = "none";
        }
    }
};

refreshThemeToggle();

//// Scanlines 

var $scanlines = $('.scanlines');
$scanlines
    .children().hide()
    .first().show();

// toggle scanlines
$('#togglescanlines').on('click', function(e) {
  e.preventDefault();
  $scanlines.toggleClass('scanlines');
});

// switch between demos
$('.sample-ctrl a').on('click', function(e) {
   e.preventDefault();
   $scanlines
       .children().hide()
       .filter('#'+ $(this).attr('data-ctrl')).show();
});