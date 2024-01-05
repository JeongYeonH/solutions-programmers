function solution(strings, n) {
    strings = strings.map(i => i[n]+i).sort();
    strings = strings.map(i => i.substring(1));
    return strings;
}

var strings = ["sun", "bed", "car"]
var n = 1;
console.log(solution(strings, n));
