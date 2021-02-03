function loadMission() {


    fetch('https://cdn.filestackcontent.com/AIXqJlvSEO3Px16hs7ot')
    .then(function(response) {
        response.text().then(function(text) {
            var article;
            article = text;

            var textContainer = document.getElementsByClassName('blog-main-text')[0]
            textContainer.innerHTML = article
        })
    })

}
loadMission();