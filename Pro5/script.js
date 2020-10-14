const search =document.getElementById('search');
const submit =document.getElementById('submit');
const random =document.getElementById('random');
const resultheading = document.getElementById('result-heading');
const mealcontainer = document.getElementById('meals');
const selectedmeal =document.getElementById('selected-meal');

//function to search meal from api and fetch the data
function  searchmeal(e) {
    e.preventDefault()
    //get the serch value from the input value
    const term =search.Value;
    console.log(term);
}
//Event listner
//1.Submit
submit.addEventListener('submit',searchmeal);