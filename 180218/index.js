//http모듈을 접근하기 위한 내장 함수 호출 (노드로부터 내장모듈을 가져옴)
var http = require('http');
//php
//createserver를 이용하여 서버를 설정 및 구동
var server = http.createServer(function(req, res) {
	//메소드 만들고 파라메타로 펑션을 파라메타로 받음 (서버의 리케스트, 리스펀스)
	console.log('Responding to a request');
	res.end('<h1>hello, world</h1>');
	//오브젝트 안에 엔드라는 함수가 있음 
});
//서버 오브젝트로 말음
//서버를 대기상태로 만듬 
server.listen(3000);
//서버가 가지고 있는 함수중에 리슨이라는 것이 있음 (듣고있다)
//3000 포트번호
//이 서버가 죽을때까지(터미널아웃) 파이프라인을 만들고 대기하고 있음 소켓통신 