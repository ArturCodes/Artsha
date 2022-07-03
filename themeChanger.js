

// Check for theme & set it
if (theme) {
    const body = document.body;
    const theme = localStorage.getItem('theme')

    body.removeAttribute('class');
    body.classList.add(theme)
}

 
function themeChange() {
    const body = document.body;
    const img = document.getElementById('logo')
    const theme = document.getElementById('theme')
    
    if (body.classList.contains('light')) {
        body.classList.replace('light', 'dark');
        img.src="./assets/logo-white.png";
        theme.src="./assets/theme-white.png"
        localStorage.setItem('theme', 'dark');

    } else if (body.classList.contains('dark')) {
        body.classList.replace('dark', 'green');
        img.src="./assets/logo-white.png";
        theme.src="./assets/theme-white.png"
        localStorage.setItem('theme', 'green');

    } else if (body.classList.contains('green')) {
        body.classList.replace('green', 'light');
        img.src="./assets/logo.png";
        theme.src="./assets/theme.png"
        localStorage.setItem('theme', 'light');
    }
}