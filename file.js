const inputBox = document.querySelector("#input-text");
const addBtn = document.querySelector(".add-btn");
const listContainer = document.querySelector(".list-container");

addBtn.addEventListener("click" , ()=>{
    if(inputBox.value === ""){
        alert("You Must Writw Somting");

    }else{
        
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span =  document.createElement("span");
        span.innerHTML = "\u00d7"

        li.appendChild(span);
    }
    inputBox.value ="";
    saveData();
})

listContainer.addEventListener("click",(e)=>{
   // console.log(e);
    
     if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");

        saveData()

     }else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();

        saveData()
     }
})

//... store the value in local storage beacause when was the page was refresh the list items are remove ...

function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask()