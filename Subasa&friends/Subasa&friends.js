function sobasa(goalNum, extra1, extra2,times){
    if (times[times.length-1]>90+extra2) return "no"
    for (let i=0 ; i< goalNum; i++){
        if (times[i]>= 45 && times[i] <= 45+extra1){
            if (times[i]+extra1< times[i-1]){
                return "no"
            }
        }
    }
    return "yes"
}
console.log(sobasa(6, 3, 2 , [8,48,45,70,81,94]))