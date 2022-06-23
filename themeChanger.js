
const body = document.body;
const theme = localStorage.getItem('theme')
const themeSwitchButton = document.getElementsByClassName('themeSwitchButton');

if (theme) {
    body.classList.add('theme');
}


themeSwitchButton.onclick = () => {

    if (theme = 'light') {
        body.classList.replace('light', 'green');
        localStorage.setItem('theme', 'green');
    } else if (theme = 'green') {
        body.classList.replace('green', 'dark');
        localStorage.setItem('theme', 'dark');
    } else if (theme = 'dark') {
        body.classList.replace('dark', 'light');
        localStorage.setItem('theme', 'light');
    };

}