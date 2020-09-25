//Get dom element
const toggle =document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const model= document.getElementById('model');

//Add Event  Listeners
//1.toglle the NAV
toggle.addEventListener('click',() => 
    document.body.classList.toggle('show-nav')
);

// 2. show the model
open.addEventListener('click', ()  => 
model.classList.add('show-model') 
);

//3. close the model
close.addEventListener('click', ()  => 
model.classList.remove('show-model')
);

//4. close the model on click outside model

window.addEventListener('click',e => 
    e.target === model ? model.classList.remove('show-model') : false 
    );
