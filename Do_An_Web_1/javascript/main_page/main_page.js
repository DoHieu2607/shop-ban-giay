function menu()
         {  var giay =Array("Nike","Adidas","Puma","Converse","Vans");
            var i=0,s="",vitri=0;
            for(i=0;i<giay.length;i++)
            {   s=s+'<a href="main_page.html?'+i+'&'+vitri+'"><div class="menu1" align="center">'
                +giay[i]+'</div></a>';
                
            }
         document.getElementById("menu").innerHTML=s;
             
         }
         function layurl()
         {  var url=window.location.href;
                 var chuoitam=url.split('?');
                 var chuoitamcon=chuoitam[1];
                 var s="",lienket="",dem=0,sotrang=1;
                 var chuoicon=chuoitamcon.split('&');
                 var vitri=chuoicon[1];
                 switch(chuoicon[0])
            {   case '0':
                var giay= Array("Nike Air Max 270 Blue","Nike Air Max Plus ","Nike zoom","Nike Roshe Run","Nike air zoom pegasus"),i,dem=0,gia=Array("1000000 VNĐ","1500000 VNĐ","2000000 VNĐ","2500000 VNĐ","2600000 VNĐ");
                for(i=vitri;i<giay.length;i++)
                {
                    dem++;
                 s=s+'<a href="main_page.html?ct0&'+i+'">'+
                 '<div class="me" style="float:left;width:290px;height:380px;margin:5% 2% 0 5%;border:solid 1px red;box-shadow: 5px 5px 10px" align="center"><div style="width:100%;height:320px">'
                 +'<img src="image/main_page/anh/Nike'+i+'.jpg" style="width:250px;height:250px" class="hover" />'+
                 '<div style="font-size: 30px;background-color: antiquewhite;color:black">'+giay[i]+'</div>'
                 +'<div style="font-size: 30px;background-color: antiquewhite;color: orange">'+gia[i]+'</div>'+
		'</div></a>'+'<div style="margin-top:5px;color:black;float:left">Số lượng:<input type="number" min="1" name="soluong" style="width:30px"/></div></div>';
                 if(dem==3) break;
                 
                }
                sotrang=Math.ceil(giay.length/3);
                break;
            case '1':
                var giay =Array("Adidas running galaxy 2","Adidas running galaxy 3","Adidas yeezy boots 350 v2","Adidas thể thao st2043","Adidas nmd xr1");
                var i,dem=0,gia=Array("1000000 VNĐ","1500000 VNĐ","2000000 VNĐ","2500000 VNĐ","2600000 VNĐ");
                for(i=vitri;i<giay.length;i++)
                {dem++;
                   s=s+'<a href="main_page.html?ct1&'+i+'">'+
                   '<div class="me" style=" float:left;width:290px;height:380px;margin:5% 2% 0 5%;border:solid 1px red;box-shadow: 5px 5px 10px;" align="center"><div style="width:290px;height:352px">'
                 +'<img src="image/main_page/anh/Adidas'+i+'.jpg" style="width:250px;height:250px " class="hover"/>'+
                 '<div style="font-size: 30px;background-color: antiquewhite;color:black">'+giay[i]+'</div>'
                 +'<div style="font-size: 30px;background-color: antiquewhite;color: orange">'+gia[i]+'</div>'+
		'</div></a>'+'<div style="margin-top:5px;color:black;float:left">Số lượng:<input type="number" min="1" name="soluong" style="width:30px"/></div></div>';
                 if(dem==3) break; 
                }
                sotrang=Math.ceil(giay.length/3);
                break;
            case '2':
                var giay=Array("Puma classic basket lfs 2","Puma classic basket lfs 3","Puma Trax","Puma Trax","Puma Tishatsu Runner Knit");
                var i,dem=0,gia=Array("1000000 VNĐ","1500000 VNĐ","2000000 VNĐ","2500000 VNĐ","2600000 VNĐ");
                for(i=vitri;i<giay.length;i++)
                {   dem++;
                    s=s+'<a href="main_page.html?ct2&'+i+'">'+
                         '<div class="me" style=" float:left;width:290px;height:380px;margin:5% 2% 0 5%;border: solid 1px red;box-shadow: 5px 5px 10px;" align="center"><div style="width:290px;height:352px">'
                         +'<img src="image/main_page/anh/Puma'+i+'.jpg" style="width:250px;height:250px" class="hover" /> '+
                         '<div style="font-size:30px;background-color: antiquewhite;color:black">'+giay[i]+'</div>'+
                         '<div style="font-size:30px;background-color: antiquewhite;color:orange">'+gia[i]+'</div>'+
			'</div></a>'+'<div style="margin-top:5px;color:black;float:left">Số lượng:<input type="number" min="1" name="soluong" style="width:30px"/></div></div>';

                         
                    if(dem==3) break;
                }
               sotrang=Math.ceil(giay.length/3);
               break;
           case '3':
               var giay=Array("Converse classic đen","Converse chuck 2","Converse classic đỏ","Converse chuck 2 trắng"," converse classic xám");
                var i,dem=0,gia=Array("1000000 VNĐ","1500000 VNĐ","2000000 VNĐ","2500000 VNĐ","2600000 VNĐ");
                for(i=vitri;i<giay.length;i++)
                {   dem++;
                    s=s+'<a href="main_page.html?ct3&'+i+'">'+
                         '<div class"me" style=" float:left;width:290px;height:350px;margin:5% 2% 0 5%;border: solid 1px red;box-shadow: 5px 5px 10px;" align="center"><div style="width:290px;height:320px">'
                         +'<img src="image/main_page/anh/Converse'+i+'.jpg" style="width:250px;height:250px" class="hover"/> '+
                         '<div style="font-size:30px;background-color: antiquewhite;color:black">'+giay[i]+'</div>'+
                         '<div style="font-size:30px;background-color: antiquewhite;color:orange">'+gia[i]+'</div>'+
                         '</div></a>'+'<div style="margin-top:5px;color:black;float:left">Số lượng:<input type="number" min="1" name="soluong" style="width:30px"/></div></div>';
                         
                    if(dem==3) break;
                }
               sotrang=Math.ceil(giay.length/3);
               break;
           case '4':
               var giay=Array("Vans V183","Vans V185","Vans V1484","Vans V184","Cans V124");
                var i,dem=0,gia=Array("1000000 VNĐ","1500000 VNĐ","2000000 VNĐ","2500000 VNĐ","2600000 VNĐ");
                for(i=vitri;i<giay.length;i++)
                {   dem++;
                    s=s+'<a href="main_page.html?ct4&'+i+'">'+
                         '<div class="me" style=" float:left;width:290px;height:350px;margin:5% 2% 0 5%;border: solid 1px red;box-shadow: 5px 5px 10px;" align="center"><div style="width:290px;height:320px">'
                         +'<img src="image/main_page/anh/Vans'+i+'.jpg" style="width:250px;height:250px" class="hover"/> '+
                         '<div style="font-size:30px;background-color: antiquewhite;color:black">'+giay[i]+'</div>'+
                         '<div style="font-size:30px;background-color: antiquewhite;color:orange">'+gia[i]+'</div>'+
                         '</div></a>'+'<div style="margin-top:5px;color:black;float:left">Số lượng:<input type="number" min="1" name="soluong" style="width:30px"/></div></div>';

                         
                    if(dem==3) break;
                }
               sotrang=Math.ceil(giay.length/3);
               break;
            }
            for(i=1;i<=sotrang;i++)
             {vitri=(i-1)*3;
              lienket=lienket+'<a href="main_page.html?'+chuoicon[0]+'&'+vitri+'">'+i+'</a>';   
             }
          
            document.getElementById("taonoidung").innerHTML=s;
            document.getElementById("taotrang").innerHTML=lienket;
         }
         function layurl2()
         {  var url=window.location.href;
                 var chuoitam=url.split('?');
                 var chuoitamcon=chuoitam[1];
                 var s="",lienket="",dem=0,sotrang=1;
                 var chuoicon=chuoitamcon.split('&');
                 var vitri=chuoicon[1];
                 switch(chuoicon[0])
            {   case 'ctt0':
                var giay= Array("Nike Air Max 270 Blue","Nike Air Max Plus ","Nike zoom","Nike Roshe Run","Nike air zoom pegasus"),i,dem=0,gia=Array("1000000VNĐ");
                for(i=vitri;i<giay.length;i++)
                {
                    dem++;
                 s=s+'<a href="main_page.html?ct0&'+i+'">'+
                  '<div class="me" style=" float:left;width:290px;height:350px;margin:5% 2% 0 5%;border: solid 1px red;box-shadow: 5px 5px 10px;" align="center"><div style="width:290px;height:320px">'
                         +'<img src="image/main_page/anh/Nike'+i+'.jpg" style="width:250px;height:250px" class="hover"/> '+
                         '<div style="font-size:30px;background-color: antiquewhite;color:black">'+giay[i]+'</div>'+
                         '<div style="font-size:30px;background-color: antiquewhite;color:orange">'+gia[i]+'</div>'+
                         '</div></a>'+'<div style="margin-top:5px;color:black;float:left">Số lượng:<input type="number" min="1" name="soluong" style="width:30px"/></div></div>';
                 if(dem==1) break;
                 
                }
            
                break;
            case 'ctt1':
                var giay =Array("Adidas running galaxy 2","Adidas running galaxy 3","Adidas yeezy boots 350 v2","Adidas thể thao st2043","Adidas nmd xr1");
                var i,dem=0,gia= Array("10000vnđ");
                for(i=vitri;i<giay.length;i++)
                {dem++;
                   s=s+'<a href="main_page.html?ct1&'+i+'">'+
                   '<div class="me" style=" float:left;width:290px;height:380px;margin:10px 15px 0 40px;border:solid 1px red;box-shadow: 5px 5px 10px;" align="center"><div style="width:290px;height:352px">'
                 +'<img src="image/main_page/anh/Adidas'+i+'.jpg" style="width:250px;height:250px " class="hover"/>'+
                 '<div style="font-size: 30px;background-color: antiquewhite;color:black">'+giay[i]+'</div>'
                 +'<div style="font-size: 30px;background-color: antiquewhite;color: orange">'+gia[i]+'</div>'+
		'</div></a>'+'<div style="margin-top:5px;color:black;float:left">Số lượng:<input type="number" min="1" name="soluong" style="width:30px"/></div></div>';
                 if(dem==1) break; 
                }
                
                break;
            case 'ctt2':
                var giay=Array("Puma classic basket lfs 2","Puma classic basket lfs 3","Puma Trax","Puma Trax","Puma Tishatsu Runner Knit");
                var i,dem=0,gia=Array("100000vnđ");
                for(i=vitri;i<giay.length;i++)
                {   dem++;
                    s=s+'<a href="main_page.html?ct2&'+i+'">'+
                         '<div class="me" style=" float:left;width:290px;height:380px;margin:10px 15px 0 40px;border: solid 1px red;box-shadow: 5px 5px 10px;" align="center"><div style="width:290px;height:352px">'
                         +'<img src="image/main_page/anh/Puma'+i+'.jpg" style="width:250px;height:250px" class="hover" /> '+
                         '<div style="font-size:30px;background-color: antiquewhite;color:black">'+giay[i]+'</div>'+
                         '<div style="font-size:30px;background-color: antiquewhite;color:orange">'+gia[i]+'</div>'+
			'</div></a>'+'<div style="margin-top:5px;color:black;float:left">Số lượng:<input type="number" min="1" name="soluong" style="width:30px"/></div></div>';

                         
                    if(dem==1) break;
                }
               
               break;
           case 'ctt3':
               var giay=Array("Converse classic đen","Converse chuck 2","Converse classic đỏ","Converse chuck 2 trắng"," converse classic xám");
                var i,dem=0,gia=Array("100000vnđ");
                for(i=vitri;i<giay.length;i++)
                {   dem++;
                    s=s+'<a href="main_page.html?ct3&'+i+'">'+
                         '<div class"me" style=" float:left;width:290px;height:350px;margin:10px 15px 0 40px;border: solid 1px red;box-shadow: 5px 5px 10px;" align="center"><div style="width:290px;height:320px">'
                         +'<img src="image/main_page/anh/Converse'+i+'.jpg" style="width:250px;height:250px" class="hover"/> '+
                         '<div style="font-size:30px;background-color: antiquewhite;color:black">'+giay[i]+'</div>'+
                         '<div style="font-size:30px;background-color: antiquewhite;color:orange">'+gia[i]+'</div>'+
                         '</div></a>'+'<div style="margin-top:5px;color:black;float:left">Số lượng:<input type="number" min="1" name="soluong" style="width:30px"/></div></div>';
                         
                    if(dem==1) break;
                }
             
               break;
           case 'ctt4':
               var giay=Array("Vans V183","Vans V185","Vans V1484","Vans V184","Cans V124");
                var i,dem=0,gia=Array("100000vnđ");
                for(i=vitri;i<giay.length;i++)
                {   dem++;
                    s=s+'<a href="main_page.html?ct4&'+i+'">'+
                         '<div class="me" style=" float:left;width:290px;height:350px;margin:10px 15px 0 40px;border: solid 1px red;box-shadow: 5px 5px 10px;" align="center"><div style="width:290px;height:320px">'
                         +'<img src="image/main_page/anh/Vans'+i+'.jpg" style="width:250px;height:250px" class="hover"/> '+
                         '<div style="font-size:30px;background-color: antiquewhite;color:black">'+giay[i]+'</div>'+
                         '<div style="font-size:30px;background-color: antiquewhite;color:orange">'+gia[i]+'</div>'+
                         '</div></a>'+'<div style="margin-top:5px;color:black;float:left">Số lượng:<input type="number" min="1" name="soluong" style="width:30px"/></div></div>';

                         
                    if(dem==1) break;
                }
               
               break;
            }
          
            document.getElementById("taonoidung2").innerHTML=s;
            
         }
         function taourl()
         {  var url=window.location.href;
            var chuoitam=url.split('?');
            var chuoitam1=chuoitam[1];
            var s="",dem=0,i;
            var chuoicon=chuoitam1.split('&');
            var vitri=chuoicon[1];
            switch(chuoicon[0])
            {
                case 'ct0':
                var giay= Array("Nike Air Max 270 Blue","Nike Air Max Plus ","Nike zoom","Nike Roshe Run","Nike air zoom pegasus");
                var ct1=Array("Mẫu giày giúp tăng chiều cao lên đên 3 cm","Công nghệ đệm đế Flyknit có tính chất tĩnh cho cấu trúc và độ bền, tạo cảm giác linh hoạt, thoái mái tối đa khi chạy"
                        ,"Giày chất liệu tốt , nhẹ mang êm chân thoải mái.",
                        "Giày Nike Roshe Run màu đen đế trắng là một siêu phẩm trong thế giới giày thể thao. Với Giày Nike Air Max bạn hoàn toàn nổi bật tại bất cứ nơi đâu.",
                        " Là phiên bản mới nhất của dòng giày chạy bộ cao cấp Pegasus, giày Nike Air Zoom Pegasus 34 mang vẻ ngoài cực kì mạnh mẽ và nam tính, với cách phối màu mới lạ hoàn toàn.");
                var ct2=Array("Thiết kế gọn, đơn giản giúp bạn có thể mix với rất nhiều bộ đồ để đi chơi, đi làm.","Thân giày với thiết kế đan cùng những lỗ trên lưỡi gà tạo sự thông thoáng khí tối đa.",
                "Dễ dàng khi phối đồ, ngoài việc chính dùng để tập luyện bạn có thể kết hợp để đi chơi, dạo phố, Du lịch, Party, ...",""," Sự kết hợp của bộ đôi Cushlon ST cao cấp và hai túi khí Air Zoom tại đế giữa mang đến sự đàn hồi hay khả năng thích nghi trên đường chạy vô cùng thần thánh, cho bàn chân nguồn năng lượng vô tận.");
                var ct3=Array("Đế giày thiết kế bằng cao su tự nhiên lâu bền, mềm dẻo, chân không có độ đàn hồi cao tạo cảm giác êm chân khi hoạt động.",
                "Đệm cao su kết hợp với công nghệ đế Air Max giúp đôi giày có khả năng phản lực cực tốt.","","","Upper của giày Nike Air Zoom Pegasus 34 được nâng cấp và sử dụng chất liệu Flymesh cực nhẹ và siêu thoáng, cho bàn chân cảm giác thoải mái lâu dài.");
                var ct4=Array("Chất liệu thấm mồ hôi khử mùi thông thoáng .","Đệm cao su kết hợp với công nghệ đế Air Max giúp đôi giày có khả năng phản lực cực tốt"
                        ,"","","");
                
                var gia=Array("10000000000vnđ");
                var dem=0;
                for(i=vitri;giay.length;i++)
                {dem++;
                    s=s+'<div style="width:300px;height:400px;border:solid 1px red;float:left;margin:10px 15px 0 10px;box-shadow: 5px 5px 10px;" align="center">'+
                       '<img src="image/main_page/anh/Nike'+i+'.jpg" style=" width:250px;height:250px"/>'+
                       '<div style="font-size:40px;background-color: antiquewhite;">'+giay[i]+'</div>'+
                         '<div style="font-size:40px;color:orange;margin-top:10px">'+gia[i]+'</div></div>'
                         +'<div style="width:500px;height:400px;float:left">'+
                         '<a href="main_page.html?0&0"><div style="background-color:red;width:100px;color:black">về danh sách</div></a>'+
                         '<div style="font-size:50px;color:#00cccc;text-transform:capitalize;">Chi tiết sản phẩm </div>'+
                         '<div style="font-size:25px;color:white;">'+ct1[i]+'</div>'+
                         '<div style="font-size:25px;color:white;">'+ct2[i]+'</div>'+
                         '<div style="font-size:25px;color:white;">'+ct3[i]+'</div>'+
                         '<div style="font-size:25px;color:white;>'+ct4[i]+'</div></div>';
               if(dem==1) break;     
                }
                break;
                case 'ct1':
                var giay= Array("Adidas running galaxy 2","Adidas running galaxy 3","Adidas yeezy boots 350 v2","Adidas thể thao st2043","Adidas nmd xr1");
                var gia=Array("10000vnđ");
                var ct1=Array("Hàng chính hãng được mua trực tiếp từ Store Adidas Japan.","Hàng chính hãng được mua trực tiếp từ Store Adidas Japan.",
                "Là dòng giày ADIDAS YEEZY được các bạn trẻ săn lùng.",
                "Thiết Kế Đẹp, Giá Rẻ, Chất Liệu Tốt,mềm mại,đi không đau chân - Bạn có thể mang đi dạo phố, picnic cùng bạn bè, đi chơi xa .Với mẫu giày này bạn có thể kết hợp với quần jean-áo sơ mi hoặc áo thun.",
                "Mang đến cho bạn phong cách trẻ trung năng động. Dễ dàng phối đồ với giày Adidas NMD là điều bạn dễ dàng nhận thấy");
                var dem=0;
                for(i=vitri;giay.length;i++)
                {dem++;
                    s=s+'<div style="width:300px;height:400px;border:solid 1px red;float:left;margin:10px 15px 0 10px;box-shadow: 5px 5px 10px;" align="center">'+
                       '<img src="image/main_page/anh/Adidas'+i+'.jpg" style=" width:250px;height:250px"/>'+
                       '<div style="font-size:40px;background-color: antiquewhite;">'+giay[i]+'</div>'+
                         '<div style="font-size:40px;color:orange">'+gia[i]+'</div></div>'
						 
                         +'<div style="width:500px;height:400px;float:left">'+
                         '<a href="main_page.html?1&0"><div style="background-color:red;width:100px;color:black">về danh sách</div></a>'+
                         '<div style="font-size:50px;color:#00cccc;text-transform:capitalize;">Chi tiết sản phẩm :</div>'+
                         '<div style="font-size:25px;color:white;">'+ct1[i]+'</div></div>';
               if(dem==1) break;     
                }
                break;
                case 'ct2':
                var giay= Array("Puma classic basket lfs 2","Puma classic basket lfs 3","Puma Trax","Puma Trax","Puma Tishatsu Runner Knit");
                var gia=Array("10000vnđ");
                var dem=0;
                for(i=vitri;giay.length;i++)
                {dem++;
                    s=s+'<div style="width:300px;height:400px;border:solid 1px red;float:left;margin:10px 15px 0 10px;box-shadow: 5px 5px 10px;" align="center">'+
                       '<img src="image/main_page/anh/Puma'+i+'.jpg" style=" width:250px;height:250px"/>'+
                       '<div style="font-size:40px;background-color: antiquewhite;">'+giay[i]+'</div>'+
                         '<div style="font-size:40px;color:orange">'+gia[i]+'</div></div>'
						 +'<div style="width:500px;height:400px;float:left">'+
                         '<a href="main_page.html?2&0"><div style="background-color:red;width:100px;color:black">về danh sách</div></a>'+
                         '<div style="font-size:50px;color:#00cccc;text-transform:capitalize;">Chi tiết sản phẩm :</div>'+
                         '<div style="font-size:25px;color:white;">Đều có thể mặc đi hàng ngày và cũng là giày thể thao.</div></div>';
               if(dem==1) break;     
                }
                break;
                case 'ct3':
                var giay= Array("Converse classic đen","Converse chuck 2","Converse classic đỏ","Converse chuck 2 trắng"," converse classic xám");
                var gia=Array("10000vnđ");
                var dem=0;
                for(i=vitri;giay.length;i++)
                {dem++;
                    s=s+'<div style="width:300px;height:400px;border:solid 1px red;float:left;margin:10px 15px 0 10px;box-shadow: 5px 5px 10px;" align="center">'+
                       '<img src="image/main_page/anh/Converse'+i+'.jpg" style=" width:250px;height:250px"/>'+
                       '<div style="font-size:40px;background-color: antiquewhite;">'+giay[i]+'</div>'+
                         '<div style="font-size:40px;color:orange">'+gia[i]+'</div></div>'
                         +'<div style="width:500px;height:400px;float:left">'+
                         '<a href="main_page.html?3&0"><div style="background-color:red;width:100px;color:black">về danh sách</div></a>'+
                         '<div style="font-size:50px;color:#00cccc;text-transform:capitalize;">Chi tiết sản phẩm :</div>'+
                          '<div style="font-size:25px;color:white;">Chất liệu vải dệt mềm mại, êm chân.</div>'+
                         '<div style="font-size:25px;color:white;">Kiểu dáng trẻ trung, hợp thời trang.</div>'+
                         '<div style="font-size:25px;color:white;">Thiết kế mũi giày tròn kết hợp form ôm sát chân.</div>'+
                         '<div style="font-size:25px;color:white;">Gam màu trung tính, dễ phối đồ.</div>'+
                         '</div>';
               if(dem==1) break;     
                }
                break;
                case 'ct4':
                var giay= Array("Vans V183","Vans V185","Vans V1484","Vans V184","Cans V124");
                var gia=Array("10000vnđ");
                var ct1=Array("Đế bằng","Đế bằng","Đế cao","Đế bằng","Đế cao");
                var dem=0;
                for(i=vitri;giay.length;i++)
                {dem++;
                    s=s+'<div style="width:300px;height:400px;border:solid 1px red;float:left;margin:10px 15px 0 10px;box-shadow: 5px 5px 10px;" align="center">'+
                       '<img src="image/main_page/anh/Vans'+i+'.jpg" style=" width:250px;height:250px"/>'+
                       '<div style="font-size:40px;background-color: antiquewhite;">'+giay[i]+'</div>'+
                         '<div style="font-size:40px;color:orange">'+gia[i]+'</div></div>'
                         +'<div style="width:500px;height:400px;float:left">'+
                         '<a href="main_page.html?4&0"><div style="background-color:red;width:100px;color:black">về danh sách</div></a>'+
                         '<div style="font-size:50px;color:#00cccc;text-transform:capitalize;">Chi tiết sản phẩm :</div>'
                 +'<div style="font-size:25px;color:white;">'+ct1[i]+'</div>'+
                        '</div>';
               if(dem==1) break;     
                }
                break;
            }
          document.getElementById("taonoidung1").innerHTML=s;   
         }
         function timkiem()
         {  var timkiem= document.getElementById("search").value;
            var giay=Array("Nike","Adidas","Puma","Converse","Vans");
            var giay1= Array("Nike Air Max 270 Blue","Nike Air Max Plus","Nike zoom","Nike Roshe Run","Nike air zoom pegasus");
            var giay2= Array("Adidas running galaxy 2","Adidas running galaxy 3","Adidas yeezy boots 350 v2","Adidas thể thao st2043","Adidas nmd xr1");
            var giay3= Array("Puma classic basket lfs 2","Puma classic basket lfs 3","Puma Trax","Puma Trax","Puma Tishatsu Runner Knit");
            var giay4= Array("Converse classic đen","Converse chuck 2","Converse classic đỏ","Converse chuck 2 trắng"," converse classic xám");
            var giay5= Array("Vans V183","Vans V185","Vans V1484","Vans V184","Cans V124");
            var i,vitri=0,s=0;
            for(i=0;i<giay.length;i++)
            {s='main_page.html?'+i+'&'+vitri;
                        if(timkiem.toLowerCase()==giay[i].toLowerCase()) {window.location=s;}
            }
            for(i=0;i<giay1.length;i++)
            {
                s='main_page.html?ctt0'+'&'+i;
              if(timkiem.toLowerCase()==giay1[i].toLowerCase()) {window.location=s;}  
            }
            for(i=0;i<giay2.length;i++)
            {
                s='main_page.html?ctt1'+'&'+i;
              if(timkiem.toLowerCase()==giay2[i].toLowerCase()) {window.location=s;}  
            }
            for(i=0;i<giay3.length;i++)
            {
                s='main_page.html?ctt2'+'&'+i;
              if(timkiem.toLowerCase()==giay3[i].toLowerCase()) {window.location=s;}  
            } 
            for(i=0;i<giay4.length;i++)
            {
                s='main_page.html?ctt3'+'&'+i;
              if(timkiem.toLowerCase()==giay4[i].toLowerCase()) {window.location=s;}  
            } 
            for(i=0;i<giay5.length;i++)
            {
                s='main_page.html?ctt4'+'&'+i;
              if(timkiem.toLowerCase()==giay5[i].toLowerCase()) {window.location=s;}  
            } 
         }
         window.onload=function()
         {
             menu();
             layurl();
             layurl2();
             taourl();
             timkiem();
         }