let getInput = document.querySelector(".container .task-add input");
let getBtn = document.querySelector(".container .task-add button");
let getConatiner= document.querySelector(".container ");
let checkStatus = false;
 

function addTask(inPut){
    let newP= document.createElement("div");
    newP.innerHTML='<div><i class="fas fa-circle" style="color: palevioletred;"></i><p>'+inPut+'</p></div><i class="remove-btn fa fa-times"></i> ';   
    
    newP.setAttribute("class", "new-par");
    
    getConatiner.appendChild(newP);
    let icon = newP.querySelector(".new-par i");
    let task = newP.querySelector(".new-par p");
    let closeBtn = newP.querySelector(".remove-btn");

    function checkTask(){       
        if(checkStatus==false){
            icon.setAttribute("class", "fas fa-check-circle");
            task.style.textDecoration = "line-through";
            task.style.color = "gray";
            checkStatus=true;
        } else if (checkStatus==true) {
            icon.setAttribute("class", "fas fa-circle");
            task.style.textDecoration = "none";
            task.style.color = "black";
            checkStatus=false;
        }  

         
    }
    task.addEventListener('click',checkTask);
    icon.addEventListener('click',checkTask);
     
     
    closeBtn.addEventListener('click',function(){
        newP.remove();
    });
   
}

getBtn.addEventListener('click', function(){
   if(getInput.value.trim()!=""){
    addTask(getInput.value);
    getInput.value = "";}else{
        alert("Please Add a Task!")
    }
})
document.addEventListener('keydown', function(event){
    if(getInput.value.trim()!="" && event.key=="Enter"){
     addTask(getInput.value);
     getInput.value = "";}
 })
