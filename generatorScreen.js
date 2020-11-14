//Displays the tilemap on the generatorScreen canvas

const canvas = document.getElementById("generatorScreen");
const context = canvas.getContext("2d");

let temp = new Image()

temp.src = "Assets/tileSet/SP-Land.png";

function TestFunction()
{
	context.drawImage(temp, 0, 0);
	
}

