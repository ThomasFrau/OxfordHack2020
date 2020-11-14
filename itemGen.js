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
				return "Weapon";
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

		//just doesnt work for some reason
		let finalItem = '';
		let typesOfTrinkets = ["Amulet", "Ring", "Tooth", "Earring", "Spoon", "Mirror", "Cup", "Hairbrush", "Doorknob", "Book"];
		let typesOfEffects = ["that turns you invisible", "that makes you go mad", "that turns you into a wolf", "that allows you to hear to demons", "that turns you into a pickle"];

		let randAdj = Math.floor(Math.random() * adjectives.length);
		let randType = Math.floor(Math.random() * typesOfTrinkets.length);
		let randEff = Math.floor(Math.random() * typesOfEffects);


		finalItem = finalItem + " " + adjectives[randAdj];

		return finalItem;
	}

}

function generateItem()
{
	let item = new Item();

	document.getElementById("Item").innerHTML = item.item;
}