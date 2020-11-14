class Character {
	contructor ()
	{
		this.name = generateRandomName();
		this.charClass = generateClass();
		this.race = generateRace();
		this.backround = generateBackround();
		this.level = generateLevel();
		this.alignment = generateAlingment();
		this.proficiencies = generateProficiencies(this.backround, this.charClass);
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
		let classes = ["Cleric", "Sorcerer", "Barbarian", "Bard", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Warlock", "Wizard"];

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
		let backround = ["Acolyte", "Charlattan", "Criminal", "Entertainer", "Folk Hero", "Gladiator", "Guild Artisan", "Hermit", "Knight", "Noble", "Outlander", "Pirate", "Sage", "Sailor", "Soldier", "Urchin"];

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
	generateProficiencies(backround, charClass)
	{
		let proficiencies = [];

		//based on backround adds a proficiency
		switch(backround)
		{
			case "Acolyte":
				proficiencies.append("Insight");
				proficiencies.append("Religion");
				break;

			case "Charlatan":
				proficiencies.append("Deception");
				proficiencies.append("Sleight of Hand");
				break;

			case "Criminal":
				proficiencies.append("Deception");
				proficiencies.append("Stealth");
				break;

			case "Entertainer":
				proficiencies.append("Acrobatics");
				proficiencies.append("Performance");
				break;

			case "Folk Hero":
				proficiencies.append("Animal Handling");
				proficiencies.append("Survival");
				break;

			case "Gladiator":
				proficiencies.append("Acrobatics");
				proficiencies.append("Performance");
				break;

			case "Guild Artisan":
				proficiencies.append("Insight");
				proficiencies.append("Persuasion");
				break;

			case "Hermit":
				proficiencies.append("Medicine");
				proficiencies.append("Religion");
				break;

			case "Knight":
				proficiencies.append("History");
				proficiencies.append("Persuasion");
				break;

			case "Noble":
				proficiencies.append("History");
				proficiencies.append("Persuasion");
				break;

			case "Outlander":
				proficiencies.append("Athletics");
				proficiencies.append("Survival");
				break;

			case "Pirate":
				proficiencies.append("Athletics");
				proficiencies.append("Perception");
				break;

			case "Sage":
				proficiencies.append("Arcana");
				proficiencies.append("History");
				break;

			case "Sailor":
				proficiencies.append("Athletics");
				proficiencies.append("Perception");
				break;

			case "Soldier":
				proficiencies.append("Athletics");
				proficiencies.append("Intimidation");
				break;

			case "Urchin":
				proficiencies.append("Sleight of Hand");
				proficiencies.append("Stealth");
				break;
		}

		//based on charClass adds a proficiency
		switch(charClass)
		{
			//TODO
		}
	}


}

function generateCharacter(){
	alert("ppo");
	let character = new Character();
	document.getElementById("lstCharName").innerHTML = character.name;
}