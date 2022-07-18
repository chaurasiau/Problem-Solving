/* Asking the user to enter a year and then it is checking if the year is less than 2015, greater than
2015, or equal to 2015. */
let year = prompt("Enter the year",'');

if (year < 2015){
    alert("Not yet");
} else if (year > 2015){
    alert("In the future");
} else {
    alert("The year is 2015");
}