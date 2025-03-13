//Used chatgpt to figure out how to return my results as an array of arrays
//However the code that actually permutes the array is my own.
function perm(a) { 
  if (a.length <= 1) {
    return [a];
  }
  
  var result = [];

  for (var i = 0; i < a.length; i++) {
    var nextArray = a.slice();
    nextArray.splice(i, 1);

    var subPerms = perm(nextArray);

    for (var sub of subPerms) {
      result.push([a[i]].concat(sub));
    }
  }
  return result;
}

//assumes that a is bigger than 1 element since we check in main function
function isSorted(a) {
  for (var i = 1; i < a.length; i++) {
    if (a[i-1] > a[i]) { return false; }
  }
  return true;
}



function permutationSort(array) {
  if (array.length == 0 || array.length == 1) { return 0; }

  var perms = perm(array);

  for (var i = 0; i < perms.length; i++) {
    if (isSorted(perms[i])) {
      array.splice(0, array.length, ...perms[i]);
      return i+1;
    }
  }
}

var x = [1,0];


