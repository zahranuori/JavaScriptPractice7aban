let defaultNumber = 0

function change(n, x, y, z, a, b, c) {
    // derham
    for (let d = 0; d <= x; d++) {
        //uro
        for (let u = 0; u <= y; u++) {
            // dolaar
            for (let dl = 0; dl <= z; dl++) {
                //meghdar n
                if (d * a + u * b + dl * c  === n) {
                    defaultNumber++;
                }
            }
        }
    }
    console.log(defaultNumber)

}

// change(100000,2,1,1,50000,70000,30000);
// change(60000,3,3,3,30000,20000,30000);
// change(32000,2,1,1,4200,7500,3600);
change(70000,2,3,1,50000,10000,10000);