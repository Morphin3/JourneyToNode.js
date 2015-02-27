var http = require("http");

/*
 * 匿名函数
 *http.createServer(function(request,response){
 *        response.writeHead(200,{"Content-Type":"text/plain"});
 *        response.write("Hello World");
 *        response.end();
 *}).listen(8888);
 */

/*
 * 函数作为变量传递
 *function onRequest(request, response){
 *        console.log("Request received.");
 *        response.writeHead(200,{"Content-Type": "text/plain"});
 *        response.write("Hello World");
 *        response.end();
 *}
 *
 *http.createServer(onRequest).listen(8888);
 *console.log("Server has started.");
 */


function start() {
	function onRequest(request, response) {
		console.log("Request received.");
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World");
		response.end();
	}
	
	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;




