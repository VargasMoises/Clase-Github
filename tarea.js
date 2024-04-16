// exercise 1
const base = Number(prompt("write the length of the base of your square"));
const height = Number(prompt("write the length of the height of your square"));

if (base === height){
    document.write("It's a square");
}else if(base > height){
    document.write("Horizontal rectangle");
}else{
    document.write("Vertical rectangle");
};

// exercise 2
const numberA = Number(prompt("enter your first number"));
const numberB = Number(prompt("enter your second number"));
const operator = prompt("enter the operation you want to execute");
const operatorLower = operator.toLowerCase();

if (operatorLower === "suma"){
    document.write(numberA + " + " + numberB + " = " + numberA+numberB);
}else if (operatorLower === "resta"){
    document.write(numberA + " - " + numberB + " = " + numberA-numberB);
}else if (operatorLower === "multiplicacion"){
    document.write(numberA + " * " + numberB + " = " + numberA*numberB);
}else if(operatorLower === "division"){
    document.write(numberA + " / " + numberB + " = " + numberA/numberB);
}else{
    document.write(alert("Only addition, subtraction, multiplication, and division operations are performed."));
};

// exercise 3
const firstNumber = Number(prompt("enter your first number"));
const secondNumber = Number(prompt("enter your second number"));

if (firstNumber < secondNumber){
    document.write("the smallest number is: " + firstNumber);
}else if (firstNumber > secondNumber){
    document.write("the smallest number is: " + secondNumber);
}else{
    document.write("there is no smaller number.");
};

