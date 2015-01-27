var reader = require('./read'),
    writer = require('./write');

reader.read( './source.txt', function( data )){
	var changed = data.replace( 'I am', 'You are' );
	reader.print( data );

	writer.write( './changed.txt;,changed );
});

function initialize(){
	map = new google.maps.Map(document.getElementById('map-canvas'))
}

