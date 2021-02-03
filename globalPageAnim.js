function goToPage () {
    var page = this.innerHTML


    if (this.innerHTML == 'Timist') {
        setTimeout(function(){window.location.href = 'index' + '.html'}, 600);
    } else {
        if (this.innerHTML.length == 1330) {
            setTimeout(function(){window.location.href = 'index' + '.html'}, 600);
        } else {
            console.log(this)
            setTimeout(function(){window.location.href = page + '.html'}, 600);
        }
    }


    var main = document.getElementsByClassName('main-landing-section-wrapper')[0]
    main.style.animation = 'skewslideAway 0.6s ease forwards'
}
function startPage () {
    var main = document.getElementsByClassName('main-landing-section-wrapper')[0]
    main.style.animation = 'skewslideIn 0.6s ease forwards'
}
document.addEventListener('DOMContentLoaded', function() {
    startPage();
}, false);

function addListenersToNav () {
    var navItems = document.getElementsByClassName('navheaders')

    for (i = 0; i < navItems.length; i++) {
        navItems[i].removeEventListener('click', goToPage)
        navItems[i].addEventListener('click', goToPage)
    }

    document.getElementById('clockIcon').addEventListener('click', goToPage)
    document.getElementById('clockIconTimistTextLabel').addEventListener('click', goToPage)
}
addListenersToNav();

function setHeight () {
    var measureHeight = document.getElementById('test').offsetHeight

    var wrapper = document.getElementsByClassName('main-wrapper')[0]
    wrapper.style.height = measureHeight
}



// NAV BAR ANIMATIONS 
document.getElementById('aboutHeaderCont').addEventListener('mouseenter', dropdownnav)
document.getElementById('aboutHeaderCont').addEventListener('mouseleave', pullupnav)

document.getElementById('resourcesHeaderCont').addEventListener('mouseenter', dropdownnav)
document.getElementById('resourcesHeaderCont').addEventListener('mouseleave', pullupnav)

document.getElementById('helpHeaderCont').addEventListener('mouseenter', dropdownnav)
document.getElementById('helpHeaderCont').addEventListener('mouseleave', pullupnav)

document.getElementById('giveHeaderCont').addEventListener('mouseenter', dropdownnav)
document.getElementById('giveHeaderCont').addEventListener('mouseleave', pullupnav)



function dropdownnav(string) {
    var subjects = this.children;


    for(i = 0; i < subjects.length; i++) {
        if (i == 1) {var topofNearest = parseInt(subjects[(i - 1)].style.top); var topCalc = (topofNearest + 30) + 'px'}
        else {var topCalc = '50px'};

        if(i == 1 && subjects.length == 2){var topCalc = '50px'}

        //console.log(subjects[i])

        subjects[i].style.opacity = '1'; subjects[i].style.top = topCalc
    }
}

function pullupnav () {
    var subjects = this.children;
    //console.log(this)

    for(i = 0; i < subjects.length; i++) {

        subjects[i].style.opacity = null; subjects[i].style.top = null
    }
}