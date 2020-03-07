
//Delete functionality
let ul = document.querySelector('#list');

ul.addEventListener('click', function(e){
    if(e.target.className == "delete"){
        let li = e.target.parentElement
        ul.removeChild(li);  
        console.log(e.target);
    }
});

//Add functionality
const addForm = document.forms['add'];

addForm.addEventListener('submit', function(e){

    let input = addForm.querySelector('input[type = "text"]');

    //error if no value is input
    if(input.value == ""){
        alert("Please input a value");

        //prevent the browser refreshing when clicking ok from alert


    } else{

        //Create elements
        const li = document.createElement('li');
        const span = document.createElement('span');
        const span2 = document.createElement('span');

    //prevent the browser from refreshing
        e.preventDefault();

    //add values to the span tags
        span.innerHTML = input.value;
        span2.innerHTML = "Delete";

    //add classes to the spans
        span2.classList = "delete";    

    //attach new item to list
        li.appendChild(span);
        li.appendChild(span2);
        ul.appendChild(li);


    }

    //clear the input
        input.value = "";
    });


//Search functionality

    

