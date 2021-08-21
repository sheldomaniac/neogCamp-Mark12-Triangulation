var length1 = document.querySelector("#length-1");
var length2 = document.querySelector("#length-2");
var checkButton = document.querySelector("#check");
var finalOP = document.querySelector("#output-div");

finalOP.style.display="none";



function clickHandler(e){

    var base = length1.value;
    var height = length2.value;

    if(!base || !height){
        finalOP.innerHTML = "Enter the values for base and height above respectively.";    
        finalOP.style.display="block";
    }else{
        if(base >= 0 && height >= 0){
            var hypotenuse = Math.sqrt((Math.pow(base,2)) + (Math.pow(height,2)));
            hypotenuse = hypotenuse.toFixed(2);
            finalOP.innerHTML = "The value of hypotenuse is " + hypotenuse + " units."; 
            finalOP.style.display="block";    
        }else{
            finalOP.innerHTML = "Looks like one or more values you entered are incorrect. Please re-check.";  
            finalOP.style.display="block";
        }
    }
}



checkButton.addEventListener("click", clickHandler);
