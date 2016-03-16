// The second IIFE augments the original one with a function that creates all of the eventHandlers that you need for the application. Name the function activateEvents.

CarLot = (function(originalCarLot){

originalCarLot.populatePage= function(inventory) {
  // Loop over the inventory and populate the page
  var string = '<div class="container">';
  for(var i=0; i<inventory.length;i++){
    string +=`<div class="row"><div class="col-md-4">Make: ${inventory[i].make}</div>`;
    string +=`<div class="col-md-4">Model: ${inventory[i].model}</div>`;
    string +=`<div class="col-md-4">Year: ${inventory[i].year}</div>`;
    string +=`<div class="col-md-4">Price: ${inventory[i].price}</div>`;
    string +=`<div class="col-md-4">Color: ${inventory[i].color}</div>`;
    string +=`<div class="col-md-4">Purchased: ${inventory[i].purchased}</div>`;
    string +=`<div class="col-md-12">Description: ${inventory[i].description}</div></div><br>`;
  }
  document.getElementById("cards").innerHTML = string;

  // Now that the DOM is loaded, establish all the event listeners needed
  originalCarLot.putColorBorder();
};

//Put a border around the car information that matches the color of the car. 
originalCarLot.putColorBorder= function(){
  // var kar = "red";
  console.log("called");
  document.getElementById("cards").querySelector(".row").style.border="solid"+ "red";
}
  

return originalCarLot;
})(CarLot||{});

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(CarLot.populatePage);


