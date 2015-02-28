var http = require("http");
var url = require("url");

function start(route, handle) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");

		response.writeHead(200, {"Content-Type": "text/plain"});
		var content = route(handle, pathname, response);
	}
	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;




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





