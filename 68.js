function solution(ingredient) {
  var i = 0;
  var hambuger = 0;
  var restart = true;
  while (restart) {
    
    if (
      ingredient[i] === 1 &&
      ingredient[i + 1] === 2 &&
      ingredient[i + 2] === 3 &&
      ingredient[i + 3] === 1
    ) {
      hambuger++;
      ingredient.splice(i, 4);
      if(i !==0){
        i = i-3;
      }
    } else if( i > ingredient.length-3) {
      restart = false;
    }else{
        i++;
    }
  }
  return hambuger;
}

var ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1];
console.log(solution(ingredient));
