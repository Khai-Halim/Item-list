
//Variables
let ul = document.querySelector('#list');
let searchInput = document.querySelector('#search input');
const addForm = document.forms['add'];
const searchForm = document.forms['search'];  
let myToDos = ['a','b'];
let input = addForm.querySelector('input[type = "text"]');

//SAVE data
//If list is empty then clear storage.
function save(){
    localStorage.setItem('lists', ul.innerHTML);
    if(localStorage.getItem('lists') && localStorage.getItem('lists').trim().length === 0 ){
        localStorage.clear();
        console.log('clear');
     }
}

//LOAD data from local storage

if(localStorage.getItem('lists') && localStorage.getItem('lists').length > 0){
    ul.innerHTML =  localStorage.getItem('lists');
} else{
    newItem("Welcome! Insert an item in the below text box");
}

//DELETE an item
ul.addEventListener('click', function(e){
    if(e.target.className == "delete"){
        let li = e.target.parentElement
        ul.removeChild(li); 
    }
    //save
    save();
});

//ADD an item
addForm.addEventListener('submit', function(e){

    //prevent the browser from refreshing
    e.preventDefault();

    //clear searchInput and display all if adding an item during a search.
    searchInput.value = "";
    let items = ul.querySelectorAll('li');
    items.forEach(function(item){   
        //indexOf returns -1 if the value is not found    
            item.style.display = 'flex';
    })

    //error if no value is input
    if(input.value == ""){
        alert("Please input a value");
    } else{

    newItem(input.value);

    }

    //clear the input
    input.value = "";

    //save
    save();
});

//SEARCH functionality

searchForm.addEventListener('keyup', function(e){
    let value = e.target.value.toLowerCase();
    let items = ul.querySelectorAll('li');

    items.forEach(function(item){

        let note = item.firstElementChild.innerText.toLowerCase();
       
        //indexOf returns -1 if the value is not found
        if(note.indexOf(value) != -1){
            //Show item
            item.style.display = 'flex';
        }else{
            //hide item
            item.style.display = 'none';
        }
    })
});

//CREATE item and insert
function newItem(value){
    //Create elements for new to do item
    const li = document.createElement('li');
    const span = document.createElement('span');
    const span2 = document.createElement('span');

//add user input to a span
    span.innerHTML = value;
    
//instantiate a new delete button
    span2.innerHTML = "Delete";
    span2.classList = "delete";    

//attach new item to list
    li.appendChild(span);
    li.appendChild(span2);
    ul.appendChild(li);
};
    

//BUG fix
//fixed bug where items were being loaded with display: none. This happened when adding an item while search input has a value.
//To fix the bug, the search input now clears and all items get display: flex; when clicking the add button.
