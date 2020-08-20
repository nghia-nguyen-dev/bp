const countries = document.querySelector('.countries');

countries.addEventListener('click', function(e) {

    console.log(e.target.tagName);
    if (e.target.tagName === 'P') {
        removeTourDates();
    }

    const country = e.target.dataset.country;
    document.querySelector(`.dates--${country}`).style.display = 'block';
   

})

function removeTourDates() {

    const dates = [...document.querySelectorAll('.dates')];
    dates.forEach(date => {
        date.style.display = '';
    })
    
}