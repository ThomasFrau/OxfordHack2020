function generateRandomName()
{
	let firstNames = ["Adam", "Joe", "Noel"];
	let secondNames = ["Poopy", "Smith", "Frau"];
	
	//Takes random index out of both firstNames and secondNames
	//.length() is not a thing
	let firstRandName = Math.floor(Math.random() * firstNames.length);
	let secondRandName = Math.floor(Math.random() * secondNames.length);
	
	document.write(firstNames[firstRandName] + secondNames[secondRandName]);
}

function generateClass()
{

}

function generateRace()
{

}

function generateBackround()
{

}