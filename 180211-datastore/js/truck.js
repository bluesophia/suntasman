(function (window){//즉시실행함수(바로 레디상태로 실행시켜버림-init없음)
	'use strict';// 문법 잘못되면 잡아준다
	//name space
	var App = window.App || {};
	//var App에 대입 시키거나 오브젝트를 새로 생성한다
	//var coffee = new App.Truck('Sohee', new App.DataStore()); 인젝션 
	function Truck(truckId, db){// 생성자 생성
		//(coffee, new App.DataStore())
		this.truckId = truckId;
		//Truck.truckId
		this.db = db;
		//Truck.db
	}

	Truck.prototype.createOrder = function(order){
		//콜백함
		console.log('Adding order for ' + order.emailAddress);
		this.db.add(order.emailAddress, order);	
		//DataStore에 있는 db.add를 가져와서 실행한다.-> 재사용성
		//coffee.createOrder({ 'emailAddress' : 'jenny@g.com', 'order' : 'tea' });
	}

	Truck.prototype.deliverOrder = function(customerId){
		console.log('Delivering order for ' + customerId);
		this.db.remove(customerId);
		//coffee.deliverOrder('jenny@g.com');
	}
	Truck.prototype.printOrders = function(){

		var customerIdArray = Object.keys(this.db.getAll());
		console.log('success');
		//Object.keys(대문자 조심!!)-> Object는 자바스크립트 내부에있는 Object 자체 클래스 
		console.log('Truck #' + this.truckId + 'has pending orders');
		
		var thisDB = this.db;

		customerIdArray.forEach(function(id){
		//object.keys(this.db.getAll()).forEach(function(id)){	
			console.log(thisDB.get(id));
		})
	}

	App.Truck = Truck;
	window.App = App;

})(window);


//콘솔 인스턴스화하기
//콜백함수 다시공부

//on, bind, click의 차이점 ->메모리저장차이(on이 더 많이 메모리차지)
