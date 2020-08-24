const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const ticketPrice = +movieSelect.value;

//Function to update counts
function updateSelectedcount() {
    const selectedseats = document.querySelectorAll('row,seat,selected')
    const countselectedseats = selectedseats.length;
    count.innerText = countselectedseats;
    count.innerText = ticketPrice * countselectedseats;
}
//Event listner for seats click for availab seats
container.addEventListener('click', (e) => {
 if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
    e.target.classList.toggle('selected')
    updateSelectedcount(); 
 }    
})