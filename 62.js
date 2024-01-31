function solution(babbling) {
  var pronuance = ["aya", "ye", "woo", "ma"];
  var count =0;
  var tempWord = " "
  for (i = 0; i < babbling.length; i++) {
    var origin = babbling[i];
    tempWord = " ";
    console.log("임시 방지 단어는 다시 비었습니다")
    repeats(babbling, pronuance, origin, i);
  }

  function repeats(babbling, pronuance, origin, i) {
    for (word of pronuance) {
      if (babbling[i].startsWith(word) && !babbling[i].startsWith(tempWord)) {
        console.log(`${babbling[i]}는 ${word}로 시작합니다`);
        babbling[i] = babbling[i].slice(word.length);
        tempWord = word;
        console.log(`임지 방지 단어는 ${tempWord}입니다`)
        if (babbling[i] === "") {
          tempWord = " ";
          console.log("임시 방지 단어는 다시 비었습니다");
          console.log("해당 단어는 비어지게 되었습니다");
          console.log("!!!조건을 만족하므로 1을 더합니다!!!");
          count ++;
          break;
        } else {
          console.log("함수가 재귀합니다")
          repeats(babbling, pronuance, origin, i);
        }
      } else {
        console.log(origin, `는 ${word}로 시작 안합니다`);
      }
    }
  }

  return count;
}

var babbling = ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"];
console.log(solution(babbling));
