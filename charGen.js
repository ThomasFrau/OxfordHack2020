class Character {
	constructor ()
	{
		this.name = this.generateRandomName();
		this.charClass = this.generateClass();
		this.race = this.generateRace();
		this.background = this.generatebackground();
		this.level = this.generateLevel();
		this.alignment = this.generateAlignment();
		this.proficiencies = this.generateProficiencies(this.background, this.charClass);
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

	generateBackground()
	{
		//random background selection
		//add JSON dictionary
		let background = ["Acolyte", "Charlattan", "Criminal", "Entertainer", "Folk Hero", "Gladiator", "Guild Artisan", "Hermit", "Knight", "Noble", "Outlander", "Pirate", "Sage", "Sailor", "Soldier", "Urchin"];

		let randomBackground = Math.floor(Math.random() * background.length);
		return background[randomBackground];
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
	generateProficiencies(background, charClass)
	{
		let proficiencies = [];

		//based on background adds a proficiency
		switch(background)
		{
			case "Acolyte":
				proficiencies.push("Insight");
				proficiencies.push("Religion");
				break;

			case "Charlatan":
				proficiencies.push("Deception");
				proficiencies.push("Sleight of Hand");
				break;

			case "Criminal":
				proficiencies.push("Deception");
				proficiencies.push("Stealth");
				break;

			case "Entertainer":
				proficiencies.push("Acrobatics");
				proficiencies.push("Performance");
				break;

			case "Folk Hero":
				proficiencies.push("Animal Handling");
				proficiencies.push("Survival");
				break;

			case "Gladiator":
				proficiencies.push("Acrobatics");
				proficiencies.push("Performance");
				break;

			case "Guild Artisan":
				proficiencies.push("Insight");
				proficiencies.push("Persuasion");
				break;

			case "Hermit":
				proficiencies.push("Medicine");
				proficiencies.push("Religion");
				break;

			case "Knight":
				proficiencies.push("History");
				proficiencies.push("Persuasion");
				break;

			case "Noble":
				proficiencies.push("History");
				proficiencies.push("Persuasion");
				break;

			case "Outlander":
				proficiencies.push("Athletics");
				proficiencies.push("Survival");
				break;

			case "Pirate":
				proficiencies.push("Athletics");
				proficiencies.push("Perception");
				break;

			case "Sage":
				proficiencies.push("Arcana");
				proficiencies.push("History");
				break;

			case "Sailor":
				proficiencies.push("Athletics");
				proficiencies.push("Perception");
				break;

			case "Soldier":
				proficiencies.push("Athletics");
				proficiencies.push("Intimidation");
				break;

			case "Urchin":
				proficiencies.push("Sleight of Hand");
				proficiencies.push("Stealth");
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