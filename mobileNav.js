
function openNav() {
    document.getElementById('mobile-nav').classList.replace('closeNav', 'openNav');
    document.getElementById('opacity-bg').classList.replace('closeNav', 'openNav');
}

function closeNav() {
    document.getElementById('mobile-nav').classList.replace('openNav', 'closeNav');
    document.getElementById('opacity-bg').classList.replace('openNav', 'closeNav');
}
