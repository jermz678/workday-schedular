//WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future


var currentDay = document.querySelector("#currentDay")

//displaying current day on header
currentDay.innerHTML = dayjs().format("MMMM-DD-YYYY");


//variables for each text area
var task1 = document.getElementById("task1");
var task2 = document.getElementById("task2");
var task3 = document.getElementById("task3");
var task4 = document.getElementById("task4");
var task5 = document.getElementById("task5");
var task6 = document.getElementById("task6");
var task7 = document.getElementById("task7");
var task8 = document.getElementById("task8");
var task9 = document.getElementById("task9");

//take what user puts in and save to local storage
var saveUserInput = function(){
    localStorage.setItem("task1", task1.value)
    localStorage.setItem("task2", task2.value)
    localStorage.setItem("task3", task3.value)
    localStorage.setItem("task4", task4.value)
    localStorage.setItem("task5", task5.value)
    localStorage.setItem("task6", task6.value)
    localStorage.setItem("task7", task7.value)
    localStorage.setItem("task8", task8.value)
    localStorage.setItem("task9", task9.value)
}
    task1.innerHTML = localStorage.getItem("task1")
    task2.innerHTML = localStorage.getItem("task2")
    task3.innerHTML = localStorage.getItem("task3")
    task4.innerHTML = localStorage.getItem("task4")
    task5.innerHTML = localStorage.getItem("task5")
    task6.innerHTML = localStorage.getItem("task6")
    task7.innerHTML = localStorage.getItem("task7")
    task8.innerHTML = localStorage.getItem("task8")
    task9.innerHTML = localStorage.getItem("task9")

//variable to hold current time
var currentHour = (dayjs().hour());
console.log(currentHour)

//making time blocks change based on past,present,future
//using if and else statement
//put in a function
var checkTheHour = function(){
    if (dayjs().hour() < parseInt($(this).attr("id"))){
        $("#description").addClass("present")
    }
}
