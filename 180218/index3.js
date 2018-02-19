//요청 url사용
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	var url = req.url;

	var fileName = 'index.html';
	// 디포릍값입력-> 서버 죽는 것을 방지하기 위해서
	// /뒤가 1보다 작을때 인덱스 불러옴
	// 0일때 index.html불러옴

	if (url.length > 1) {
		fileName = url.substring(1);
		//문자열에서 t
		//text.html
		//localhost:3000/url
		//substring찾아보기-> 얘는 인덱스가 1부터 시작한다->첫번째부터 끝까지 모두 넣어라

	}

	console.log(fileName);

	fs.readFile('app/' + fileName, function(err, data) {
		//'app/index.html'대신 fileName사용가능
		//ex fileName = app/test.html
		res.end(data);
	});
});

server.listen(3000);