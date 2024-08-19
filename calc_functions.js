function frequencyCount(arr) {
    return arr.reduce(function(acc, next) {
      acc[next] = (acc[next] || 0) + 1;
      return acc;
    }, {});
  }
  
function findMode(arr) {
let freqCounter = frequencyCount(arr);
  
let count = 0;
let mostFrequent;
  
for (let key in freqCounter) {
  if (freqCounter[key] > count) {
    mostFrequent = key;
    count = freqCounter[key];
  }
}
return +mostFrequent;
}

function findMedian(numbers){
    const middleIndex = Math.floor(sortedNums.length / 2); 
    if (numbers.length % 2 === 0) {  
        return (numbers[middleIndex - 1] + numbers[middleIndex]) / 2;  
    } else {  
        return numbers[middleIndex];  
    }

}


module.exports = { findMode, findMedian}