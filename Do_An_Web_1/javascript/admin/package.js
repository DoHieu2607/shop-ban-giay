var app = angular.module('packageApp', ['angularUtils.directives.dirPagination']);


app.controller('listPackage', function($scope) {
   var daTa=[
			{"stt":1,"name":"Trương Mạn Ngọc","date":"12/2/2018","sum":"10.600.000 đồng","status":"Đã xử lý"},
			{"stt":2,"name":"Nguyễn Ngọc Khánh Linh","date":"13/3/2018","sum":"4.500.000 đồng","status":"Đã xử lý"},
			{"stt":3,"name":"Trương Thanh Trúc","date":"13/4/2018","sum":"6.500.000 đồng","status":"Đã xử lý"},
			{"stt":4,"name":"Nguyễn Quốc Tùng","date":"13/5/2018","sum":"5.500.000 đồng","status":"Đã xử lý"},
			{"stt":5,"name":"Võ Minh Thuận","date":"13/6/2018","sum":"6.500.000 đồng","status":"Đã xử lý"},
			{"stt":6,"name":"Nguyễn Hoàng Lâm","date":"13/7/2018","sum":"7.500.000 đồng","status":"Đã xử lý"},
			{"stt":7,"name":"Lê Nguyễn Tường Vy	","date":"13/8/2018","sum":"2.500.000 đồng","status":"Đã xử lý"},
			{"stt":8,"name":"Nguyễn Hồng Nhật","date":"13/9/2018","sum":"2.000.000 đồng","status":"Đã xử lý"},
			{"stt":9,"name":"Bách Hợp","date":"13/10/2018","sum":"4.000.000 đồng","status":"Đã xử lý"},
			{"stt":10,"name":"Nguyễn Ngọc Lan	","date":"13/11/2018","sum":"6.000.000 đồng","status":"Đã xử lý"},
			{"stt":11,"name":"Đỗ Ngọc Linh","date":"14/11/2018","sum":"8.000.000 đồng","status":"Đã xử lý"},
			{"stt":12,"name":"Huỳnh Hoàng Nam	","date":"15/11/2018","sum":"8.600.000 đồng","status":"Đã xử lý"},
			{"stt":13,"name":"Trương Thanh Trúc","date":"16/11/2018","sum":"10.600.000 đồng","status":"Đã xử lý"},
			{"stt":14,"name":"Trương Mạn Ngọc","date":"17/11/2018","sum":"10.600.000 đồng","status":"Đã xử lý"},
			]
   $scope.data=daTa;
});
