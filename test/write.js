var fs = require( 'fs' );

module.exports = {
	write : function(filename, data){
		fs.writeFileSync( filename,data );
	}
};

