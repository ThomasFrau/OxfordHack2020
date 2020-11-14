let firstNames = ["Adam", "Joe", "Noel"];
let secondNames = ["Poopy", "Smith", "Frau"];


function generateRandomName()
{
	//Takes random index out of both firstNames and secondNames
	let firstRandName = Math.floor(Math.random() * firstNames.length());
	let secondRandName = Math.floor(Math.random() * secondNames.length());
	
	document.write(firstNames[firstRandName] + secondNames[secondRandName]);
}	