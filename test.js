function solution(a, b) {
    // 일주일을 요일 별로 배열을 만듭니다.
    // 요일은 3글자 알파벳으로 요약해서 만듭니다.
    var arr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    // 배열에서 int를 가져와 해당 날짜의 요일을 출력합니다
    var answer = arr[new Date(`2016-${a}-${b}`).getDay()];
    // 답을 반환합니다.
    return answer;
}

var a = 5;
var b = 24;
console.log(solution(a, b));
