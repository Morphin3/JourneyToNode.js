buf = new Buffer(256);
len = buf.write('\u00bd + \u00bc = \u00be', 0);
console.log(len + " bytes: " + buf.toString('utf8', 0, len));


str = "node.js",
buf = new Buffer(str.length),
i;
for(var i = 0; i< str.length ; i += 1) {
	buf[i] = str.charCodeAt(i);
}
console.log(buf);



