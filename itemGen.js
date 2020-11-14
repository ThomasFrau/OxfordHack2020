class Item
{
	constructor()
	{
		this.item = this.createItem();
	}

	createItem()
	{
		let typeOfItem = ["Trinket", "Weapon", "Armour", "Food"];
		return "Sex Toy"
	}
}

function generateItem()
{
	let item = new Item();

	document.getElementById("Item").innerHTML = item.item;
}