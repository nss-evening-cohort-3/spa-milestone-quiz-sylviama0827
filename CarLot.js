var CarLot = (function () {
  var inventory = [];

  return {
    getInventory: function () {
      CarLot.loadInventory(function(){
        console.log(inventory)
      });
    },
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





