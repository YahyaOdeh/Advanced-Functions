
let checker = zName => {

  return  (status) => {

    return  (salary) => {

      return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`; };

  };

}

console.log(checker("Ahmad")("Available")("5000"))