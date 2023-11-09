
// Code your template literal and console.log statements:
// Code your selectRandomEntry function here:
function selectRandomEntry (idNumbers){
  let randomIndex = Math.floor(Math.random() * idNumbers.length);
  return idNumbers[randomIndex];
}
// Code your buildCrewArray function here:
function buildCrewArray (astronauts, animals) {
let crewArray = [];
//2 arrays need to hold random id# and candidate obj
//use one + loops to check which animals hold selected id
for (let i=0; i<astronauts.length ;i++){
for (let j=0; j<animals.length; j++){
  if (astronauts[i] === animals[j].astronautID){
    crewArray.push(animals[j].name)
  }
}
}
//ittirate through astronaut array & animal array within loop
//if current index of animal array = astronautID property that is the same as the current index of animal array
//push to array and return
return crewArray
}
let idNumbers = [291, 414, 503, 599, 796, 890];
let astronauts = []
while (astronauts.length < 3) {
let selectedAstronaut = selectRandomEntry(idNumbers);
if (!astronauts.includes(selectedAstronaut)) {
astronauts.push(selectedAstronaut)
}
}
console.log("The selected Astronauts are " + astronauts);
// console.log(buildCrewArray(idNumbers))
// Here are the candidates and the 'animals' array:
let candidateA = {
'name':'Gordon Shumway',
'species':'alf',
'mass':90,
'o2Used':function(hrs){return 0.035*hrs},
'astronautID':414
};
let candidateB = {
'name':'Lassie',
'species':'dog',
'mass':19.1,
'o2Used':function(hrs){return 0.030*hrs},
'astronautID':503
};
let candidateC = {
'name':'Jonsey',
'species':'cat',
'mass':3.6,
'o2Used':function(hrs){return 0.022*hrs},
'astronautID':796
};
let candidateD = {
'name':'Paddington',
'species':'bear',
'mass':31.8,
'o2Used':function(hrs){return 0.047*hrs},
'astronautID':291
};
let candidateE = {
'name':'Pete',
'species':'tortoise',
'mass':417,
'o2Used':function(hrs){return 0.010*hrs},
'astronautID':599
};
let candidateF = {
'name':'Hugs',
'species':'ball python',
'mass':2.3,
'o2Used':function(hrs){return 0.018*hrs},
'astronautID':890
};
let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
// Code your template literal and console.log statements;
// selectRandomEntry()



console.log(`${buildCrewArray(astronauts, animals)[0,1,2]}, ${buildCrewArray(astronauts, animals)[1]}, and ${buildCrewArray(astronauts, animals)[2]} are going to space!`)

React

Reply










