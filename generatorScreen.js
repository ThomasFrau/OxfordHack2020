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
    let v = [
        GetTerrainType(x - 1, y - 1), GetTerrainType(x, y - 1), GetTerrainType(x + 1, y - 1),
        GetTerrainType(x - 1, y), GetTerrainType(x, y), GetTerrainType(x + 1, y),
        GetTerrainType(x - 1, y + 1), GetTerrainType(x, y + 1), GetTerrainType(x + 1, y + 1)];

    //v:
    //0  1  2
    //3  4  5
    //6  7  8


    switch (v[4])
    {
        case 1:
            return 1;
        case 2:
            return 2;
        case 3:
            return 0;      
        case 4:         //paths
            //v[0] != 4 && v[1] != 4 && v[2] != 4 && v[3] == 4 && v[5] == 4 && v[6] != 4 && v[7] != 4 && v[8] != 4
<<<<<<< Updated upstream

            if (v[1] == 4 || v[1] == 5) {
                if (v[7] == 4 || v[7] == 5) {
                    if (v[3] == 4 || v[3] == 5) {
                        if (v[5] == 4 || v[5] == 5) {
                            //Corners
                            if (v[0] == 4) {
                                if (v[2] == 4) {
                                    if (v[6] == 4) {
                                        if (v[8] == 4) {
                                            return 60;
                                        } else {
                                            return 78;
                                        }
                                    } else {
                                        if (v[8] == 4) {
                                            return 79;
                                        } else {
                                            return 74;
                                        }
                                    }
                                } else {
                                    if (v[6] == 4) {
                                        if (v[8] == 4) {
                                            return 80;
                                        } else {
                                            return 76;
                                        }
                                    } else {
                                        if (v[8] == 4) {
                                            return 88;
                                        } else {
                                            return 83;
                                        }
                                    }
                                }
                            } else {
                                if (v[2] == 4) {
                                    if (v[6] == 4) {
                                        if (v[8] == 4) {
                                            return 81;
                                        } else {
                                            return 87;
                                        }
                                    } else {
                                        if (v[8] == 4) {
                                            return 77;
                                        } else {
                                            return 84;
                                        }
                                    }
                                } else {
                                    if (v[6] == 4) {
                                        if (v[8] == 4) {
                                            return 75;
                                        } else {
                                            return 85;
                                        }
                                    } else {
                                        if (v[8] == 4) {
                                            return 86;
                                        } else {
                                            return 69;
                                        }
                                    }
                                }
                            }

                        } else {
                            if (v[0] != 4 && v[6] != 4) {
                                return 70;
                            } else {
                                return 61;
                            }                            
                        }
                    } else {
                        if (v[5] == 4 || v[5] == 5) {
                            if (v[2] != 4 && v[8] != 4) {
                                return 68;
                            } else {
                                return 59;
                            }                            
                        } else {
                            return 54;                       
                        }
                    }
                } else {
                    if (v[3] == 4 || v[3] == 5) {
                        if (v[5] == 4 || v[5] == 5) {
                            if (v[0] != 4 && v[2] != 4) {
                                return 72;
                            } else {
                                return 63;
                            }                            
                        } else {
                            if (v[0] != 4) {
                                return 73;
                            } else {
                                return 64;
                            }                            
                        }
                    } else {
                        if (v[5] == 4 || v[5] == 5) {
                            if (v[2] != 4) {
                                return 71;
                            } else {
                                return 62;
                            }                            
                        } else {
                            return 55;
                        }
                    }
                }
            } else {
                if (v[7] == 4 || v[7] == 5) {
                    if (v[3] == 4 || v[3] == 5) {
                        if (v[5] == 4 || v[5] == 5) {
                            if (v[6] != 4 && v[8] != 4) {
                                return 66;
                            } else {
                                return 57;
                            }                            
                        } else {
                            if (v[6] != 4) {
                                return 67;
                            } else {
                                return 58;
                            }                            
                        }
                    } else {
                        if (v[5] == 4 || v[5] == 5) {
                            if (v[8] != 4) {
                                return 65;
                            } else {
                                return 56;
                            }                            
                        } else {
                            return 53;
                        }
                    }
                } else {
                    if (v[3] == 4 || v[3] == 5) {
                        if (v[5] == 4 || v[5] == 5) {
                            return 51;
                        } else {
                            return 52;
                        }
                    } else {
                        if (v[5] == 4 || v[5] == 5) {
                            return 50;
                        } else {
                            return 89;
                        }
                    }
                }
            }     
=======

            if (v[1] == 4 || v[1] == 5) {
                if (v[7] == 4 || v[7] == 5) {
                    if (v[3] == 4 || v[3] == 5) {
                        if (v[5] == 4 || v[5] == 5) {
                            return 60;
                        } else {
                            return 61;
                        }
                    } else {
                        if (v[5] == 4 || v[5] == 5) {
                            return 59;
                        } else {
                            return 54;
                        }
                    }
                } else {
                    if (v[3] == 4 || v[3] == 5) {
                        if (v[5] == 4 || v[5] == 5) {
                            return 63;
                        } else {
                            return 64;
                        }
                    } else {
                        if (v[5] == 4 || v[5] == 5) {
                            return 62;
                        } else {
                            return 55;
                        }
                    }
                }
            } else {
                if (v[7] == 4 || v[7] == 5) {
                    if (v[3] == 4 || v[3] == 5) {
                        if (v[5] == 4 || v[5] == 5) {
                            return 57;
                        } else {
                            return 58;
                        }
                    } else {
                        if (v[5] == 4 || v[5] == 5) {
                            return 56;
                        } else {
                            return 53;
                        }
                    }
                } else {
                    if (v[3] == 4 || v[3] == 5) {
                        if (v[5] == 4 || v[5] == 5) {
                            return 51;
                        } else {
                            return 52;
                        }
                    } else {
                        if (v[5] == 4 || v[5] == 5) {
                            return 50;
                        } else {
                            return 83;
                        }
                    }
                }
            }




            /*if (v[1] != 4 && v[3] != 4 && v[5] == 4 && v[7] != 4) {
                return 50;
            } else if (v[1] != 4 && v[3] == 4 && v[5] == 4 && v[7] != 4) {
                return 51;
            } else if (v[1] != 4 && v[3] == 4 && v[5] != 4 && v[7] != 4) {
                return 52;
            } else if (v[1] != 4 && v[3] != 4 && v[5] != 4 && v[7] == 4) {
                return 53;
            } else if (v[1] == 4 && v[3] != 4 && v[5] != 4 && v[7] == 4) {
                return 54;
            } else if (v[1] == 4 && v[3] != 4 && v[5] != 4 && v[7] != 4) {
                return 55;
            } else if (v[1] != 4 && v[3] != 4 && v[5] == 4 && v[7] == 4) {
                return 56;
            } else if (v[1] != 4 && v[3] == 4 && v[5] == 4 && v[7] == 4) {
                return 57;
            } else if (v[1] != 4 && v[3] == 4 && v[5] != 4 && v[7] == 4) {
                return 58;
            } else if (v[1] == 4 && v[3] != 4 && v[5] == 4 && v[7] == 4) {
                return 59;
            } else if (v[1] == 4 && v[3] == 4 && v[5] == 4 && v[7] == 4) {
                return 60;
            } else if (v[1] == 4 && v[3] == 4 && v[5] != 4 && v[7] == 4) {
                return 61;
            } else if (v[1] == 4 && v[3] != 4 && v[5] == 4 && v[7] != 4) {
                return 62;
            } else if (v[1] == 4 && v[3] == 4 && v[5] == 4 && v[7] != 4) {
                return 63;
            } else if (v[1] == 4 && v[3] == 4 && v[5] != 4 && v[7] != 4) {
                return 64;
            }

            else {
                return 83;
            }*/
>>>>>>> Stashed changes
        case 5:
            return 100;
        case 6:
            return 3;
        case 7:
            return 12;
    }
}

//This is nasty
function GetTerrainType(x, y)
{
    let output = 2;
    try {
        output = mapArray[x][y];
    } catch(err){
        output = 2;
    }
    if (output == undefined) {
        output = 2;
    }
    return output;
}

function Surroundings(x, y)
{
    return 
}