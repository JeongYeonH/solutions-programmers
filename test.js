function solution(s) {
    const words = s.split(' ');
    return words.map(word => word.split('').map((alphabet, index)=> index%2==0 ? alphabet.toUpperCase(): alphabet.toLowerCase()).join('')).join(' ');
}

