const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".list-group")[0];
const secondCardBody = document.querySelectorAll(".list-group")[1];
const clearButton = document.querySelector("#clearButton");

let todos = [];

runEvents();

function runEvents() {
    form.addEventListener("submit", addTodo);
}

function addTodo(e) {
    const inputText = addInput.value.trim();
    if (inputText == null || inputText == "") {
        alert("Lütfen bir değer giriniz!");
    }
    else {
        //arayüz ekleme
        addTodoToUI(inputText);
        addTodoToStorage(inputText);
    }
    //storage ekleme
    e.preventDefault();
}

function addTodoToUI(newTodo) {
    /* <li class="list-group-item d-flex justify-content-between">Todo 1
                            <a href="#" class="delete-item">
                                <i class="fa fa-remove"></i>
                            </a>
                        </li>*/
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = newTodo;

    const a = document.createElement("a");
    a.href = "#";
    a.className = "delete-item";

    const i = document.createElement("i");
    i.className = "fa fa-remove";

    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);

    addInput.value = "";
}

function addTodoToStorage(newTodo) {
    checktodosFromStorage()
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function checktodosFromStorage() {
    if (localStorage.getItem("todos") == null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}
console.log("hello0");
