var angleArr = document.querySelectorAll(".angles");
var checkButton = document.querySelector("#check");
var finalOP = document.querySelector("#output-div");

finalOP.style.display="none";
var message = "";

checkButton.addEventListener("click", clickHandler);

function convertTriStrtoInt(arr){
    return [Number(arr[0].value),Number(arr[1].value), Number(arr[2].value) ];
}

function isTriangle(angle){
    console.log(angle[0]+angle[1]+angle[2]);
    return angle[0]+angle[1]+angle[2] === 180;
}

function clickHandler(e){
    console.log("Hello");
    var angles = convertTriStrtoInt(angleArr);
    
    if( !angles[0] || !angles[1] || !angles[2] ){
        message = "Enter the appropriate angle values";    
    }else{
        
    
        if(angles[0] > 0 && angles[1] > 0 && angles[2] > 0){
            
            if(isTriangle(angles)){
                message = "Yayyy! Your angles form a triangle."
            }else{
                message = "Oh no! Your angles don't form a triangle."
            }
    
        }else{
            message = "Looks like one or more values are invalid. Have a look again.";
        }           
        
    }
    
    finalOP.innerHTML = message;
    finalOP.style.display="block";
}

