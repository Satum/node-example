

var fs = require('fs');
var path = require ('path');

module.exports = function moduleFuntion(dirName, fileExt, callback){

	fs.readdir(dirName, function(err, listOfFiles){
		if(err)
			return callback(err);

		var data = [];

		for(var i = 0; i < listOfFiles.length; i++){
			if(path.extname(listOfFiles[i]) === ("." + fileExt))
				data.push(listOfFiles[i]);
		}

		callback(null, data);
})}