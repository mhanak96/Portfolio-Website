const get = element => document.getElementById(element);

let open = get("menu-btn");
let nav = get("nav");
let exit = get("exit-btn");

open.addEventListener('click', () => {
    nav.classList.add('open-nav');
    exit.classList.add('activate');
})

exit.addEventListener('click', () => {
    nav.classList.remove('open-nav');
    exit.classList.remove('activate');
})