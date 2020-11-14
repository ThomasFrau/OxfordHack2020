function generateRandomName()
{
	//generates random number
	let firstNames = ["Adam", "Joe", "Noel"];
	let secondNames = ["Poopy", "Smith", "Frau"];
	
	//Takes random index out of both firstNames and secondNames
	let firstRandName = Math.floor(Math.random() * firstNames.length);
	let secondRandName = Math.floor(Math.random() * secondNames.length);
	
	document.write(firstNames[firstRandName] + secondNames[secondRandName]);
}

function generateClass()
{
	//random class selection
	let classes = ["Cleric", "Sorcerer", "Barber"];

	let randomClass = Math.floor(Math.random() * classes.length);

	document.write(classes[randomClass]);
}

function generateRace()
{
	//random race selection
	let races = ["Dragonborn", "Elf", "Dwarf"];

	let randomRace = Math.floor(Math.random() * races.length);

	document.write(classes[randomRace]);
}

function generateBackround()
{
	//random backround selection
	//add JSON dictionary
	let backround = ["Acolyte", "Charlattan", "Criminal"];

	let randomBackround = Math.floor(Math.random() * backround.length);

	document.write(classes[randomBackround]);
}

function generateLevel()
{
	document.write(1);
}

function generateAlingment()
{
	//will have to based by race
	//will do later
}