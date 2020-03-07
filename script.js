
//Global Variables
let ul = document.querySelector('#list');
const addForm = document.forms['add'];
const searchForm = document.forms['search'];  

//Delete functionality
ul.addEventListener('click', function(e){
    if(e.target.className == "delete"){
        let li = e.target.parentElement
        ul.removeChild(li);  
    }
});

//Add functionality

addForm.addEventListener('submit', function(e){

    //store the users input
    let input = addForm.querySelector('input[type = "text"]');

    //prevent the browser from refreshing
    e.preventDefault();

    //error if no value is input
    if(input.value == ""){
        alert("Please input a value");
    } else{

    //Create elements for new to do item
        const li = document.createElement('li');
        const span = document.createElement('span');
        const span2 = document.createElement('span');

    //add user input to a span
        span.innerHTML = input.value;
        
    //instantiate a new delete button
        span2.innerHTML = "Delete";
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

 

searchForm.addEventListener('keyup', function(e){
    
    let value = e.target.value.toLowerCase();
    let items = ul.querySelectorAll('li');

    items.forEach(function(item){

        let note = item.firstElementChild.innerText.toLowerCase();
       
        if(note.indexOf(value) != -1){

            //Show item
            item.style.display = 'flex';
        }else{
            //hide item

            item.style.display = 'none';
        }
    })
});

