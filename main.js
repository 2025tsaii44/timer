
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



    setTimeout(startTimist, 400)
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
    //timerSection.style.backgroundColor = 'rgb(228, 213, 192)'
}

for (i = 0; i < document.getElementsByClassName('typesWords').length; i++) {
    //console.log(document.getElementsByClassName('typesWords')[i])
    document.getElementsByClassName('typesWords')[i].addEventListener('click', changeTypeTimer)
}


function changeTypeTimer() {
    var typesWords = document.getElementsByClassName('typesWords')
    for (i = 0; i < typesWords.length; i++) {
        if (window.getComputedStyle(typesWords[i]).getPropertyValue('color') == 'rgb(131, 121, 106)') {
            console.log(typesWords[i])
            var word = typesWords[i]
            var colored = word.innerHTML.toLowerCase()
        }
    }
    //console.log(this)

    var typeAlready = colored;
    var typeToGo = this.classList[1]

    var typeAlreadyNum = parseInt(word.classList[1])
    var typeToGoNum = parseInt(this.classList[0])

    switch (typeToGo) {
        case 'stopwatch':
            if (typeAlready == 'stopwatch') {
                return;
            } else {
                if (typeToGoNum> typeAlreadyNum) {
                    var animationToDo = 'whooshNext';
                } else {
                    var animationToDo = 'whooshPrev';
                }
                word.style.color = 'rgb(210, 196, 179)'
                this.style.color = 'rgb(131, 121, 106)'
                document.getElementById('timerContainer').style.display = null
                document.getElementById('countDownContainer').style.display = 'none'
            }
        break;
        case 'countdown':
            if (typeAlready == 'countdown') {
                return;
            } else {
                if (typeToGoNum> typeAlreadyNum) {
                    var animationToDo = 'whooshNext';
                } else {
                    var animationToDo = 'whooshPrev';
                }
                word.style.color = 'rgb(210, 196, 179)'
                this.style.color = 'rgb(131, 121, 106)'
                document.getElementById('timerContainer').style.display = 'none'
                document.getElementById('countDownContainer').style.display = 'grid'
            }
        break;
        case 'alarm':
            if (typeAlready == 'alarm') {
                return;
            } else {
                if (typeToGoNum> typeAlreadyNum) {
                    var animationToDo = 'whooshNext';
                } else {
                    var animationToDo = 'whooshPrev';
                }
                word.style.color = 'rgb(210, 196, 179)'
                this.style.color = 'rgb(131, 121, 106)'
                document.getElementById('timerContainer').style.display = 'none'
                document.getElementById('countDownContainer').style.display = 'grid'
                
                if (document.getElementsByClassName('simply-word').length != 0) {
                    //console.log(document.getElementsByClassName('simply-word'))
                    return;
                } else {
                    startcountdown();
                }
            }
        break;
    }
}
