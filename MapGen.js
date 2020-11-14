let mapSize = 50
//let mapArray = Array(mapSize).fill(Array(mapSize).fill(1));
let mapArray = [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]


/*
    KEY

1= GRASS
2= WATER
3= MOUNTAINS
4= PATH
5= BRIDGE
6= HOUSE 
7= TREES

 */

function generateLake(mapArray,radius,topLeft,tileType,variations){
  //mapArray[centre[0]][centre[1]] = tileType;
  for (let variation = 0; variation < variations; variation++){
    for (let i=0; i < radius*2; i++){
      for (let j=0; j < radius*2; j++){
        if (topLeft[0]+i < 0){
          topLeft[0]++;
        }
        if (topLeft[1]+j < 0){
          topLeft[1]++;
        }
        if (topLeft[0]+i > 49){
          topLeft[0]--;
        }
        if (topLeft[1]+j > 49){
          topLeft[1]--;
        }
        if (topLeft[0]+i < 50 && topLeft[1]+j < 50){
          mapArray[(topLeft[0]+i)][(topLeft[1]+j)] = tileType;
        }
      }
    }
    if (topLeft[0]<50){
      mapArray[topLeft[0]][topLeft[1]] = 1
    }
    if (topLeft[0]+radius*2 - 1 < 50){
      mapArray[topLeft[0]+radius*2 - 1][topLeft[1]] = 1
    }
    if (topLeft[1]+radius*2 - 1 < 50){
      mapArray[topLeft[0]][topLeft[1]+radius*2 - 1] = 1
    }
    if (topLeft[0]+radius*2 - 1 < 50 && topLeft[1]+radius*2 - 1 < 50){
      mapArray[topLeft[0]+radius*2 - 1][topLeft[1]+radius*2 - 1] = 1
    }
    topLeft[0] = topLeft[0] + (3+(-(Math.floor(Math.random()*3))));
    topLeft[1] = topLeft[1] + (3+(-(Math.floor(Math.random()*3))));
    radius = radius + (3+(-(Math.floor(Math.random()*3))));

  } 
  return mapArray;
}

function generateMountains(mapArray,radius,topLeft,tileType,variations){
  //mapArray[centre[0]][centre[1]] = tileType;
  for (let variation = 0; variation < variations; variation++){
    for (let i=0; i < radius*2; i++){
      for (let j=0; j < radius*2; j++){
        if (topLeft[0]+i < 0){
          topLeft[0]++
        }
        if (topLeft[1]+j < 0){
          topLeft[1]++
        }
        if (topLeft[0]+i > 49){
          topLeft[0]--
        }
        if (topLeft[1]+j > 49){
          topLeft[1]--
        }
        if (topLeft[0]+i < 50 && topLeft[1]+j < 50 && mapArray[topLeft[0]+i][topLeft[1]+j] == 1){
          mapArray[(topLeft[0]+i)][(topLeft[1]+j)] = tileType;
        }
      }
    }
    if (topLeft[0]<50){
      mapArray[topLeft[0]][topLeft[1]] = 1
    }
    if (topLeft[0]+radius*2 - 1 < 50){
      mapArray[topLeft[0]+radius*2 - 1][topLeft[1]] = 1
    }
    if (topLeft[1]+radius*2 - 1 < 50){
      mapArray[topLeft[0]][topLeft[1]+radius*2 - 1] = 1
    }
    if (topLeft[0]+radius*2 - 1 < 50 && topLeft[1]+radius*2 - 1 < 50){
      mapArray[topLeft[0]+radius*2 - 1][topLeft[1]+radius*2 - 1] = 1
    }
    topLeft[0] = topLeft[0] + (3+(-(Math.floor(Math.random()*3))));
    topLeft[1] = topLeft[1] + (3+(-(Math.floor(Math.random()*3))));
    radius = radius + (3+(-(Math.floor(Math.random()*3))));

  } 
  return mapArray;
}

