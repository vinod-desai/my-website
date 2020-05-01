var appTheme = 'White';
const navigationBarItemList = document.getElementById('nav-items');
const navigationBarCloseBtn = document.getElementById('navBarCloseBtn');
const navigationBarOpenBtn = document.getElementById('navBarOpenBtn');
const container = document.getElementsByClassName("container")[0];
const appThemeBtn = document.getElementById('app-theme-btn');

const navigationBarItemListClickHandler = function (e) {
    const previousSelectedLink = document.querySelector('li>a.active');
    if(previousSelectedLink){
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
    if(appTheme === 'White'){
        document.getElementById("theme-btn-img").src = "./assets/black-theme.svg";
        appTheme === 'White';
    } else {
        document.getElementById("theme-btn-img").src = "./assets/white-theme.svg";
        appTheme === 'Black';
    }
}

navigationBarOpenBtn.addEventListener('click', openNavigationBar);
navigationBarCloseBtn.addEventListener('click', closeNavigationBar);
navigationBarItemList.addEventListener('click', navigationBarItemListClickHandler);
appThemeBtn.addEventListener('click', changeAppTheme);

