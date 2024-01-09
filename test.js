function solution(food) {
    var answer = '';
    for(i=1; i<food.length; i++){
        var howMany = Math.floor(food[i]/2);
        answer += (i+'').repeat(howMany);
    }
    return answer + '0' + answer.split('').reverse().join('');
}

var food = [1, 3, 4, 6];
console.log(solution(food));
