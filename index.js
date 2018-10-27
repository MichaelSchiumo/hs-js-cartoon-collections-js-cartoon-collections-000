function dwarfRollCall(call) {
var count = '';
var i = 0
call.forEach(function(dwarf,i) {
count += `${i + 1}. ${dwarf}`;  
count += " "
});
{ return `${count}`
}}



var calls = ["earth","wind","fire","water","heart"]

function summonCaptainPlanet(calls) {
var n = 0;
while (n < calls.length) {
calls[n] = `${calls[n].toUpperCase()}!`;
n++;
} 
return calls
}

function longPlaneteerCalls(planeteerCalls) {
var t = planeteerCalls.length;
if (t < 4) {
return false  
}
else { return true
}
}


function findTheCheese(ingredients) {
var cheeses = ["cheddar","gouda","camembert"];
for(let i = 0; i < ingredients.length; i++) {
if (cheeses.includes(ingredients[i])) {
return ingredients[i]
}
}
return 'no cheese!'
} 

















