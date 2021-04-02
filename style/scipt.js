//GIVEN I am using a daily planner to create a schedule
//WHEN I scroll down
//WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future
//WHEN I click into a time block
//THEN I can enter an event
//WHEN I click the save button for that time block
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
//THEN the saved events persist

var currentDay = document.querySelector("#currentDay")
//var userInput = document.querySelector(".textarea")

//getting current day
dayjs().format("YYYY-MMMM-DD");
console.log(dayjs());
//displaying current day on header
currentDay.innerHTML = dayjs().format("MMMM-DD-YYYY");

//making time blocks change based on past,present,future
//using if and else statement
//put in a function 
        
$(".time-block").on("click", ".description", function(){
    console.log(this)
    var input = $(this).text()
    .trim()
    var userInput = $("<textarea>")
    .addClass("textarea col-8")
    $(this).replaceWith(userInput);
    userInput.trigger("focus");
})