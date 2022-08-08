function closeWindow(){
	var alt=document.getElementById("alert");
	alt.style.display = "none";
}

function loadHeader() {
	var contentText=""; /*change to add alert*/
	let names =["CS_159","MA_261","ENGR_133","ECON_251","ME_200"];
	 var nav='<div class="header">\n\
				Boiler Schubox\n\
		  </div>\n\
		  <div id="navbar">\n\
			<a href="index">Home</a>\n\
			<a href="directory">Directory</a>\n\
			<div class="dropdown">\n\
				<button class="dropbtn">\n\
					Classes \n\
					<i class="fa fa-caret-down"></i>\n\
				</button>\n\
				<div class="dropdown-content">'
		for (var i=0;i<names.length;i++){
			
			nav+='<a href=class?'+names[i]+'>'+(names[i].split("_")).join(' ')+'</a></br>';
		}
		nav+='</div></div>'
	
		if(contentText != ""){
			var alert='<div class="banner" id="alert"><div class="alerttxt">'+contentText+'</div>';
			alert+='<button class="btn" onclick="closeWindow()"><span aria-hidden="true">&times;</span></button></div>';
			nav+=alert;
		}
		nav+='</div>';	 
	 document.getElementsByTagName("header")[0].innerHTML = nav; 
} 
