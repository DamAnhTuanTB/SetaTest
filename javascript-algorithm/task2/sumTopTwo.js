const sumTopTwo = (arrNumber) => {
    if(arrNumber.length >= 2){
        arrNumber.sort();
        let oneNumber = arrNumber.pop();
        let twoNumber = arrNumber.pop();
        while(twoNumber === oneNumber && arrNumber.length > 0){
            twoNumber = arrNumber.pop();
        }
        return oneNumber === twoNumber ? oneNumber : oneNumber + twoNumber;
   }
   return arrNumber.reduce((sum, element) => sum + element, 0);
}

module.exports = sumTopTwo;