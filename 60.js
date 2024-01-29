function solution(number, limit, power) {
  var answer = 0;
  for(i=1; i<= number; i++){
    var measureCount = 0;
    for(j= 1; j <=Math.floor(Math.sqrt(i)); j++){
      if(i%j === 0){
        measureCount +=2;
      }      
    }
    if(Math.sqrt(i)===Math.floor(Math.sqrt(i))){
      measureCount--;
    }
    
    if(measureCount > limit){
      measureCount = power;
    }
    
    answer += measureCount;
  }
  return answer;
}

var number = 10;
var limit = 3;
var power = 2;
console.log(solution(number, limit, power));
