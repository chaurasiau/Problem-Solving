/* Asking the user to enter their age and then it is checking if the age is greater than 18. If it is,
it will return true, if not, it will return false. */
let isAllowed;

let age = prompt('Enter your age','');

if (age > 18){
    isAllowed = true;
}else{
    isAllowed = false;
}

alert(isAllowed)