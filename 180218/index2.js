//fs사용(file system)
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	fs.readFile('app/index.html', function(err, data){
		//filesystem reading
		res.end(data);
		//소스코드로 데이타를 통해 넘어옴 (html을 가져오는게 아니라) ->file streaming

	})
});

server.listen(3000);
소켓통신은 모두 streaming 방식으로 진행된다  

//start는 노드 제이에스의 기본 예약어
//run dev은 사용자 지정



