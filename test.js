function solution(array, commands) {
    var newArr = [];
    for(i=0; i< commands.length; i++){
        var start = commands[i][0];
        var end = commands[i][1];
        var pick = commands[i][2]-1;
        var dedicatedNum = array.slice(start-1, end).sort((a,b)=> a-b)[pick];
        newArr.push(dedicatedNum);           
    }
    return newArr;
}

var array = [10, 2];
var commands = [[1, 2, 1]];
console.log(solution(array, commands));
