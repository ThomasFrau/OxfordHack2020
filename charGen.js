class Character {
	constructor ()
	{
		this.name = this.generateRandomName();
		this.charClass = this.generateClass();
		this.race = this.generateRace();
		this.background = this.generateBackground();
		this.level = this.generateLevel();
		this.alignment = this.generateAlignment();
		this.proficiencies = this.generateProficiencies(this.background, this.charClass);

		this.str = this.makeAttribution();
		this.dex = this.makeAttribution();
		this.con = this.makeAttribution();
		this.int = this.makeAttribution();
		this.wis = this.makeAttribution();
		this.cha = this.makeAttribution();
		
		this.hitDie = this.getHitDie();
		this.hitDieNum = this.getHitDieNum();
		this.HP = this.getMaxHP();
		this.proficiency = this.getProficieny();
		this.speed = this.getSpeed();
		this.AC = this.getAC();
		
		this.acrobatics = this.makeSkill(this.dex);
        this.animalHandling = this.makeSkill(this.wis);
        this.arcana = this.makeSkill(this.int);
        this.athletics = this.makeSkill(this.str);
        this.deception = this.makeSkill(this.cha);
        this.history = this.makeSkill(this.int);
        this.isight = this.makeSkill(this.wis);
        this.intimidation = this.makeSkill(this.cha);
        this.investigation = this.makeSkill(this.int);
        this.medicine = this.makeSkill(this.wis);
        this.nature = this.makeSkill(this.int);
        this.perception = this.makeSkill(this.wis);
        this.performance = this.makeSkill(this.cha);
        this.persuasion = this.makeSkill(this.cha);
        this.religion = this.makeSkill(this.int);
        this.sleight = this.makeSkill(this.dex);
        this.stealth = this.makeSkill(this.dex);
        this.survival = this.makeSkill(this.wis); 
		
	}
	
	rollDice(die) {
		return Math.floor(Math.random() * die)+1;
	}

	makeAttribution()
	{
		let rolls = [];

		let i;
		for (i = 0; i < 4; i++)
		{
			rolls.push(this.rollDice(6));
		}
		rolls.sort((a,b) => a - b);
		let attribute = 0;
		for (let i = 1; i < 4; i++) {
			attribute += rolls[i];
		}
		return attribute;
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

	makeSkill(attribute)
    {
        if (attribute < 10)
        {
            return parseInt((attribute - 11) / 2);
        }

        else
        {
            return parseInt((attribute - 10) / 2);
        }
    }
	
	getMaxHP() {
		let conatt = 1;
		//when level is one
		let HP = this.hitDie + conatt;
		for (let i = 1; i < this.level; i++){
			HP += this.hitDie
		}
		return HP;
	}
	
	getHitDie() {
		return 8;
	}
	
	getHitDieNum(){
		return 3;
	}
	
	getProficieny(){
		return 2;
	}
	
	getSpeed(){
		return 25;
	}
	
	getAC(){
		return 10;
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
	
	document.getElementById("lstSTR").innerHTML = "Strength: "+character.str;
	document.getElementById("lstDEX").innerHTML = "Dexterity: "+character.dex;
	document.getElementById("lstCON").innerHTML = "Constitution: "+character.con;
	document.getElementById("lstINT").innerHTML = "Intelligence: "+character.int;
	document.getElementById("lstWIS").innerHTML = "Wisdom: "+character.wis;
	document.getElementById("lstCHA").innerHTML = "Charisma: "+character.cha;
}