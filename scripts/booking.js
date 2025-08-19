/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
const costPerFullDay = 35;
const costPerHalfDay = 20;
let dailyRate = costPerFullDay;
let dayCounter = 0;
let totalCost = 0;

const daysOfWeek = document.querySelectorAll(".day-selector li");
const dayButtons = document.querySelectorAll(".day-selector li");
const calculatedCostElement = document.querySelector("#calculated-cost");



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

dayButtons.forEach(function(dayButton) {
    dayButton.addEventListener("click", function(event) {
        if (!event.target.classList.contains("clicked")) {
            event.target.classList.add("clicked");
            dayCounter++;
        }
        recalculateTotalCost();
    });
});





/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

document.querySelector("#clear-button").addEventListener("click", function() {
    daysOfWeek.forEach(function(day) {
        day.classList.remove("clicked");
    });
    dayCounter = 0;
    totalCost = 0;
    calculatedCostElement.textContent = 0;
});






/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
document.querySelector("#half").addEventListener("click", function() {
    dailyRate = costPerHalfDay;
    document.querySelector("#half").classList.add("clicked");
    document.querySelector("#full").classList.remove("clicked");
    recalculateTotalCost();
});




// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
document.querySelector("#full").addEventListener("click", function() {
    dailyRate = costPerFullDay;
    document.querySelector("#half").classList.remove("clicked");
    document.querySelector("#full").classList.add("clicked");
    recalculateTotalCost();
});





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function recalculateTotalCost() {
    totalCost = dailyRate * dayCounter;
    calculatedCostElement.textContent = totalCost;
}

