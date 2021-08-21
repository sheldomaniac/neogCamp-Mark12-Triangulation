var quizform = document.querySelector(".quiz");
var submitAnswers = document.querySelector("#submit-answers");
var finalOP = document.querySelector("#output-div");

finalOP.style.display="none";

var finalScore = 0;

var answerArray = ["180°", "right", "60", "obtuse", "Yes", "void", "obtuse", "pytho", "right","0", "1", "2" ];
var typeAnswer = [0,0,0,1,0,1, 0, 0, 1, 0, 0, 0];



function compareStrings(input, answer){
    if(input === answer) return true;
    else return false;
}

function triangleType(angle){
    if(angle > 0 && angle < 90) return "acute";
    else if (angle === 90) return "right";
    else if(angle > 90 && angle < 180) return "obtuse";
    else return "void";
}


function calculateScore(answers, types){
    var score = 0;
    var index = 0;

    const formData = new FormData(quizform);
    
    for( let userAnswer of formData.values()){
        
        if(types[index] == 0){
            if(compareStrings(userAnswer, answers[index])){
                score++;
            }
        }else if (types[index] == 1){
            var typeTriangle = triangleType(Number(userAnswer));
            if(compareStrings(typeTriangle, answers[index])){
                score++;
            }
        }else{

        }
        
        index++;
    }

    return score;
}

function clickHandler(e){
    finalScore = calculateScore(answerArray, typeAnswer);

    if(finalScore === 0){
        
        finalOP.innerHTML = "Oh no! You have scored "+finalScore+" on this test. Practice hard and comeback 💪💪💪";
        finalOP.style.display="block";
    }else if (finalScore === 10){
        finalOP.innerHTML = "Congratulations!! You have scored "+finalScore+" on this test. Your knowledge is strong.";
        finalOP.style.display="block";
    }else{
        finalOP.innerHTML = "You have scored "+finalScore+" on this test. Keep up the good work.";
        finalOP.style.display="block";
    }

}

submitAnswers.addEventListener("click", clickHandler);
