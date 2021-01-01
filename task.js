


  function myFunction1() {
    document.getElementById("task_myDropdown1").classList.toggle("task_show1");
  }
  function myFunction2() {
    document.getElementById("task_myDropdown2").classList.toggle("task_show1");
  }
  function myFunction3() {
    document.getElementById("task_myDropdown3").classList.toggle("task_show1");
  }
  function myFunction4() {
    document.getElementById("task_myDropdown4").classList.toggle("task_show1");
  }
  function myFunction5() {
    document.getElementById("task_myDropdown5").classList.toggle("task_show1");
  }
  function myFunction6() {
    document.getElementById("task_myDropdown6").classList.toggle("task_show1");
  }
  function myFunction7() {
    document.getElementById("task_myDropdown7").classList.toggle("task_show1");
  }
  function myFunction8() {
     document.getElementById("task_myDropdown8").classList.toggle("task_show1");
   }
  window.onclick = function(e) {
    if (!e.target.matches('.task_dropbtn1')) {
    var task_myDropdown = document.getElementById("task_myDropdown1");
      if (task_myDropdown.classList.contains('task_show')) {
        task_myDropdown.classList.remove('task_show');
      }
    }
  }
// newtask




showTask();
var New_task_Input=document.getElementById("New_task_Input")
var New_task_button=document.getElementById("New_task_button")
New_task_button.addEventListener("click",function(){
    var New_task_InputValue=New_task_Input.value;
    if(New_task_InputValue.trim()){
        var task=localStorage.getItem("localtask");
        if(task ==null)
        {
            taskObj=[];
        } else{
            taskObj =JSON.parse(task);
        }
        taskObj.push({task_name:New_task_InputValue});
        
        localStorage.setItem("localtask",JSON.stringify(taskObj));
        New_task_Input.value="";
    }
    showTask();
});
function showTask(){
    var task=localStorage.getItem("localtask");
    
        if(task ==null)
        {
            taskObj=[];
        } else{
            taskObj =JSON.parse(task);
        }

        var html="";
        var taskList=document.getElementById("taskList");
        taskObj.forEach(function(item,index){
            html +=`<div>
            <div class="task_row">
            <img class="task_right_icon" src="https://cdn1.vectorstock.com/i/thumb-large/59/25/check-mark-icon-isolated-on-white-background-vector-29005925.jpg" height="50px",width="35%"/>
               
                <div class="task_input_namevalue">${item.task_name}</div>
                <img class="task_person_icon"src="https://www.gravatar.com/avatar/c38574605ea2197456a247b0ce626f99?s=48&d=https%3A%2F%2Fservices.tmetric.com%2Fstorage%2FContent%2FAvatars%2Fuser-v2.png"/>
                <div><button class="task_delete_button" onclick="deleteItem(${index})">
                <img class="circle_task" src="data:image/png;base64,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"/></button></div>
                </div>
                <div class="horizon_task"></div>
                </div>`;
        });
        taskList.innerHTML=html;
}
function deleteItem(index)
{
    var task =localStorage.getItem("localtask")
    var taskObj=JSON.parse(task);
    taskObj.splice(index,1);
    localStorage.setItem("localtask",JSON.stringify(taskObj));
    showTask();
}


