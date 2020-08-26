//Function to update counts
function updateSelectedcount() {
    const selectedseats = document.querySelectorAll('row,seat,selected');
    const countselectedseats = selectedseats.length;
    count.innerText = countselectedseats;
    count.innerText = ticketPrice * countselectedseats;
}
