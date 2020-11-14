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
            context.drawImage(tiles, 16 * CalculateTile(mapArray[i][j]), 0, 16, 16, 16 * i, 16 * j, 16, 16);
        }
    }
}

function CalculateTile(i)
{
    if (i == 1) {
        return 1;
    }
    else if (i == 2) {
        return 2;
    }
    else if (i == 3) {
        return 0;
    }
    else if (i == 4) {
        return 83;
    }
    else if (i == 5) {
        return 94;
    }
    else if (i == 6) {
        return 3;
    }
    else if (i == 7) {
        return 12;
    }
}

