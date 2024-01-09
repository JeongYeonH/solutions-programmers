function solution(a, b, n) {
    var answer = 0;
    while(n>=a){     
        answer += Math.floor(n/a)*b;
        console.log(n, Math.floor(n/a)*a, Math.floor(n/a)*b)
        n = n-Math.floor(n/a)*a + Math.floor(n/a)*b;
    }
    return answer;
}

var a = 3;
var b = 1;
var n = 20;
console.log(solution(a, b, n));
