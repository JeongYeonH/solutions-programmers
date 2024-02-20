function solution(survey, choices) {
    
    let test = {
        "R": 0,
        "T": 0,
        "C": 0,
        "F": 0,
        "J": 0,
        "M": 0,
        "A": 0,
        "N": 0,
    }
    
    for(i=0; i< survey.length; i++){
        console.log(`${survey[i]}, ${ choices[i]}`)
        if(choices[i] > 4){
            let value= survey[i][1]
            test[value] += choices[i]-4;
        }
        if(choices[i] < 4){
            let value= survey[i][0]
            test[value] += 4- choices[i]
        }
    }
    console.log(test)
    var answer = "";

    for(j=0; j< 8; j +=2){
        let first = Object.keys(test)[j];
        let second = Object.keys(test)[j+1];
        if(test[first] < test[second]){
            answer += second
        }else{
            answer += first
        }
    }
    
    return answer;
}

var survey = ["RT", "RT", "RT"];
var choices = [7, 5, 2];

console.log(solution(survey, choices));