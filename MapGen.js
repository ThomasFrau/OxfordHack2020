var mapSize = 50
var mapArray = Array(mapSize).fill(Array(mapSize).fill(1));
for (var i = 0; i < mapArray.length; i++){
  document.write(mapArray[i] + "<br>");
}

function genLake(mapArray){
  var baseRadius = Math.foor(Math.random()*(mapArray[0].length/10))
  var centreLocation = [Math.foor(Math.random()*(mapArray[0].length)),Math.foor(Math.random()*(mapArray[0].length))]
}