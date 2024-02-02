function solution(babbling) {
  var pronuance = ["aya", "ye", "woo", "ma"];
  var origin = babbling;
  var tempWord = " "
  repeat(pronuance, babbling);

  function repeat(pronuance, babbling){
      for (word of pronuance) {
        if (babbling.startsWith(word) && !babbling.startsWith(tempWord)) {
          console.log("본 단어는",word, "로 시작합니다");
          babbling = babbling.slice(3);
          tempWord = word;
          console.log(`잘라져 남은 단어는 ${babbling} 입니다`)
          if (babbling === "") {
            console.log("해당 단어는 비어지게 되었습니다");
            console.log("!!조건을 만족합니다!!")
            break;
          }else{
            console.log("repeat함수가 재귀합니다")
            repeat(pronuance, babbling);
          }
        } else {
          console.log(babbling, `는 ${word}로 시작 안합니다`);
        }
      }
  }

  return 0;
}

var babbling = "ayaaya";
console.log(solution(babbling));
