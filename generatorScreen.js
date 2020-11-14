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
    for (let y = 0; y < mapArray.length; y++)
    {
        for (let x = 0; x < mapArray.length; x++)
        {
            context.drawImage(tiles, 16 * CalculateTile(x, y), 0, 16, 16, 16 * x, 16 * y, 16, 16);
        }
    }
}

function CalculateTile(x,y)
{
    let surroundingArray = [
        [mapArray[x - 1][y - 1], mapArray[x][y - 1], mapArray[x + 1][y - 1]]
        [mapArray[x - 1][y], mapArray[x][y], mapArray[x + 1][y]]
        [mapArray[x - 1][y + 1], mapArray[x][y + 1], mapArray[x + 1][y + 1]]
        ]

    switch (surroundingArray)
    {
        case [
            [1, 1, 1]
            [1, 1, 1]
            [1, 1, 1]
        ]:
            return 1;
        default:
            return 0;
    }

    /*switch (mapArray[x][y])
    {
        case 1:
            return 1;
        case 2:
            return 2;
        case 3:
            return 0;      
        case 4: //path
            if (mapArray[x][y - 1] == 4 || mapArray[x][y - 1] == 5) {
                return 54;
            }
            else{
                return 53;
            }
        case 5:
            return 94;
        case 6:
            return 3;
        case 7:
            return 12;
    }*/
}