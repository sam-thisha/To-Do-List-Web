const todo_box=document.querySelector(".todo-box");
const add_new_container=document.querySelector(".add-new-container");
const add_new=document.getElementById("add_new");
const add_btn=document.getElementById("add")
const cancel_btn=document.getElementById("cancel");
const add_item=document.getElementById("add-item");
const tasks=document.querySelector(".tasks");
const trash=document.getElementById("trash");

var add_val;
var task;

add_new.addEventListener("click",()=>{
    todo_box.classList.add("hide");
    add_new_container.classList.remove("hide");
});

cancel_btn.addEventListener("click", ()=>{
    add_item.value="";
    todo_box.classList.remove("hide");
    add_new_container.classList.add("hide");
});

add_btn.addEventListener("click",()=>{
    add_val=add_item.value;
    console.log(add_val);
    if(add_val!=""){
        const new_task=document.createElement("div");
        new_task.classList.add("task");
        new_task.innerHTML=`<label for="todo1">${add_val}</label>
        <i class="fa-sharp fa-solid fa-trash"></i>
        <input type="checkbox" id="todo1">`;
        tasks.appendChild(new_task);
        todo_box.classList.remove("hide");
        add_new_container.classList.add("hide");

    }
});

trash.addEventListener("click",()=>{
    task=trash.parentNode;
    task.remove();
})



