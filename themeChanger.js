

// Check for theme & set it
if (theme) {
    const body = document.body;
    const theme = localStorage.getItem('theme')

    body.removeAttribute('class');
    body.classList.add(theme)
}

 
function themeChange() {
    const body = document.body;
    
    if (body.classList.contains('light')) {
        body.classList.replace('light', 'dark');
        localStorage.setItem('theme', 'dark');

    } else if (body.classList.contains('dark')) {
        body.classList.replace('dark', 'green');
        localStorage.setItem('theme', 'green');

    } else if (body.classList.contains('green')) {
        body.classList.replace('green', 'light');
        localStorage.setItem('theme', 'light');
    }
}