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
				return "Armour";
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
		let typesOfTrinkets = ["amulet", "ring", "tooth", "earring", "spoon", "mirror", "cup", "hairbrush", "doorknob", "book", "eye", "deck of cards", "bag of dice", "keychain"];
		let typesOfEffects = ["that turns you invisible", "that makes you go mad", "that turns you into a wolf", "that allows you to hear to demons", "that turns you into a pickle"];

		let randAdj = Math.floor(Math.random() * adjectives.length);
		let randType = Math.floor(Math.random() * typesOfTrinkets.length);
		let randEff = Math.floor(Math.random() * typesOfEffects.length);

		//this can be probably done using concat, stays like for now however
		//i can not be bothered to make this nicer
		finalItem = adjectives[randAdj] + " " + typesOfTrinkets[randType] + " " + typesOfEffects[randEff];
		console.log(finalItem);
		return finalItem;
	}

	makeWeapon()
	{
		
		//attack bonus implement later
		//figure out dictonaries and type it all into it 

		let finalItem = '';

		let typesOfWeapons = ["door", "sword", "axe", "bow", "shovel", "spear", "automatic rifle", "crossbow", "shortsword", "katana", "pike", "dead fish", "briefcase", "sack of doorknobs"]; 
		let typesOfDamage = ["with fire damage", "with blunt damage", "with piercing damage", "with bludgeoning damage", "with cold damage", "with poison damage", "with acid damage", "with psychic damage", "with necrotic damage", "with radiant damage", "with force damage", "with thunder damage", "with lightning damage"];
		
		let randAdj = Math.floor(Math.random() * adjectives.length);
		let randWep = Math.floor(Math.random() * typesOfWeapons.length);
		let randDmg = Math.floor(Math.random() * typesOfDamage.length);

		finalItem = '';
		finalItem = adjectives[randAdj] + " " + typesOfWeapons[randWep] + " " + typesOfDamage[randDmg];
		return finalItem;
		
	}

}

function generateItem()
{
	let item = new Item();

	document.getElementById("Item").innerHTML = item.item + ".";
}