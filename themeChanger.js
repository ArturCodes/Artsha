


function checkTheme() {
    const body = document.body;
    const img = document.getElementById('logo')
    const theme = document.getElementById('theme')

    if (body.classList.contains('dark')) {
        theme.src = "./assets/theme-white.png";
        img.src = "./assets/logo-white.png";

    } else if (body.classList.contains('blue')) {
        theme.src = "./assets/theme-white.png";
        img.src = "./assets/logo-white.png";

    } else if (body.classList.contains('light')) {
        img.src = "./assets/logo.png";
        theme.src = "./assets/theme.png"
    }
        

}


function themeChange() {
    const body = document.body;
    const img = document.getElementById('logo')
    const theme = document.getElementById('theme')

    if (body.classList.contains('light')) {
        body.classList.replace('light', 'dark');
        img.src = "./assets/logo-white.png";
        theme.src = "./assets/theme-white.png"
        localStorage.setItem('theme', 'dark');

    } else if (body.classList.contains('dark')) {
        body.classList.replace('dark', 'blue');
        img.src = "./assets/logo-white.png";
        theme.src = "./assets/theme-white.png"
        localStorage.setItem('theme', 'blue');

    } else if (body.classList.contains('blue')) {
        body.classList.replace('blue', 'light');
        img.src = "./assets/logo.png";
        theme.src = "./assets/theme.png"
        localStorage.setItem('theme', 'light');
    }
}