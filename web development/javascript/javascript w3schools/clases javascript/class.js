class House {
    constructor(color, size) {
      this.color = color;
      this.size = size;
    }
  
    openDoor() {
      console.log("The door is now open.");
    }
  
    closeDoor() {
      console.log("The door is now closed.");
    }
  }

  

const myHouse = new House("red", "large");

console.log(myHouse.color); // red
myHouse.openDoor();         // The door is now open.
