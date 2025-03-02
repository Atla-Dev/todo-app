let darkmode = localStorage.getItem('darkmode');

const themeSwitch = document.getElementById('theme-switch');

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
    darkmode = 'active';
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
    darkmode = null;
}

if (darkmode === 'active') {
    enableDarkmode();
}

themeSwitch.addEventListener('click', (event) => {
 darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});