var appTheme = 'Black';
const navigationBarItemList = document.getElementById('nav-items');
const navigationBarCloseBtn = document.getElementById('navBarCloseBtn');
const navigationBarOpenBtn = document.getElementById('navBarOpenBtn');
const container = document.getElementsByClassName("container")[0];
const appThemeBtn = document.getElementById('app-theme-btn');
const scrollTopLink = document.getElementById('scroll-top-link');

function throttle(callback, limit) {
    let wait = false;
    return function () {
        if (!wait) {
            callback.apply(null, arguments);
            wait = true;
            setTimeout(function () {
                wait = false;
            }, limit);
        }
    }
}

const showHideScrollTopLink = function () {
    let y = window.scrollY;
    if (y >= 200) {
        scrollTopLink.className = "d-block";
    } else {
        scrollTopLink.className = "d-none";
    }
}

const navigationBarItemListClickHandler = function (e) {
    const previousSelectedLink = document.querySelector('li>a.active');
    if (previousSelectedLink) {
        previousSelectedLink.classList.remove('active');
    }
    e.target.classList.add('active');
}

const openNavigationBar = function (e) {
    document.getElementById("navigation-bar").style.width = "16rem";
    container.style.marginLeft = "16rem";
}

const closeNavigationBar = function (e) {
    document.getElementById("navigation-bar").style.width = "0";
    container.style.marginLeft = "0";
}

const changeAppTheme = function (e) {
    if (appTheme === 'White') {
        appTheme = 'Black';
        document.body.style.backgroundColor = '#000';
        document.body.style.color = '#fff';
        document.getElementById("theme-btn-img").src = "./assets/white-theme.svg";
        document.getElementById("scroll-top-img").src = "./assets/keyboard_arrow_up-white-48dp.svg";
    } else {
        appTheme = 'White';
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
        document.getElementById("theme-btn-img").src = "./assets/black-theme.svg";
        document.getElementById("scroll-top-img").src = "./assets/keyboard_arrow_up-black-48dp.svg";
    }
}

window.addEventListener("scroll", throttle(showHideScrollTopLink, 700));
navigationBarOpenBtn.addEventListener('click', openNavigationBar);
navigationBarCloseBtn.addEventListener('click', closeNavigationBar);
navigationBarItemList.addEventListener('click', navigationBarItemListClickHandler);
appThemeBtn.addEventListener('click', changeAppTheme);

changeAppTheme(); //set default theme - White

