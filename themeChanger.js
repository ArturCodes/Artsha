


// function checkTheme() {
//     const body = document.body;
//     const img = document.getElementById('logo')
//     const theme = document.getElementById('theme')

//     if (body.classList.contains('dark')) {
//         theme.src = "./assets/theme-white.png";
//         img.src = "./assets/logo-white.png";

//     } else if (body.classList.contains('light')) {
//         img.src = "./assets/logo.png";
//         theme.src = "./assets/theme.png"
//     }


// }

function changeTheme() {
    const body = document.body;
    const theme = document.getElementById('body');
    const img = document.getElementById('logo');

    if (body.classList.contains('light')) {
        body.classList.replace('light', 'dark');
        img.src = "./assets/logo.png";
        theme.src = "./assets/theme.png";

    } else if (body.classList.contains('dark')) {
        body.classList.replace('dark', 'light');
        theme.src = "./assets/theme-white.png";
        img.src = "./assets/logo-white.png";
    }
}
// function themeChange() {
//     const body = document.body;
//     const img = document.getElementById('logo')
//     const theme = document.getElementById('theme')
//     if (body.classList.contains('light')) {
//         body.classList.replace('light', 'dark');
//         img.src = "./assets/logo-white.png";
//         theme.src = "./assets/theme-white.png";
//         localStorage.setItem('theme', 'dark');
//     } else (body.classList.contains('dark')) {
//         body.classList.replace('dark', 'light');
//         img.src = "./assets/logo-white.png";
//         theme.src = "./assets/theme-white.png";
//         localStorage.setItem('theme', 'blue');
//      }
// }