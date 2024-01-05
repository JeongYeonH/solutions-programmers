function solution(sizes) {
    let width = 0;
    let height = 0;
    for(i=0; i< sizes.length; i++){
        if(sizes[i][0]< sizes[i][1]){   
            sizes[i]= [sizes[i][1],sizes[i][0]];
        }
        if(sizes[i][0]> width){
            width = sizes[i][0];
        }
        if(sizes[i][1]> height){
            height = sizes[i][1];
        }
    }
    return width*height
}
var sizes = [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]];
console.log(solution(sizes));

