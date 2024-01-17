function solution(k, m, score) {
    score.sort((a,b)=>b-a);
    var sum = 0;
    for(i=0; i<score.length; i+=m){
        if(score[i+m-1]){
            sum+=m*score[i+m-1]
        }
    }
    return sum;
}

var k = 3;
var m = 3;
var score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2, 1];

console.log(solution(k, m, score));