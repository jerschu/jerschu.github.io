function closeWindow(){
	var alt=document.getElementById("alert");
	alt.style.display = "none";
}

function resize() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function loadHeader() {
	var contentText="test"; /*change to add alert*/
	let names =[
		 ["COMPUTER SCIENCE ",["CS_159"]],
		 ["MATH ",["MA_261","MA_265","MA_266"]],
		 ["ENGINEERING ",["ENGR_133","ME_200"]],
		 ["ECON ",["ECON_251"]]
		];
	
		var nav="";
		nav+='<div class="header"><img src="title.png" style="padding:10px;max-width:100%;max-height:85px">\
		  </div><div class="topnav" id="myTopnav">\n\
		<a href="" style="padding:5px"><img src="mainlogo.png" style="height:33px"></a>\n\
		<a href="directory">Directory</a>'
		
		for(var j=0;j<names.length;j++){
		nav+='<div class="dropdown">\n\
			<button class="dropbtn">'+names[j][0]+'\n\
				<i class="fa fa-caret-down"></i>\n\
			</button>\n\
			<div class="dropdown-content">'
			for(var i=0;i<names[j][1].length;i++){
			  nav+='<a href="class?'+names[j][1][i]+'">'+(names[j][1][i].split("_")).join(' ')+'</a>'
			
			}
		nav+='</div></div>'
		}
	 
		nav+='<a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="resize()">&#9776;</a></div>'

	   if(contentText != ""){
		var alert='<div class="banner" id="alert"><div class="alerttxt">'+contentText+'</div>';
		alert+='<button type="button" class="btn" onclick="closeWindow()"><span aria-hidden="true">&times;</span></button></div>';
		nav+=alert;
	   }
	   
	   nav+='</div>';	 
	   document.getElementsByTagName("header")[0].innerHTML = nav; 
} 
