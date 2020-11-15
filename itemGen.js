var adjectives = ["Seductive", "Dank", "Golden", "Silver", "Small", "Big", "Tiny", "Gigantic", "Heavy", "Light", "Diamond", "Wooden", "Expensive", "Cheap", "Dirty", "Used", "Brand-new", "Broken", "Exotic", "Powerful", "Burning", "Wireless", "Invisible", "Cringey", "Clean", "Creepy", "Useless", "German-made"];


class Item
{
	constructor()
	{
		this.item = this.createItem();
	}

	//all of the possible adjectives for each item besides food (maybe for food as well)

	createItem()
	{
		let typeOfItem = ["Trinket", "Weapon", "Armour", "Food"];
		let itemTomake = Math.floor(Math.random() * typeOfItem.length);

		switch(typeOfItem[itemTomake])
		{
			case "Trinket":
				return this.makeTrinket();
				break;

			case "Weapon":
				return this.makeWeapon();
				break;

			case "Armour":
				return this.makeArmour();
				break;

			case "Food":
				return "Food";
				break;
		}
	}

	makeTrinket()
	{

		//add more typesOfEffects, needs more funny ones
		//takes random positions from typesOfTrinkets and typesOfEffects and concats them into one string
		let finalItem = '';
		let typesOfTrinkets = ["dreamcatcher", "rubber duck", "cigarettes", "amulet", "ring", "tooth", "earring", "spoon", "mirror", "cup", "hairbrush", "doorknob", "book", "eye", "deck of cards", "bag of dice", "keychain"];
		let typesOfEffects = ["turns you invisible", "makes you go mad", "turns you into a wolf", "allows you to hear to demons", "turns you into a pickle", "makes you really hungry all the time", "you can't take off", "makes you forget", "allows the demons to speak back"];

		let randAdj = Math.floor(Math.random() * adjectives.length);
		let randType = Math.floor(Math.random() * typesOfTrinkets.length);
		let randEff = Math.floor(Math.random() * typesOfEffects.length);

		//this can be probably done using concat, stays like for now however
		//i can not be bothered to make this nicer
		finalItem = adjectives[randAdj] + " " + typesOfTrinkets[randType] + " that " + typesOfEffects[randEff];
		console.log(finalItem);
		return finalItem;
	}

	makeWeapon()
	{
		
		//attack bonus implement later
		//figure out dictonaries and type it all into it 

		let finalItem = '';

		let typesOfWeapons = ["hidden blade", "chainsword", "whip", "dagger", "flail", "door", "sword", "axe", "bow", "shovel", "spear", "automatic rifle", "crossbow", "shortsword", "katana", "pike", "dead fish", "briefcase", "sack of doorknobs", "staff"]; 
		let typesOfDamage = ["with fire damage", "with blunt damage", "with piercing damage", "with bludgeoning damage", "with cold damage", "with poison damage", "with acid damage", "with psychic damage", "with necrotic damage", "with radiant damage", "with force damage", "with thunder damage", "with lightning damage"];
		
		let randAdj = Math.floor(Math.random() * adjectives.length);
		let randWep = Math.floor(Math.random() * typesOfWeapons.length);
		let randDmg = Math.floor(Math.random() * typesOfDamage.length);

		finalItem = adjectives[randAdj] + " " + typesOfWeapons[randWep] + " " + typesOfDamage[randDmg];
		return finalItem;	
	}

	makeArmour()
	{
		let finalItem = '';

		let typesOfArmour = ["splint", "half plate", "hide", "hood", "clogs", "underwear", "shirt", "t-shirt", "trousers", "breastplate", "sliders", "boots", "helmet", "tin-foil hat", "gloves", "gauntlets", "greaves", "sunglasses", "cloak", "veil", "robe", "chainveil armour"];
		let typesOfProtection = ["with protection from germans", "with protection from goblins", "with protection from zombies", "with protection from fire", "with protection from ice", "with protection from dragons", "with protection from monkeys", "with protection from devils", "with protection from demons"];

		let randAdj = Math.floor(Math.random() * adjectives.length);
		let randArmour = Math.floor(Math.random() * typesOfArmour.length);
		let randPro = Math.floor(Math.random() * typesOfProtection.length);

		finalItem = adjectives[randAdj] + " " + typesOfArmour[randArmour] + " " + typesOfProtection[randPro];

		return finalItem;
	}

	makeFood()
	{
		let foodAdjectives = ["Poisoned", "Chewy", "Burnt", "Acidic", "Scrumptious", "Sour", "Greasy", "Moldy", "Stale", "Suspiciously gray", "Fresh", "Wet", "Dry", "Crunchy", "Rotten", "Stale", "Garlic", "Salty", "Sweet", "Cheesy", "Kosher", "Halal", "Deep-fried", "Plain", "Succulent", "Tangy", "Crommulent", "Appetising", "Embiggening"];
		let foods = ["bread", "pizza", "soup", "baguette", "steak", "kebab", "rice", "cake", "eggs", "ham", ""];
	}
}

function generateItem()
{
	let item = new Item();

	document.getElementById("Item").innerHTML = item.item + ".";
}