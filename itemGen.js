class Item
{
	constructor()
	{
		this.item = this.createItem();
	}

	createItem()
	{
		let typeOfItem = ["Trinket", "Weapon", "Armour", "Food"];
		let itemTomake = Math.floor(Math.random() * typeOfItem.length);

		switch(typeOfItem[itemTomake])
		{
			case "Trinket":
				return "Trinket";
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
}

function generateItem()
{
	let item = new Item();

	document.getElementById("Item").innerHTML = item.item;
}