var connection = Postmonger.Session();

connection.trigger('ready');

connection.on('initActivity', function( data ) {
	alert('init');
}

connection.on('clickedNext', function( data ) {
	alert('click');
})