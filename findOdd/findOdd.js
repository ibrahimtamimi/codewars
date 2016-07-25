// Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.


// function doTest(a, n) {
//   console.log("A = ", a);
//   console.log("n = ", n);
//   Test.assertEquals(findOdd(a), n);
// }
// Test.describe('Example tests', function() {
//   doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
//   doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
//   doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
//   doTest([10], 10);
//   doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
//   doTest([5,4,3,2,1,5,4,3,2,10,10], 1);
// });


function findOdd(A) {
  var obj={};
  for (var i=0;i < A.length;i++){
    if(A[i]%2 !== 0){
    	if(obj[A[i]]=== undefined){
    		obj[A[i]]=0;
    	}
      obj[A[i]]+=1
    }
  }

  for(var k in obj){
  	if(obj[k] % 2 !== 0){
  		return k;
  	}
  } 
}

findOdd([5,4,3,2,1,5,4,3,2,10,10]);