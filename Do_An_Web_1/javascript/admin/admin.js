var app = angular.module('adminApp', ['angularUtils.directives.dirPagination']);


app.controller('listData', function($scope) {
   var daTa=[
			{img:'image/main_page/anh/Nike0.jpg',"id":1,"name":"Nike Air Max 270 Blue","company":"Nike","price":"1000000 VND"},
			{img:'image/main_page/anh/Nike1.jpg',"id":2,"name":"Nike Air Max Plus","company":"Nike","price":"1500000 VND"},
			{img:'image/main_page/anh/Nike2.jpg',"id":3,"name":"Nike zoom","company":"Nike","price":"2000000 VND"},
			{img:'image/main_page/anh/Nike3.jpg',"id":4,"name":"Nike Roshe Run","company":"Nike","price":"2500000 VND"},
			{img:'image/main_page/anh/Nike4.jpg',"id":5,"name":"Nike air zoom pegasus","company":"Nike","price":"2600000 VND"},
			{img:'image/main_page/anh/Adidas0.jpg',"id":7,"name":"Adidas running galaxy 2","company":"Adidas","price":"1000000 VND"},
			{img:'image/main_page/anh/Adidas1.jpg',"id":8,"name":"Adidas running galaxy 3","company":"Adidas","price":"1500000 VND"},
			{img:'image/main_page/anh/Adidas2.jpg',"id":9,"name":"Adidas yeezy boots 350 v2","company":"Adidas","price":"2000000 VND"},
			{img:'image/main_page/anh/Adidas3.jpg',"id":10,"name":"Adidas thể thao st2043","company":"Adidas","price":"2500000 VND"},
			{img:'image/main_page/anh/Adidas4.jpg',"id":11,"name":"Adidas nmd xr1","company":"Adidas","price":"2600000 VND"},
			{img:'image/main_page/anh/Puma0.jpg',"id":12,"name":"Puma classic basket lfs 2","company":"Puma","price":"1000000 VND"},
			{img:'image/main_page/anh/Puma1.jpg',"id":13,"name":"Puma classic basket lfs 3","company":"Puma","price":"1500000 VND"},
			{img:'image/main_page/anh/Puma2.jpg',"id":14,"name":"Puma Trax","company":"Puma","price":"2000000 VND"},
			{img:'image/main_page/anh/Puma3.jpg',"id":15,"name":"Puma Trax","company":"Puma","price":"2500000 VND"},
			{img:'image/main_page/anh/Puma4.jpg',"id":16,"name":"Puma Tishatsu Runner Knit","company":"Puma","price":"2600000 VND"},
			{img:'image/main_page/anh/Converse0.jpg',"id":17,"name":"Converse classic đen","company":"Converse","price":"1000000 VND"},
			{img:'image/main_page/anh/Converse1.jpg',"id":18,"name":"Converse chuck 2","company":"Converse","price":"1500000 VND"},
			{img:'image/main_page/anh/Converse2.jpg',"id":19,"name":"Converse classic đỏ","company":"Converse","price":"2000000 VND"},
			{img:'image/main_page/anh/Converse3.jpg',"id":20,"name":"Converse chuck 2 trắng","company":"Converse","price":"2500000 VND"},
			{img:'image/main_page/anh/Converse4.jpg',"id":21,"name":"converse classic xám","company":"Converse","price":"2600000 VND"},
			{img:'image/main_page/anh/Vans0.jpg',"id":22,"name":"Vans V183","company":"Vans","price":"1000000 VND"},
			{img:'image/main_page/anh/Vans1.jpg',"id":23,"name":"Vans V185","company":"Vans","price":"1500000 VND"},
			{img:'image/main_page/anh/Vans2.jpg',"id":24,"name":"Vans V1484","company":"Vans","price":"2000000 VND"},
			{img:'image/main_page/anh/Vans3.jpg',"id":25,"name":"Vans V184","company":"Vans","price":"2500000 VND"},
			{img:'image/main_page/anh/Vans4.jpg',"id":26,"name":"Cans V124","company":"Vans","price":"2600000 VND"},
			]
   $scope.data=daTa;
});
function sanPham(name,company,gia)
{
	this.ten=name;
	this.hang=company;
	this.gia=gia;
}
function xoaSanPham()
{
	alert("Xóa thành công");
}
