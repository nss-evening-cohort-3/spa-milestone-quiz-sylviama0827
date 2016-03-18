//The second IIFE augment

//functions: 1. loop through 2.give color border 
//3. clear TextBox (clear and cursor) 4. change DOM's description

//run: (1)loop over (2)put color Border (3)change border Thickness and Color
//(4)clear text box and cursor (5)change text description

CarLot = (function(originalCarLot){

//1. function: loop over inventory and populate the page
originalCarLot.populatePage= function(inventory) {

  var string = '';
  for(var i=0; i<inventory.length;i++){
    //make sure each row has three columns
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
  //After loading, start to run other functions:

  //(2)run: putColorBorder function
  originalCarLot.putColorBorder(inventory);

  //once click a DOM element, run: change the border, textInput box clear, cursor on text box, and DOM description change
  var myColor ="pink";

  document.getElementById("container").addEventListener("click", changeThCo);
  var domEle = "";
  function changeThCo(event){
    domEle = event.target;
    //(3)run change border Thickness and Color
    CarLot.changeThicknessColor(domEle, myColor);
    //(4) run clear text box and cursor
    CarLot.clearTextInput(domEle);


    //(5)run: keyup and change DOM description function
    document.getElementById("myInput").addEventListener("keyup", typing);
    function typing(event){
    var textBox = event.target;
    //pass two argument, DOM element and text box
    CarLot.changeDescription(domEle, textBox);
    }
  }
};

//2. Function: Put a border around the car information that matches the color of the car. 
originalCarLot.putColorBorder= function(inventory){
  for(var i=0; i<inventory.length;i++){
  document.getElementsByClassName("col-md-4 col-sm-6")[i].style.borderStyle="dashed";
  document.getElementsByClassName("col-md-4 col-sm-6")[i].style.borderWidth="0.5px";
  document.getElementsByClassName("col-md-4 col-sm-6")[i].style.borderColor= inventory[i].color;
  }
}

//3. Function: clear Text Input 
originalCarLot.clearTextInput = function(domEle){
  //once click a DOM element, clear the input text box
  document.getElementById("myInput").value ="";
  //and put cursor in textInput
  document.getElementById("myInput").focus();
}

//4. Function: keyup to change the selected DOM element's content 
originalCarLot.changeDescription = function(domEle, textBox){
  domEle.innerHTML = textBox.value;
}

return originalCarLot;
})(CarLot||{});

//run: everything (1)run loop over
CarLot.loadInventory(CarLot.populatePage);


