const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.Occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieselect = document.getElementById('movie');
const ticketprice = +movieselect.Value; 

console.log(typeof ticketprice);