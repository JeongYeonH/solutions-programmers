function solution(s) {
    var newArr = []
    // 먼저 주어진 문자열의 각 문자를 순서대로 훑어봅니다.
    for(i=0; i<s.length; i++){
        // 그리고 각 문자의 위치에서 처음 문자까지 거꾸로 훓어봅니다.
        // 같은 위치에 있는 건 무조건 동일하므로 제외합니다.
        for(j=i-1; j>= 0; j--){
            // 이들 중 일치하는 부위를 찾습니다.
            var count = 0;
            if(s[j]===s[i]){
                console.log(`${i-j}번째에서 일치`);
                // 맨 처음 일치하면 다음 일치하는 부위는 찾을 필요가 없으므로 break합니다.
                break;
            }
        }
    }
    return newArr;
}

// 아직 다 풀지 못했습니다.
var s = "banana";
console.log(solution(s));
