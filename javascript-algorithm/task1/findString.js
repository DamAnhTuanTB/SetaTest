const findString = (arrString) => {
    if(arrString.length === 0) return [];
    let arrLength = arrString.map(element => element.length);
    let maxArrLength = Math.max(...arrLength);
    let arrCount = new Array(maxArrLength + 1).fill(0);
    arrLength.forEach(element => {
        arrCount[element]++;
    });
    let maxArrCount = Math.max(...arrCount);
    let arrResult = [];
    arrCount.forEach((element, index) => {
        if(element === maxArrCount){
            arrString.forEach((elementChild, indexChild) => {
                if(elementChild.length === index) arrResult.push(elementChild);
            })
        }
    })
    return arrResult;
}

module.exports = findString; 