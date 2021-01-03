
function setHeight () {
    var measureHeight = document.getElementById('test').offsetHeight

    var wrapper = document.getElementsByClassName('main-wrapper')[0]
    wrapper.style.height = measureHeight
}

function setDefaults () {
    var main = document.getElementsByClassName('main-wrapper')[0]
    main.scrollIntoView({behavior: 'smooth' });

    var buttonStartTimist  = document.getElementsByClassName('start-timist')[0]
    buttonStartTimist.addEventListener('click', animateStartTimist)

    //document.body.style.overflowY = 'hidden'
}
setDefaults();

function animateStartTimist () {
    document.getElementById('start-timist-text').style.marginLeft = '-5px'
    document.getElementById('start-timist-text').style.opacity = '0'

    setTimeout(function() {
        document.getElementById('start-timist-text').style.display = 'none'
        document.getElementsByClassName('loader')[0].style.display = 'block'
    }, 300);



    setTimeout(startTimist, 600)
}

function startTimist () {
    // RESET BUTTON
    document.getElementById('start-timist-text').style.marginLeft = null
    document.getElementById('start-timist-text').style.opacity = null
    document.getElementById('start-timist-text').style.display = 'block'
    document.getElementsByClassName('loader')[0].style.display = 'none'

    document.body.style.overflowY = 'scroll'

    var timerSection = document.getElementsByClassName('timer-display-main-wrapper')[0]
    timerSection.scrollIntoView({behavior: 'smooth' });

    timerSection.style.transition = 'ease-in 0.4s'
    timerSection.style.backgroundColor = 'rgb(228, 213, 192)'
}

