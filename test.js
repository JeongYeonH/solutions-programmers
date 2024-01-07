function solution(numbers) {
    var newArr = []
    for(i=0; i<numbers.length; i++){
        for(j=i+1; j<numbers.length; j++){
            var add = numbers[i]+numbers[j];
            if(!newArr.includes(add)){
                newArr.push(add);
            }
        }
    }
    return newArr.sort((a,b)=> a-b);
}

var numbers = [2,1,3,4,1];
console.log(solution(numbers));
