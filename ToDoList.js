var $addButton = $(".btn-primary");
var $removeButton = $(".btn-danger");
var $todoList = $(".uncompleted");
var $doneList = $(".completed");



 $addButton.on("click", function(){
  
  
  var $newTask = $(".newTask").val();
  var $taskDate = $(".task-date").val();
  var $taskCategory=$(".task-category").val();
  var $newTaskString ="*   " + $newTask + "  " + $taskDate + "  " + $taskCategory; 
  var $todoList = $(".uncompleted");
  
   
   
  $todoList.append("<li>" + $newTaskString + "<button><span>Done </span></button></li>").addClass("todo");
  
    
  var $span = $(".todo button span");
  var $button = $(".todo button");
  $button.addClass("btn btn-success");
  $span.addClass("glyphicon glyphicon-ok"); 
  $("input").val("");
   
 })
 

 
  var $doneButton = $(".btn-success");
   

   $(".uncompleted").on("click", ".btn-success", function(){
   var $completedTask = $( this ).parent("li").text();
   $(this).parent("li").remove();
   $doneList.append("<li>" + $completedTask + "<button><span> Remove</span></button></li>").addClass("done");
   $(".done button").addClass("btn btn-danger");
   $(".done button span").addClass("glyphicon glyphicon-remove");
   
 })

 

 
 $(".completed").on("click",'.btn-danger',function(){  
   $(this).parent("li").remove();
   
 })
 
 



    
