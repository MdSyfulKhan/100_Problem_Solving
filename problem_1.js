// Problem --> Give an array of integers, replace all the occurrences of elementToReplace with subtractionElement.



function arrayReplace(inputArray, elementToReplace, subtractionElement ){
  inputArray.forEach((element, index)=>{
    if(element === elementToReplace){
      inputArray[index] = subtractionElement;
    }
  });
  console.log(inputArray);
}

arrayReplace([3,4,5,3,5,7,8,3], 3, 2);