function generateRiver(mapArray, startPoint, length){
  position = startPoint;
  direction = "East";
  sideways = ["East","West"];
  vertical = ["North","South"]
  turnTimerMax = Math.floor(Math.random()*5)+8;
  turnTimer = 0
  for (let i = 0; i < length; i++){
    if (position[0]<1){
      position[0] = 1;
    }
    if (position[1]<1){
      position[1] = 1;
    }
    if (position[0] > 48){
      position[0] = 48;
    }
    if (position[1] > 48){
      position[1] = 48;
    } 
    if (Math.floor(Math.random()*30) != 1){
      mapArray[position[0]][position[1]] = 2; //Water
    } else {
      mapArray[position[0]][position[1]] = 5; //Bridge
      mapArray = generatePath(mapArray, position, 100)
    }
    if (turnTimer > turnTimerMax){
      if (sideways.includes(direction)){
        direction = vertical[Math.floor(Math.random() * vertical.length)];
      } else {
        direction = sideways[Math.floor(Math.random() * sideways.length)];
      }
    } 
    if ((mapArray[position[0]+1][position[1]]) == 1 && direction == "North"){
      position[0]++;
    } else if (direction == "North"){
      direction = sideways[Math.floor(Math.random() * sideways.length)];
    }
    if ((mapArray[position[0]][position[1]+1]) == 1 && direction == "East"){
      position[1]++;
    } else if (direction == "East"){
      direction = vertical[Math.floor(Math.random() * vertical.length)];
    }
    if ((mapArray[position[0]-1][position[1]]) == 1 && direction == "South"){
      position[0]--;
    } else if (direction == "South"){
      direction = sideways[Math.floor(Math.random() * sideways.length)];
    }
    if ((mapArray[position[0]][position[1]-1]) == 1 && direction == "West"){
      position[1]--;
    } else if (direction == "West"){
      direction = vertical[Math.floor(Math.random() * vertical.length)];
    }
    turnTimer++;
  }
  return mapArray;
}

function generatePath(mapArray, startPoint, length){
  position = startPoint;
  direction = "East";
  sideways = ["East","West"];
  vertical = ["North","South"];
  turnTimerMax = Math.floor(Math.random()*7)+16;
  turnTimer = 0
  for (let i = 0; i < length; i++){
    if (position[0]<1){
      position[0] = 1;
    }
    if (position[1]<1){
      position[1] = 1;
    }
    if (position[0] > 48){
      position[0] = 48;
    }
    if (position[1] > 48){
      position[1] = 48;
    } 
    mapArray[position[0]][position[1]] = 4;
    if (position[0]<49 && Math.floor(Math.random()*30) == 1){
      mapArray[position[0]+1][position[1]] = 6; //Building
    }
    if (turnTimer > turnTimerMax){
      if (sideways.includes(direction)){
        direction = vertical[Math.floor(Math.random() * vertical.length)];
      } else {
        direction = sideways[Math.floor(Math.random() * sideways.length)];
      }
    } 
    if ((mapArray[position[0]+1][position[1]]) != 2 && direction == "North"){
      position[0]++;
    } else if (direction == "North"){
      direction = sideways[Math.floor(Math.random() * sideways.length)];
    }
    if ((mapArray[position[0]][position[1]+1]) != 2 && direction == "East"){
      position[1]++;
    } else if (direction == "East"){
      direction = vertical[Math.floor(Math.random() * vertical.length)];
    }
    if ((mapArray[position[0]-1][position[1]]) != 2 && direction == "South"){
      position[0]--;
    } else if (direction == "South"){
      direction = sideways[Math.floor(Math.random() * sideways.length)];
    }
    if ((mapArray[position[0]][position[1]-1]) != 2 && direction == "West"){
      position[1]--;
    } else if (direction == "West"){
      direction = vertical[Math.floor(Math.random() * vertical.length)];
    }
    turnTimer++;
  }
  mapArray[startPoint[0]][startPoint[1]]=5;
  return mapArray;
}

function genLake(mapArray){
  let baseRadius = Math.floor(Math.random()*(Math.floor(mapArray[0].length/10)))+1;
  let centreLocation = [Math.floor(Math.random()*(mapArray[0].length)),Math.floor(Math.random()*(mapArray[0].length))];
  let numMutations = Math.floor(Math.random()*baseRadius-1) + 2;
  mapArray = generateLake(mapArray, baseRadius, centreLocation, 2,numMutations);
  mapArray = generateRiver(mapArray, [Math.floor(Math.random()*(mapArray[0].length)),Math.floor(Math.random()*(mapArray[0].length))], 100);
  for (let i = 0; i<2; i++){
    mapArray = generateMountains(mapArray, baseRadius, [Math.floor(Math.random()*(mapArray[0].length)),Math.floor(Math.random()*(mapArray[0].length))], 3,numMutations);
  }
  for (let i = 0; i<4; i++){
    mapArray = generateMountains(mapArray, baseRadius-2, [Math.floor(Math.random()*(mapArray[0].length)),Math.floor(Math.random()*(mapArray[0].length))], 7,numMutations);
  }
  for (let i = 0; i < mapArray[0].length; i++){
    if (mapArray[i].length > 50){
      mapArray[i] = mapArray[i].slice(0,50);
    }
    document.write(mapArray[i] + "<br>");
  }
}
genLake(mapArray);