//
// String.prototype.replaceAt = function(index, replacement) {
//     return this.substr(0, index) + replacement + this.substr(index + replacement.length);
// }


function changeString(len , k , str){
    let output= "";
    for(let j=0 ; j< k ; j++){
    let temp = str[len-1] // temp = last char
    str= str.substr(0, len-1) //str= del last char
    str= temp+str //last char + str
    for (let i = 0; i < len ; i++){
        if (str.charAt(i)=== "z"){
            output+= 'a';
        }
        else {
            output+=String.fromCharCode(str.charCodeAt(i)+1) //chng to nxt chr
        }
    }
        str=output;
        output="";
}
    return str ;
}
console.log(changeString(3,1 , "abz"))
console.log(changeString(4,5 , "abcd"))