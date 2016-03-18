//The third IIFE augment 1.change the thickness and background color 2. clear

CarLot = (function(originalCarLot){
//pass two argument, the element to click and the color
originalCarLot.changeThicknessColor = function(domEle, myColor){
  originalCarLot.clearChangedThCo();
  domEle.classList.add("myshow");
  domEle.classList.remove("myhide");
  domEle.style.borderWidth = "3px";
  domEle.style.backgroundColor = myColor;
}


//clear thickness and background function
originalCarLot.clearChangedThCo= function(){

 //clear <div class ="container">
 document.getElementById("container").classList.add("myhide");
 document.getElementById("container").classList.remove("myshow");
 document.getElementById("container").style.backgroundColor="transparent";

 //clear <div class ="row">
 var arrayRow =document.getElementsByClassName("row");
 for(var i=0; i< arrayRow.length;i++){
  arrayRow[i].classList.add("myhide");
  arrayRow[i].classList.remove("myshow");
  arrayRow[i].style.backgroundColor="transparent";
 }

 // clear <div class= "col-md-4">
 var arrayCol4 =document.getElementsByClassName("col-md-4");
 for (var i=0; i< arrayCol4.length; i++){
  arrayCol4[i].classList.add("myhide");
  arrayCol4[i].classList.remove("myshow");
  arrayCol4[i].style.borderWidth="0.5px";
  arrayCol4[i].style.backgroundColor="transparent";
 }

 //clear <p>
 var arrayP =document.getElementsByTagName("p");
 for (var i=0; i< arrayP.length; i++){
  arrayP[i].classList.add("myhide");
  arrayP[i].classList.remove("myshow");
  arrayP[i].style.backgroundColor="transparent";
 }
//clear <h4>
 var arrayH4 =document.getElementsByTagName("h4");
 for (var i=0; i< arrayH4.length; i++){
  arrayH4[i].classList.add("myhide");
  arrayH4[i].classList.remove("myshow");
  arrayH4[i].style.backgroundColor="transparent";
 }
}

return originalCarLot;

})(CarLot||{});

