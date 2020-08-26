const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;
 
populateUI();

//pull date from storage to build UI
function populateUI() {
}
//Function to update counts
function updateSelectedcount() {
    const selectedseats = document.querySelectorAll('row,seat,selected')
    const countselectedseats = selectedseats.length;
    const seatsindex =[...selectedseats].map(seat => [...seats].indexOf(seat));
    localStorage.setItem('selectedmovieindex','movieindex');
    count.innerText = countselectedseats;
    count.innerText = ticketPrice * countselectedseats;
}
//Function to save the selected movie and its Price
// function to save the selected movies and data
function setMovieData(movieindex,moviePrice) {
    localStorage.setItem('selectedmovieindex','movieindex');
    localStorage.setItem('selectedmovieprice','movieprice');
    }
    
// Event listner for changeo select movie
    movieSelect.addEventListener('change', e => {
        ticketPrice = e.target.value;
       setMovieData(e.target.selectedindex, e.target.value);
        updateSelectedcount();
    })
//Event listner for seats click for availab seats
container.addEventListener('click', (e) => {
 if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected')
    updateSelectedcount(); 
 }    
})