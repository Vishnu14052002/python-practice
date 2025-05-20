function viewaddtask(){
    document.getElementsByClassName("create_todo")[0].style.display = "block";
    document.getElementsByClassName("viewtodo")[0].style.display = "none";
}



function viewseealltask(){
    document.getElementsByClassName("create_todo")[0].style.display = "none";
    document.getElementsByClassName("viewtodo")[0].style.display = "block";
}



function clicktoaddtask(){
    const task = document.getElementById("enter_task_id").value;
    const datatime = document.getElementById("datatimevalue").value;
    console.log(datatime)

    const divforcontainer = document.createElement("div");
    const newParagraph = document.createElement("p");
    const dateandtime = document.createElement("p");
    const complete_button = document.createElement("button");
    const delete_button = document.createElement("button");

    newParagraph.classList.add("new_task");
    dateandtime.classList.add("dateandtime_injs");
    complete_button.classList.add("complete_button_for_tasks")
    delete_button.classList.add("complete_button_for_tasks")
    divforcontainer.classList.add("divforcontainer");

    newParagraph.textContent =  task;
    dateandtime.textContent = datatime;
    complete_button.textContent = "Complete Task";
    delete_button.textContent = "Complete Task";
    
    
    divforcontainer.appendChild(newParagraph);
    divforcontainer.appendChild(dateandtime);
    divforcontainer.appendChild(complete_button);
    divforcontainer.appendChild(delete_button);

    const targetDiv = document.querySelector(".onetask");
    targetDiv.appendChild(divforcontainer);
    event.preventDefault();
}