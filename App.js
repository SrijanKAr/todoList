//Selector
const todoInput= document.querySelector('.todo__input');
const todoButton = document.querySelector('.todo__btn');
const todoList = document.querySelector('.todo__list');
const filterOption = document.querySelector('.filter__todo');

//evenet listener
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click', deteteCheck);
filterOption.addEventListener('click', filterTodo);

//function
function addTodo(event){
    event.preventDefault(); //Prevent form from submitting
    //todoDiv
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //creating li 
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo__item");
    todoDiv.appendChild(newTodo);
    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete__btn");
    todoDiv.appendChild(completedButton);
    //check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash__btn");
    todoDiv.appendChild(trashButton);
    //Append to todo list
    todoList.appendChild(todoDiv);

    //clearing the todovalue input after input
    todoInput.value="";
}

function deteteCheck(e){
    const item = e.target;

    //delete

    if(item.classList[0] === "trash__btn"){
        const todo = item.parentElement;
        //animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();

        })
    }
    //check marked
    if(item.classList[0] === "complete__btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch(e.target.value){
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                }
                break;
        }
    });
}