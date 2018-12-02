var app = angular.module('adminApp', ['angularUtils.directives.dirPagination']);

app.controller('listData', function($scope) {
   var daTa=[
				{"id":1,"name":"","company":"Nike","price":"1000000 VND"},
				{"id":2,"name":"","company":"Nike","price":"1500000 VND"},
				{"id":3,"name":"","company":"Nike","price":"2000000 VND"},
				{"id":4,"name":"","company":"Nike","price":"2500000 VND"},
				{"id":5,"name":"","company":"Nike","price":"2600000 VND"},
				{"id":7,"name":"","company":"Adidas","price":"1000000"},
				{"id":8,"name":"","company":"Adidas","price":"1500000 VND"},
				{"id":9,"name":"","company":"Adidas","price":"2000000 VND"},
				{"id":10,"name":"","company":"Adidas","price":"2500000 VND"},
				{"id":11,"name":"","company":"Adidas","price":"2600000 VND"},
				{"id":12,"name":"","company":"Puma","price":"1000000"},
				{"id":13,"name":"","company":"Puma","price":"1500000 VND"},
				{"id":14,"name":"","company":"Puma","price":"2000000 VND"},
				{"id":15,"name":"","company":"Puma","price":"2500000 VND"},
				{"id":16,"name":"","company":"Puma","price":"2600000 VND"},
				{"id":17,"name":"","company":"Converse","price":"1000000"},
				{"id":18,"name":"","company":"Converse","price":"1500000 VND"},
				{"id":19,"name":"","company":"Converse","price":"2000000 VND"},
				{"id":20,"name":"","company":"Converse","price":"2500000 VND"},
				{"id":21,"name":"","company":"Converse","price":"2600000 VND"},
				{"id":22,"name":"","company":"Vans","price":"1000000"},
				{"id":23,"name":"","company":"Vans","price":"1500000 VND"},
				{"id":24,"name":"","company":"Vans","price":"2000000 VND"},
				{"id":25,"name":"","company":"Vans","price":"2500000 VND"},
				{"id":26,"name":"","company":"Vans","price":"2600000 VND"},
			]
   $scope.data=daTa;
});