////////////////////// ROVER

var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []  
}


//////////////////////// VARIAS

// aviso de la posición actual del rover
function positionLog () {
  console.log("Rover position is [" + rover.x + ", " + rover.y + "]");
};
// aviso cuando se va a salir del cuadrante
function errorLog () {
  console.log("Error, no puedes avanzar fuera del cuadrante");
};
// aviso cuando hay un obstáculo en el camino
function errorObstacleLog() {
  console.log("Lo siento, no puedes avanzar sobre ese terreno");
};
// aviso de dirección
function north() {
  console.log("Rover is now facing North");
};
function east() {
  console.log("Rover is now facing East");
};
function west() {
  console.log("Rover is now facing West");
};
function south() {
  console.log("Rover is now facing South");
};
// crear número aleatorio del 0 al 9
function randomNumber() {
  return Math.floor(Math.random() * 10);
};
// crear dirección aleatoria
function randomDirection () {
  var directionNumber = Math.floor(Math.random() * 4);
  if (directionNumber === 0) {
    rover.direction = "N";
  } else if (directionNumber === 1) {
    rover.direction = "E";
  } else if (directionNumber === 2) {
    rover.direction = "S";
  } else if (directionNumber === 3) {
    rover.direction = "W";
  }
  return rover.direction;
};
// añadir al travel log
function pushTravelLog() {
  rover.travelLog.push([rover.x, rover.y]);
};


//////////////////////// START

// posicionar al rover aleatoriamente 
function placeRover () {
 rover.x = randomNumber();
 rover.y = randomNumber();
 rover.direction = randomDirection ();
 rover.travelLog = [];
 console.log(rover);
};
// posicionar los obstáculos que se quieran aleatoriamente
var obstaclesX = [];
var obstaclesY = [];
function placeObstacles(number) {
  for (var i = 0; i < number; i++) {
    obstaclesX.push(randomNumber(i));
    obstaclesY.push(randomNumber(i));
    console.log("Obstacles placed: [" + obstaclesX[i] + "," + obstaclesY[i] + "]");
    
  }
};


////////////////////// MOVEMENT 

// giro a la izquierda
function turnLeft(rover) {
  console.log("turnLeft was called!");
  if (rover.direction === "N") {
    rover.direction = "W";
    west();
  } else if (rover.direction === "W") {
    rover.direction = "S";
    south();
  } else if (rover.direction === "S") {
    rover.direction = "E";
    east();
  } else if (rover.direction === "E") {
    rover.direction = "N";
    north();
  }
};
// giro a la derecha
function turnRight(rover) {
  console.log("turnRight was called!");
  if (rover.direction === "N") {
    rover.direction = "E";
    east();
  } else if (rover.direction === "E") {
    rover.direction = "S";
    south();
  } else if (rover.direction === "S") {
    rover.direction = "W";
    west();
  } else if (rover.direction === "W") {
    rover.direction = "N";
    north();
  }
};
// avanzar
function moveForward(rover) {
  console.log("moveForward was called")
  var obstacle = false;
    if (rover.direction === "N") {
      for (var i = 0; i < obstaclesX.length; i++) {
        if (rover.x === obstaclesX[i] && rover.y -1 === obstaclesY[i]) {
          obstacle = true;
          errorObstacleLog();
        }
      } 
      if (rover.y === 0) {
        errorLog();
      } else if (obstacle === false) {
        rover.y = rover.y - 1; 
        positionLog();
        pushTravelLog();
      } 
    } else if (rover.direction === "S") {
      for (var i = 0; i < obstaclesX.length; i++) {
        if (rover.x === obstaclesX[i] && rover.y + 1 === obstaclesY[i]) {
          obstacle = true;
          errorObstacleLog();
        }
      }
      if (rover.y === 9) {
        errorLog();
      } else if (obstacle === false) {
        rover.y = rover.y + 1;
        positionLog();
        pushTravelLog();
      }    
    } else if (rover.direction === "E") {
      for (var i = 0; i < obstaclesX.length; i++) {
        if (rover.x + 1 === obstaclesX[i] && rover.y === obstaclesY[i]) {
          obstacle = true;
          errorObstacleLog();
        }
      }
      if (rover.x === 9) {
        errorLog();
      } else if (obstacle === false) {
        rover.x = rover.x + 1;
        positionLog();
        pushTravelLog();
      }
    } else if (rover.direction === "W") {
      for (var i = 0; i < obstaclesX.length; i++) {
        if (rover.x - 1 === obstaclesX[i] && rover.y === obstacleY[i]) {
          obstacle = true;
          errorObstacleLog();
        }
      }
      if (rover.x === 0) {
        errorLog();
      } else if (obstacle === false) {
        rover.x = rover.x - 1;
        positionLog();
        pushTravelLog();
      }
    }
};
// retroceder
function moveBackwards(rover) {
  console.log("moveBackwards was called")
  var obstacle = false;
  if (rover.direction === "N") {
    for (var i = 0; i < obstaclesX.length; i++) {
      if (rover.x === obstaclesX[i] && rover.y + 1 === obstaclesY[i]) {
        obstacle = true;
        errorObstacleLog();
      }
    } 
    if (rover.y === 9) {
      errorLog();
    } else {
      rover.y = rover.y + 1; 
      positionLog();
      pushTravelLog();
    } 
  } else if (rover.direction === "S") {
    for (var i = 0; i < obstaclesX.length; i++) {
      if (rover.x === obstaclesX[i] && rover.y - 1 === obstaclesY[i]) {
        obstacle = true;
        errorObstacleLog();
      }
    }
    if (rover.y === 0) {
      errorLog();
    } else {
      rover.y = rover.y - 1;
      positionLog();
      pushTravelLog();
    }    
  } else if (rover.direction === "E") {
    for (var i = 0; i < obstaclesX.length; i++) {
      if (rover.x - 1 === obstaclesX[i] && rover.y === obstaclesY[i]) {
        obstacle = true;
        errorObstacleLog();
      }
    }
    if (rover.x === 0) {
      errorLog();
    } else {
      rover.x = rover.x - 1;
      positionLog();
      pushTravelLog();
    }
  } else if (rover.direction === "W") {
    for (var i = 0; i < obstaclesX.length; i++) {
      if (rover.x + 1 === obstaclesX[i] && rover.y === obstacleY[i]) {
        obstacle = true;
        errorObstacleLog();
      }
    }
    if (rover.x === 9) {
      errorLog();
    } else {
      rover.x = rover.x + 1;
      positionLog();
      pushTravelLog();
    }
  }
};


////////////////////// ORDER

// conjunto de movimientos que se quiere el rover siga
 function roverObey (string) {
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== "f" && string[i] !== "b" && string[i] !== "r" && string[i] !== "l" ) {
      console.log("Comando no válido. Inserte solamente los caracteres f,b,r o l, por favor.")
    } else {
      if (string[i] === "f") {
        moveForward(rover);
      } else if (string[i] === "b") {
        moveBackwards(rover);
      } else if (string[i] === "r") {
        turnRight(rover);
      } else if (string[i] === "l") {
        turnLeft(rover);
      } 
    } 
  }
}; 


