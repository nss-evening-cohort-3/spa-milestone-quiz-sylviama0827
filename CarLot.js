//the first IIFE, has function 1. get 2. load
var CarLot = (function () {
  var inventory = [];

  return {
    //1. Function: get
    getInventory: function () {
      CarLot.loadInventory(function(){
        console.log(inventory);
      });
    },
    //2. Function: load json
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.addEventListener("load", function () {
        inventory = JSON.parse(this.responseText).cars;
        callback(inventory);
      });
      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();
    }
  };
})();





