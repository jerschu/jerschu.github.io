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
	var contentText=""; /*change to add alert*/
	let names =[
		 ["COMPUTER SCIENCE ",["CS_159"]],
		 ["MATH ",["MA_261"]],
		 ["ENGINEERING ",["ENGR_133","ME_200"]],
		 ["ECON ",["ECON_251"]]
		];
	 var nav='<div class="header">\n\
		  Boiler Schubox\n\
		  </div>\n\
		  <div id="navbar">\n\
		  <a href="index">Home</a>\n\
	          <a href="directory">Directory</a>'
	  for(var j-0;j<names.length;j++){
		nav+='<div class="dropdown">\n\
			<button class="dropbtn">\n\
			'+names[j][0]+' \n\
			<i class="fa fa-caret-down"></i>\n\
			</button>\n\
			<div class="dropdown-content">'
		for (var i=0;i<names[j][1][i].length;i++){

			nav+='<a href=class?'+names[j][1][i]+'>'+(names[j][1][i].split("_")).join(' ')+'</a></br>';
		}
	   }
			
	   nav+='</div></div>'

	   if(contentText != ""){
		var alert='<div class="banner" id="alert"><div class="alerttxt">'+contentText+'</div>';
		alert+='<button class="btn" onclick="closeWindow()"><span aria-hidden="true">&times;</span></button></div>';
		nav+=alert;
	   }
	   nav+='<a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="resize()">&#9776;</a>';
	   nav+='</div>';	 
	   document.getElementsByTagName("header")[0].innerHTML = nav; 
} 
