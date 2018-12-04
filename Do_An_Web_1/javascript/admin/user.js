var app = angular.module('userApp', ['angularUtils.directives.dirPagination']);


app.controller('listUserData', function($scope) {
   var daTa=[
			{"name":"Trương Mạn Ngọc","date":"22/10/1999","email":"ngoctruong@gmai.com","phone":"0101234567","address":"TP.HCM"},
			{"name":"Nguyễn Ngọc Khánh Linh","date":"12/7/1999","email":"linhngoc@gmail.com","phone":"0111234567","address":"TP.HCM"},
			{"name":"Trương Thanh Trúc","date":"1/1/1999","email":"truc@gmail.com","phone":"0121234567","address":"TP.HCM"},
			{"name":"Nguyễn Quốc Tùng","date":"2/1/1999","email":"tunglun@gmail.com","phone":"0131234567","address":"TP.HCM"},
			{"name":"Võ Minh Thuận","date":"3/1/1999","email":"thuan@gmail.com","phone":"0141234567","address":"TP.HCM"},
			{"name":"Nguyễn Hoàng Lâm","date":"3/4/1999","email":"lam@gmail.com","phone":"5141234567","address":"TP.HCM"},
			{"name":"Lê Nguyễn Tường Vy","date":"3/5/1999","email":"vy@gmail.com","phone":"5241234567","address":"TP.HCM"},
			{"name":"Nguyễn Hồng Nhật","date":"3/6/1999","email":"Nhat@gmail.com","phone":"5341234567","address":"TP.HCM"},
			{"name":"Bách Hợp","date":"3/7/1999","email":"hop@gmail.com","phone":"5351234567","address":"TP.HCM"},
			{"name":"Nguyễn Ngọc Lan","date":"3/8/1999","email":"Lan@gmail.com","phone":"0351234567","address":"TP.HCM"},
			{"name":"Đỗ Ngọc Linh","date":"3/9/1999","email":"Linh@gmail.com","phone":"0361234567","address":"TP.HCM"},
			{"name":"Đỗ Trung Hiếu","date":"3/10/1999","email":"trunghieu9946@gmail.com","phone":"0341234567","address":"TP.HCM"},
			{"name":"Huỳnh Hoàng Nam","date":"3/11/1999","email":"namhuynh@gmail.com","phone":"0541234567","address":"TP.HCM"},
			{"name":"Trương Thanh Trúc","date":"1/1/1999","email":"truc@gmail.com","phone":"0551234567","address":"TP.HCM"},
			]
   $scope.data=daTa;
});
