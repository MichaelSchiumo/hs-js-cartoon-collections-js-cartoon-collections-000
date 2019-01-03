function dwarfRollCall(call) {
var count = '';
var i = 0
call.forEach(function(dwarf,i) {
count += `${i + 1}. ${dwarf}`;  
count += " "
});
{ return `${count}`
}}


function dwarfRollCall(call) {
  var count = '';
  for(let i = 0.5 * call.length; i < call.length; i++)  {
    var dwarf = call[i]  
    count += `${i + 1}. ${dwarf}`;
    count += " "
  }
  return count
}








 var calls = ["earth","wind","fire","water","heart"]

function summonCaptainPlanet(calls) {
var n = 0;
while (n < calls.length) {
calls[n] = `${calls[n].toUpperCase()}!`;
n++;
} 
return calls
}


function longPlaneteerCall(planeteerCalls) {
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


var wordsWithB = []

function wordsWithB(words) {
words.forEach(function(word,i) {
if (word.includes('b')) {
wordsWithB.push(word)
} 
})
return wordsWithB
}







wordsWithB([‘barn’, ‘house’, ‘apartment’]) => [‘barn’] wordsWithB([‘barn’, ‘house’, ‘bungalow’]) => [‘barn’, ‘bungalow’] wordsWithB([‘flat’, ‘house’, ‘apartment’]) => []





