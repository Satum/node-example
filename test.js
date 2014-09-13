
/*

## HINTS

To perform a filesystem operation you are going to need the fs module from the Node core library. To load this kind of m
odule, or any other "global" module, use the following incantation:

    var fs = require('fs')

Now you have the full fs module available in a variable named fs.

All synchronous (or blocking) filesystem methods in the fs module end with 'Sync'. To read a file, you'll need to use fs
.readFileSync('/path/to/file'). This method will return a Buffer object containing the complete contents of the file.

Documentation on the fs module can be found by pointing your browser here:
  file://C:\Users\Oliver\AppData\Roaming\npm\node_modules\learnyounode\node_apidoc\fs.html

Buffer objects are Node's way of efficiently representing arbitrary arrays of data, whether it be ascii, binary or some
other format. Buffer objects can be converted to strings by simply calling the toString() method on them. e.g. var str =
 buf.toString().

Documentation on Buffers can be found by pointing your browser here:
  file://C:\Users\Oliver\AppData\Roaming\npm\node_modules\learnyounode\node_apidoc\buffer.html

If you're looking for an easy way to count the number of newlines in a string, recall that a JavaScript String can be .s
plit() into an array of substrings and that '\n' can be used as a delimiter. Note that the test file does not have a new
line character ('\n') at the end of the last line, so using this method you'll end up with an array that has one more el
ement than the number of newlines.

*/

var mymodule = require('./module');


mymodule(process.argv[2], process.argv[3], print)

function print(err, dataInArray){

	for(var i = 0; i < dataInArray.length; i++){
		console.log(dataInArray[i]);
	}
	
}

