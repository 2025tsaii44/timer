
    // This is an example with default parameters
    // You'll always have to call simplyCountdown using ID's, no classes.
    //console.log(moment().date())

function startcountdown() {

    var userWantsCustom; 
    var subject = document.getElementById('count-down')

    if (subject.classList[1] == 'userCustom') {
        userWantsCustom = 'true'
    }

    if (userWantsCustom == 'true') {
        var year = moment().year()
        var month = ''
        var day = ''
    
        simplyCountdown('.count-down', {
            year: year, 
            month: month, 
            day: day,
        });
    } else {
        var year = moment().year()
        var month = moment().month(); month = month + 1
        var day = moment().date()

        //console.log(day + 1)
    
        simplyCountdown('.count-down', {
            year: year, 
            month: month, 
            day: day,

            hours: 23, // Default is 0 [0-23] integer
            minutes: 0, // Default is 0 [0-59] integer
            seconds: 0, // Default is 0 [0-59] integer

            sectionClass: 'simply-section', //section css class
            amountClass: 'simply-amount', // amount css class
            wordClass: 'simply-word', // word css class
        });

        

    }

}

document.getElementById('count-down-timer').addEventListener('DOMSubtreeModified', displayCountdownClient)
document.getElementById('pauseCountdown').addEventListener('click', displayCountdownClient)

function displayCountdownClient () {
    if (localStorage.getItem('stateOfCountdown')) {
        if (localStorage.getItem('stateOfCountdown') == 'paused') {
            return;
        }
    }
    if (this.id == 'pauseCountdown') {
        localStorage.setItem('stateOfCountdown', 'paused')
        console.log(document.getElementsByClassName('simply-section')[3].children[0].children[0].innerHTML)
        return;
    }

    var countdown = document.getElementById('count-down-timer')
    var countdownDisplay = document.getElementsByClassName('start-Countdown')[0]

    var checkSections = document.getElementsByClassName('simply-section')[3]

    if (typeof checkSections !== 'undefined') {
        var sections = document.getElementsByClassName('simply-section')
        
        var dd = sections[0].children[0].children[0].innerHTML
        var hh = sections[1].children[0].children[0].innerHTML
        var mm = sections[2].children[0].children[0].innerHTML
        var ss = sections[3].children[0].children[0].innerHTML

        if (dd.length < 2) {dd = '0' + dd}
        if (hh.length < 2) {hh = '0' + hh}
        if (mm.length < 2) {mm = '0' + mm}
        if (ss.length < 2) {ss = '0' + ss}

        countdownDisplay.innerHTML = dd + ' : ' + hh + ' : ' + mm + ' : ' + ss
    }

}


localStorage.removeItem('stateOfCountdown')   



