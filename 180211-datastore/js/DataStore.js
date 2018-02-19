(function (window){//즉시실행 함수-> 보통은 함수에 이벤트를 걸어 실행시키고 콜백함수로 리턴값을 가져온다.(원하는 시점에 함수 호출 가능)
	'use strict';// 문법 잘못되면 잡아준다
	//name space
	var App = window.App || {};
	//var App에 대입 시키거나 오브젝트를 새로 생성한다(생성자)음
	//생성자-> heap 메모리에 넣는다, (static은 꼭 필요할 때만 쓴다)
	//var dsOne = new App.DataStore();

	function DataStore(){
		console.log('running the DataStore function');

		this.data = {};
		//DataStore의 data생성
	}
	DataStore.prototype.add = function(key, val){
	//prototype-> 기존에 생성된 오브젝트에 별도에 필요한 메소드를 지정하는 것 	
	//dsOne.add('jenny', 'latte');
		//console.log('success');
		this.data[key] = val;
		//{key, val} 제이슨 형대로 저장하기
	}
	DataStore.prototype.get = function(key){
		return this.data[key];
		//dsOne.get('jenny');
	}
	DataStore.prototype.getAll = function(){
		return this.data;
		//dsOne.getAll();
	}
	DataStore.prototype.remove = function(key){
		delete this.data[key];
		//dsOne.remove('jenny');
	}

	App.DataStore = DataStore;
	window.App = App;


})(window);
//프로젝트 생성단계 db->js->formhandler(중간역할)->html