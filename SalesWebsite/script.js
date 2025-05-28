document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded');
    const tiviMenu = document.querySelector('.tivi-submenu-toggle');

    if (!tiviMenu) {
        console.error('Tivi menu not found. Check .tivi-submenu-toggle class.');
        return;
    }

    function toggleSubmenu(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Tivi clicked');
        tiviMenu.classList.toggle('active');
    }

    tiviMenu.addEventListener('click', toggleSubmenu);
    tiviMenu.addEventListener('touchstart', toggleSubmenu);

    document.addEventListener('click', function (event) {
        if (!tiviMenu.contains(event.target)) {
            tiviMenu.classList.remove('active');
            console.log('Closed submenu');
        }
    });

    document.addEventListener('touchstart', function (event) {
        if (!tiviMenu.contains(event.target)) {
            tiviMenu.classList.remove('active');
        }
    });
});