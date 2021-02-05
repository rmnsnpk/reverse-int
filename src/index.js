module.exports = function reverse (n) {
    if(n<0){
        n=-n;
    }
    let arr = String(n).split("");
    return Number(arr.reverse().join(''));

  
}
