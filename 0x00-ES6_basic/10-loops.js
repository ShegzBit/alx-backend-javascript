export default function appendToEachArrayValue(array, appendString) {
    for (let idx of array) {
      let value = idx;
      array[findIndexOf(idx)] = appendString + value;
    }
  
    return array;
  }