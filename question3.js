function specialMix(...data) {

    var sum = 0;

    data.forEach(function(arg)
    {

        if(typeof arg === 'number'){
        sum += arg;     }

        else if (arg.match(/\d/g)){

            sum += parseInt(arg)

        }

    }
    
    );

    if(sum !== 0 ) return sum

    else return "All Is Strings"

  

}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings