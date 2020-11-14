class Character {
	contructor ()
	{
		this.name = generateRandomName();
		this.charClass = generateClass();
		this.race = generateRace();
		this.backround = generateBackround();
		this.level = generateLevel();
		this.alignment = generateAlingment();
	}

	generateRandomName()
	{
		//generates random number
		let firstNames = ["Adam", "Joe", "Noel"];
		let secondNames = ["Poopy", "Smith", "Frau"];
	
		//Takes random index out of both firstNames and secondNames
		let firstRandName = Math.floor(Math.random() * firstNames.length);
		let secondRandName = Math.floor(Math.random() * secondNames.length);
		return (firstRandName+" "+secondRandName);
	}

	generateClass()
	{
		//random class selection
		let classes = ["Cleric", "Sorcerer", "Barber"];

		let randomClass = Math.floor(Math.random() * classes.length);
	}

	generateRace()
	{
		//random race selection
		let races = ["Dragonborn", "Elf", "Dwarf"];

		let randomRace = Math.floor(Math.random() * races.length);
	}

	generateBackround()
	{
		//random backround selection
		//add JSON dictionary
		let backround = ["Acolyte", "Charlattan", "Criminal"];

		let randomBackround = Math.floor(Math.random() * backround.length);
	}

	generateLevel()
	{
		let level = 1;
		return level;
	}

	generateAlingment()
	{
		//will have to based by race
		//will do later
	}
}

function generateCharacter(){
	alert("ppo");
	let character = new Character();
	document.getElementById("lstCharName").innerHTML = character.name;
}