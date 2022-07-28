function isActive(name){
	var path = window.location.pathname;
	var page = path.split("/").pop();
	if(page==name){
		return " active";
	}
	else
	{
		if(page =="" && name=="index")
		{
			return " active";
		}
		else
		{
			return "";
		}
	}
}
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
			<a class="'+isActive("index")+'" href="index">Home</a>\n\
			<a class="'+isActive("directory")+'" href="directory">Directory</a>\n\
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
			var alert="<html><head><style>";
			alert+='.banner{background-color:red; display:flex;width:100%;}';
			alert+='.alerttxt{display: inline-block; line-height:50px; margin-left: 20px; flex-grow: 1; color: white; font-family: "Helvetica Neue", Helvetica;}';
			alert+='.btn{ display: inline-block background-color: red; border-style: align-items: center; solid; border-color: red; border: 0; width: 50px; background:red !important; background-color:red !important; color:white !important;}';
			alert+='</style></head><body>';
			alert+='<div class="banner" id="alert">	<div class="alerttxt">'+contentText+'</div>';
			alert+='<button class="btn" onclick="closeWindow()"><span aria-hidden="true">&times;</span></button></div>';
			alert+='</body></html>';
			nav+=alert;
		}
		nav+='</div>';	 
	 document.getElementsByTagName("header")[0].innerHTML = nav; 
} 
