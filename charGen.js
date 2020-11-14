class Character {
	constructor ()
	{
		this.name = this.generateRandomName();
		this.charClass = this.generateClass();
		this.race = this.generateRace();
		this.backround = this.generateBackround();
		this.level = this.generateLevel();
		this.alignment = this.generateAlignment();
		this.proficiencies = this.generateProficiencies(this.backround, this.charClass);
	}

	generateRandomName()
	{
		//generates random number
		let firstNames = ["Adam", "Joe", "Noel"];
		let secondNames = ["Poopy", "Smith", "Frau"];
	
		//Takes random index out of both firstNames and secondNames
		let firstRandName = Math.floor(Math.random() * firstNames.length);
		let secondRandName = Math.floor(Math.random() * secondNames.length);
		return (firstNames[firstRandName] + " " + secondNames[secondRandName]);
	}

	generateClass()
	{
		//random class selection
		let classes = ["Cleric", "Sorcerer", "Barbarian", "Bard", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Warlock", "Wizard"];

		let randomClass = Math.floor(Math.random() * classes.length);
		return classes[randomClass];
	}

	generateRace()
	{
		//random race selection
		let races = ["Dragonborn", "Elf", "Dwarf", "Gnome", "Half-Elf", "Halfling", "Half-Orc", "Human", "Triefling"];

		let randomRace = Math.floor(Math.random() * races.length);
		return races[randomRace];
	}

	generateBackround()
	{
		//random backround selection
		//add JSON dictionary
		let backround = ["Acolyte", "Charlattan", "Criminal", "Entertainer", "Folk Hero", "Gladiator", "Guild Artisan", "Hermit", "Knight", "Noble", "Outlander", "Pirate", "Sage", "Sailor", "Soldier", "Urchin"];

		let randomBackround = Math.floor(Math.random() * backround.length);
		return backround[randomBackround];
	}

	generateLevel()
	{
		let level = 1;
		return level;
	}

	generateAlignment()
	{
		//will have to based by race
		//will do later

		let alignments = ["Lawful Good", "Neutral Good", "Neutral", "Chaotic Good", "Lawful Neutral", "Chaotic Neutral", "Lawful Evil", "Neutral Evil", "Chaotic Evil"];
		let randomAlignment = Math.floor(Math.random() * alignments.length);

		return alignments[randomAlignment];

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

		//Clear duplicates
		return proficiencies;
	}
}

function generateCharacter(){
	let character = new Character();
	document.getElementById("lstCharName").innerHTML = "Name: "+character.name;
	document.getElementById("lstRace").innerHTML = "Race: "+character.race;
	document.getElementById("lstClass").innerHTML = "Class: "+character.charClass;
	document.getElementById("lstLevel").innerHTML = "Level: "+character.level;
	document.getElementById("lstBackground").innerHTML = "Background: "+character.background;
	document.getElementById("lstAlignment").innerHTML = "Alignment: "+character.alignment;
}