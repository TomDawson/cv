const DARK_MODE_PREFERENCES_KEY = 'dark-mode-preference'
let isDarkMode = false;

/* Add/removes .dark class to <body> */
function updateInterface() {
    document.body.classList.remove('dark');

    if (isDarkMode) {
        document.body.classList.add('dark');
    }
}

/* Applies toggle and theme changes based on isDarkMode value */
function toggleTheme() {
    /* localTheme will be undefined or saved user preference */
    const localTheme = getThemeFromLocalStorage();
    /* isDarkMode will be set to preference defined, otherwise it will be false */
    isDarkMode = localTheme?.isDarkMode ?? isDarkMode;

    updateToggleButton();
    updateInterface();
}

/* Button changes based on isDarkMode boolean */
function updateToggleButton() {
    const slideToggleTextElement = document.getElementById('slideToggleText');
    const slideToggleButtonElement = document.getElementById('slideToggleButton');
/* If yes, add active class to button and change span text class to positive, inner text to yeah || If no, remove active class and change span text class to negative, inner text to nah */
    if(isDarkMode){
        slideToggleButtonElement.classList.add('active');
        slideToggleTextElement.classList.remove('negativeText');
        slideToggleTextElement.classList.add('positiveText');
        slideToggleTextElement.innerText = 'Yeah';
    } else {
        slideToggleButtonElement.classList.remove('active');
        slideToggleTextElement.classList.remove('positiveText');
        slideToggleTextElement.classList.add('negativeText');
        slideToggleTextElement.innerText = 'Nah';
    }
}

/* Toggle flips isDarkMode boolean value and then updates button and inferface */
function handleSlideToggle() {
    isDarkMode = !isDarkMode;

    saveThemeToLocalStorage();
    updateInterface();
    updateToggleButton();
}

/* Try get saved isDarkMode preference. If unsaved or fail to retrieve, return undefined. */
function getThemeFromLocalStorage() {
    const preferencesJSON = localStorage.getItem(DARK_MODE_PREFERENCES_KEY);

    if (!preferencesJSON) {
        return undefined;
    }

    try {
        return JSON.parse(preferencesJSON);
    } catch {
        return undefined;
    }
}

/* Save isDarkMode to local storage */
function saveThemeToLocalStorage() {
    localStorage.setItem(DARK_MODE_PREFERENCES_KEY, JSON.stringify({ isDarkMode }))
}

/* Called at the end to add a click event listener to toggle that fires handleSlideToggle() */
function connectSlideToggle() {
    const slideToggleElement = document.getElementById('slideToggle');
    slideToggleElement.addEventListener('click',handleSlideToggle);
}

/* Handles isDarkMode value based on device colour scheme preferences */
if (window.matchMedia) {
    /* checks if user has dark theme preference */
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    /* Listener checks for preferred colour scheme changes while page is open */
    mql.addEventListener('change', () => {
        isDarkMode = mql.matches;
        toggleTheme();
    });
    isDarkMode = mql.matches;
}

toggleTheme();
connectSlideToggle();