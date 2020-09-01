const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;
 
populateUI();

//pull date from storage to build UI
function populateUI() {
    const selectedseats =JSON.parse(localStorage.getItem('selectedseats'));
    
    if(selectedseats !== null && selectedseats.length > 0) {
        seats.forEach ( (seat,index) => {
            if (selectedseats.indexOf(index) >-1) {
        seat.classList.add('selected');
        }  
    });
}
    const selectedMovieindex = localStorage.getItem('selectedMovieindex');
    if (selectedMovieindex !== null){
        movieSelect.selectedindex = selectedMovieindex;
    }
}
//Function to update counts
function updateSelectedcount() {
    const selectedseats = document.querySelectorAll('.row.seat.selected')
    const countselectedseats = selectedseats.length;
    const seatsindex = [...selectedseats].map(seat => [...seats].indexOf(seat));
    localStorage.setItem('selectedseats', JSON.stringify(seatsindex));

    count.innerText = countselectedseats;
    count.innerText = ticketPrice * countselectedseats;
}
//Function to save the selected movie and its Price
function setMovieData(movieindex,movieprice) {
    localStorage.setItem('selectedMovieindex',movieindex);
    localStorage.setItem('selectedMoviePrice',movieprice);
    }
    
// Event listner for changeo select movie
    movieSelect.addEventListener('change', e => {
        ticketPrice = +e.target.value;
       setMovieData(e.target.selectedindex, e.target.value);
        updateSelectedcount();
    })
//Event listner for seats click for availab seats
container.addEventListener('click', (e) => {
 if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected')
    updateSelectedcount(); 
 }    
})
updateSelectedcount();