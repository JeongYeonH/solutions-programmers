function solution(s, n) {
    return s.split('').map(char=> {if(char.match(/[a-zA-Z]/)){
        let num = char.charCodeAt();
        let Big = char === char.toUpperCase();
        num = (Big ? 65 : 97) + (num - (Big ? 65 : 97) + n + 26) % 26;
        return String.fromCharCode(num);
    }else{
        return char;
    }}).join('');
    
}
var s = "a B z";
var n = 4;
console.log(solution(s, n));

