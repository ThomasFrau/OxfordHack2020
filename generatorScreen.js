//Displays the tilemap on the generatorScreen canvas

const canvas = document.getElementById("generatorScreen");
const context = canvas.getContext("2d");

let tiles = new Image();

tiles.src = "Assets/tileSet/tileset.png";


function TestFunction()
{
    context.drawImage(tiles, 0, 0);
}

function DisplayMap()
{
    for (let i = 0; i < mapArray.length; i++)
    {
        for (let j = 0; j < mapArray.length; j++)
        {
            context.drawImage(tiles, 16 * i, 0, 16, 16, 16 * i, 16 * j, 16, 16);
        }
    }
}

