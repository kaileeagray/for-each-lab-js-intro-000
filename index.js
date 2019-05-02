function iterativeLog(array) {
  array.forEach(function(element, index) {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  var kids = ["Maggie", "Piper"];
  kids.forEach(callback);
  return kids;
}
// Define a function, doToArray that accepts an array and a callback.
// Call .forEach() on the array, passing the callback as the forEach callback.
