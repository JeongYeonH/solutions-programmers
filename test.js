function solution(k, score) {
    answer =[];
    dedicatedArr= []
    // for 루프를 이용해 각 일차마다 점수를 차트에 더합니다.
    for(i=0; i< score.length; i++){
        dedicatedArr.push(score[i]);
        // 내립차순으로 배열을 설정합니다.
        dedicatedArr.sort((a,b)=> b-a);
        // 아직 k만큼 리스트가 다 채워지지 않았다면,
        // 뒤에 있는 가장 작은 숫자를 선택합니다.
        if(dedicatedArr.length <=k){
            // 각각 데이터는 정답 배열에 집어넣습니다.
            answer.push(dedicatedArr[i]);
        }else{
            answer.push(dedicatedArr[k-1]);
        }
    }
    return answer;
}

var k = 4;
var score = [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000];
console.log(solution(k, score));
