

  function specialMix(A,B,C) {

    if(typeof A === 'number' && typeof B === 'number' && typeof B === 'number'){return A+B+C}

    else if(A.match(/\d/g) || B.match(/\d/g) || C.match(/\d/g)){
      

    let aN = ["0"];
    let bN = ["0"];
    let cN = ["0"];

      if(A.match(/\d/g)){

        aN = A.match(/\d/g);

      }

      if(B.match(/\d/g)){

        bN = B.match(/\d/g);

      }

      if(C.match(/\d/g)){

        cN = C.match(/\d/g);

      }

       aN = aN.join("");
       bN = bN.join("");
       cN = cN.join("");

       return (Number(aN)+Number(bN)+Number(cN));
      
       }

    else { return "All is Strings"}

  }

    // Your Code Here
    // if all arguments are number return the total sum 
    // if argument is number string ( "10" ) convert it to number then return the sum of all numbers
    // if argument is string not contain a number ,ignore it and return the sum of numbers
  // if all arguments are string return :  All Is Strin}
  
  // see the output to understand more
  console.log(specialMix(10, 20, 30)); // 60
  console.log(specialMix("10Test", "Testing", "20Cool")); // 30
  console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
  console.log(specialMix("Test", "Cool", "Test")); // All Is Strings