//constant variable uses const since it will never change or be reassigned
const kelvin = 300; 
//subtracted 273 from the Kelvin variable. 
var celsius = kelvin - 273; 
//created te Farenheight variable with equation provided
var fahrenheit = celsius * (9/5) + 32;
//used the math.floor method on fahrenheit to round down to whole number. 
fahrenheit = Math.floor(fahrenheit)
//created a temperature var and set it equal to Fahrenheit, since that is the unit we are searching for. 
var temperature = fahrenheit; 
//string interpolation using `` and ${} for the temperature var. 
console.log(`The temperature is ${temperature} degrees Fahrenheit.`); 


// extra prcatice
var newton = celsius * (33/100); 
newton = Math.floor(newton); 
console.log(`The temperature is ${newton} in Newtons`); 

console.log(newton);
