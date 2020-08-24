const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.Occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieselect = document.getElementById('movie');
const ticketprice = +movieselect.Value; 


// Event listner for click on available seat
container.addEventListener('click', (e) => {
    if(e.target.classlist.contains('seat') && !e.target.classlist.contains('Occupied'));{
        console.log(e.target);
    }
})