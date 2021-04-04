//WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future


var currentDay = document.querySelector("#currentDay")

//displaying current day on header
currentDay.innerHTML = dayjs().format("MMMM-DD-YYYY");



//display what is in local storage
var showSavedTasks = function(){
    $("#task1").html(localStorage.getItem("task1")) 
    $("#task2").html(localStorage.getItem("task2")) 
    $("#task3").html(localStorage.getItem("task3")) 
    $("#task4").html(localStorage.getItem("task4")) 
    $("#task5").html(localStorage.getItem("task5")) 
    $("#task6").html(localStorage.getItem("task6")) 
    $("#task7").html(localStorage.getItem("task7")) 
    $("#task8").html(localStorage.getItem("task8")) 
    $("#task9").html(localStorage.getItem("task9")) 
}
showSavedTasks();
//take what user puts in and save to local storage
var saveUserInput = function(){
    localStorage.setItem("task1", $.trim($("#task1").val()))
    localStorage.setItem("task2", $.trim($("#task2").val()))
    localStorage.setItem("task3", $.trim($("#task3").val()))
    localStorage.setItem("task4", $.trim($("#task4").val()))
    localStorage.setItem("task5", $.trim($("#task5").val()))
    localStorage.setItem("task6", $.trim($("#task6").val()))
    localStorage.setItem("task7", $.trim($("#task7").val()))
    localStorage.setItem("task8", $.trim($("#task8").val()))
    localStorage.setItem("task9", $.trim($("#task9").val()))
}


//variable to hold current time
var currentHour = (dayjs().hour());
console.log(currentHour)
console.log($.trim($("#task1").val()))
//making time blocks change based on past,present,future
//using if and else statement
//put in a function
var checkTheHour = function(){
    if( currentHour.toString() === "19"){
    console.log("it worked")}
    
}
