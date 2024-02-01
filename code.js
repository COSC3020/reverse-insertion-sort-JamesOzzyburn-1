function insertionSortReverse(arr) {
  for(var i = arr.length - 1; i >= 0; i--) { // Start at the end of the array
    var val = arr[i]; //No change
    var j; //No change
    for(j = i; j < arr.length - 1 && arr[j+1] < val; j++) { // Start at the end of the array again and then swap the <, > signs
      arr[j] = arr[j+1]; // Swap the element up one in the array instaed of down one
    }
    arr[j] = val; // No change
  }
  return arr;
    }