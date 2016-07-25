var fs = require('fs');

function reead(){
	var number;
  fs.readFile(this.Path,function(err,data) {
    if(err) {
      throw err;
    } else {
      console.log(data)
      var result = data.toString().split('\n')
        number = result.length;      
    }
   });
  return number;
}