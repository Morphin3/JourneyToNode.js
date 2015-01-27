var fs=require('fs');

module.exports = {
	read : function(path, callback){
		var data = fs.readFileSync( path );

		callback && callback( data.toString());
	},

	print : function( data ){
		console.log( data );
	}
};
