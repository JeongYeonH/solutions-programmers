function solution(wallpaper) {
    var minhorz = Infinity;
    var minvert = Infinity;
    var maxhorz = 0;
    var maxvert = 0;
    for(i=0; i< wallpaper.length; i++){
        for(j=0; j<wallpaper[i].length; j++){
            if(wallpaper[i][j]=== '#'){
                // console.log(`#이 있는 좌표는 ${i}와 ${j}`)
                if(minhorz > i){
                    minhorz = i;
                }
                if(minvert > j){
                    minvert = j;
                }
                if(maxhorz < i){
                    maxhorz = i;
                }
                if(maxvert < j){
                    maxvert = j;
                }
            }
        }
    }

    return [minhorz, minvert, maxhorz+1, maxvert+1];
}

var wallpaper = [".##...##.", "#..#.#..#", "#...#...#", ".#.....#.", "..#...#..", "...#.#...", "....#...."];
console.log(solution(wallpaper));