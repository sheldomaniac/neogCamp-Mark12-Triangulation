var side1 = document.querySelector("#length-1");
var side2 = document.querySelector("#length-2");
var angle1 = document.querySelector("#angle-1");
var checkButton = document.querySelector("#check");
var finalOP = document.querySelector("#output-div");

finalOP.style.display="none";



function clickHandler(e){
    
    var base = side1.value;
    var height = side2.value;
    var angle = angle1.value;

    if(!base || !height || !angle){
        finalOP.innerHTML = "Fill the above values correctly to proceed.";    
        finalOP.style.display="block";
    }else{
        if(base >= 0 && height >= 0 && angle>0 && angle<180){
            var triangleArea = 1/2 * base * height * Math.sin(angle * Math.PI / 180);
            
            triangleArea = triangleArea.toFixed(2);
            finalOP.innerHTML = "The area of triangle is " + triangleArea + " units<sup>2</sup>."; 
            finalOP.style.display="block";
    
        }else{
            finalOP.innerHTML = "Looks like one or more values you entered are incorrect. Please re-check.";  
            finalOP.style.display="block";
        }
    }
}



checkButton.addEventListener("click", clickHandler);