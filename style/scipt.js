//WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future




//displaying current day on header
$("#currentDay").html(dayjs().format("MMMM-DD-YYYY")) 

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
var currentHour = dayjs().hour();
console.log(currentHour)

//variables to get id value 
var hour9 = document.getElementById("09").id;
var hour10 = document.getElementById("10").id;
var hour11 = document.getElementById("11").id;
var hour12 = document.getElementById("12").id;
var hour13 = document.getElementById("13").id;
var hour14 = document.getElementById("14").id;
var hour15 = document.getElementById("15").id;
var hour16 = document.getElementById("16").id;
var hour17 = document.getElementById("17").id;

//making time blocks change based on past,present,future
//using if and else statement
//put in a function

var checkTheHour = function(){
    
    if( currentHour === parseInt(hour9)){
        $("#task1").addClass("present");
    }   
    else if( currentHour < parseInt(hour9) ){
        $("#task1").addClass("future");
    }
    else {
        $("#task1").addClass("past");
    }
    //checking 10 am
    if( currentHour === parseInt(hour10)){
        $("#task2").addClass("present");
    }   
    else if( currentHour < parseInt(hour10) ){
        $("#task2").addClass("future");
    }
    else {
        $("#task2").addClass("past");
    }
    //checking 11 am
    if( currentHour === parseInt(hour11)){
        $("#task3").addClass("present");
    }   
    else if( currentHour < parseInt(hour11) ){
        $("#task3").addClass("future");
    }
    else {
        $("#task3").addClass("past");
    }
    //checking 12 pm
    if( currentHour === parseInt(hour12)){
         $("#task4").addClass("present");
    }   
    else if( currentHour < parseInt(hour12) ){
        $("#task4").addClass("future");
    }
    else {
        $("#task4").addClass("past");
    }
    //checking 1 pm
    if( currentHour === parseInt(hour13)){
        $("#task1").addClass("present");
    }   
    else if( currentHour < parseInt(hour13) ){
        $("#task5").addClass("future");
    }
    else {
         $("#task5").addClass("past");
    }
    //checking 2 pm 
    if( currentHour === parseInt(hour14)){
        $("#task6").addClass("present");
    }   
    else if( currentHour < parseInt(hour14) ){
        $("#task6").addClass("future");
    }
    else {
        $("#task6").addClass("past");
    }
    //checking 3 pm
    if( currentHour === parseInt(hour15)){
        $("#task7").addClass("present");
    }   
    else if( currentHour < parseInt(hour15) ){
        $("#task7").addClass("future");
    }
    else {
        $("#task7").addClass("past");
    }
    //checking 4 pm
    if( currentHour === parseInt(hour16)){
        $("#task8").addClass("present");
    }   
    else if( currentHour < parseInt(hour16) ){
        $("#task8").addClass("future");
    }
    else {
        $("#task8").addClass("past");
    }
    //checking 5 pm
    if( currentHour === parseInt(hour17)){
        $("#task9").addClass("present");
    }   
    else if( currentHour < parseInt(hour17)){
        $("#task9").addClass("future");
    }
    else {
    $("#task9").addClass("past");
    }
}
checkTheHour()
setInterval(function(){
    checkTheHour();
}, 60 * 1000);