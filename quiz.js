// The second IIFE augment, loop through & give color border 

CarLot = (function(originalCarLot){

originalCarLot.populatePage= function(inventory) {
  // Loop over the inventory and populate the page
  var string = '';
  for(var i=0; i<inventory.length;i++){
    if(i%3===0){
      string+=`<div class="row">`;
    }
    string +=`<div class="col-md-4 col-sm-6"><h4>Make: ${inventory[i].make}</h4>`;
    string +=`<h4>Model: ${inventory[i].model}</h4>`;
    string +=`<p>Year: ${inventory[i].year}</p>`;
    string +=`<p>Price: ${inventory[i].price}</p>`;
    string +=`<p>Color: ${inventory[i].color}</p>`;
    string +=`<p>Purchased: ${inventory[i].purchased}</p>`;
    string +=`<p>Description: ${inventory[i].description}</p></div>`;
    if((i+1)%3===0){
    string +=`</div>`;
    }
}

  document.getElementById("container").innerHTML = string;

  //run putColorBorder function
  originalCarLot.putColorBorder(inventory);

  //run changeThicknessColor function with passing two arguments: selected elements and color
  var myColor ="pink";

  document.getElementById("container").addEventListener("click", changeThCo);
  function changeThCo(event){
    var domEle = event.target;
    CarLot.changeThicknessColor(domEle, myColor);
  }
};

//Put a border around the car information that matches the color of the car. 
originalCarLot.putColorBorder= function(inventory){
  for(var i=0; i<inventory.length;i++){
  document.getElementsByClassName("col-md-4 col-sm-6")[i].style.borderStyle="dashed";
  document.getElementsByClassName("col-md-4 col-sm-6")[i].style.borderWidth="0.5px";
  document.getElementsByClassName("col-md-4 col-sm-6")[i].style.borderColor= inventory[i].color;
  }
} 

return originalCarLot;
})(CarLot||{});

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(CarLot.populatePage);


