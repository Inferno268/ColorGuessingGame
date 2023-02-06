var rgbValues =[0,1,2];                                                                         //field for rgb values

var r = Math.floor((Math.random())*256);                                                        //random numbers 0-255
var g = Math.floor((Math.random())*256);
var b = Math.floor((Math.random())*256);

var rFake= Math.floor((Math.random())*256);
var bFake= Math.floor((Math.random())*256);
var gFake= Math.floor((Math.random())*256);

var rFake1= Math.floor((Math.random())*256);
var bFake1= Math.floor((Math.random())*256);
var gFake1= Math.floor((Math.random())*256);

var answer=Math.floor((Math.random())*3);                                                       //random numbers 0-2

document.getElementById("colorValue").innerHTML="RGB("+ r + "," + g + "," + b +")";             //displays values of the color u gotta guess
document.getElementById(answer).style.backgroundColor="RGB("+ r + "," + g + "," + b +")";       //sets the "guess" color to the element named answer

rgbValues.splice(answer,1);                                                                     //replace one value in the rgb values on one index

document.getElementById(rgbValues[0]).style.backgroundColor="RGB("+ rFake + "," + rFake + "," + rFake +")"; //sets bg color for fake one
document.getElementById(rgbValues[1]).style.backgroundColor="RGB("+ rFake1 + "," + rFake1 + "," + rFake1 +")"; //sets bg color for fake one


function idk(){
    console.log("test");
    
    if(document.activeElement.id==answer){                              //If you click on the element that has id answer
        document.getElementById("colorValue").innerHTML="Got it :)";
    }
    else{
        document.getElementById("colorValue").innerHTML="Nope";
    }
}

function tryAgain(){                                                    //Reloads the page
    window.location.reload();
}
