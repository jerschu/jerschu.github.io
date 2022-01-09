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

function loadHeader() {
	var contentText="This is a test"
	let names =[
		["CS",159,["CS_159"]],
		["MA",261,["MA_261_final"]],
		["ENGR",133,["ENGR_133","ENGRmatlab"]]
		];
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
			nav+='<a href=class?'+names[i][2].join("|")+'>'+names[i][0]+' '+names[i][1]+'</a></br>';
		}
		nav+='</div></div>'
	
		if(contentText != ""){
			var alert="<html><head><style>";
			alert+='.banner{background-color:red; display:flex;width:100%;}';
			alert+='.alerttxt{display: inline-block; padding:10px; flex-grow: 1; color: white; font-family: "Helvetica Neue", Helvetica;}';
			alert+='.btn{ display: inline-block background-color: red; border-style: solid; border-color: red; width: 50px; background:red !important; background-color:red !important; color:white !important;}';
			alert+='</style><script>function closeWindow(){	var alt=document.getElementById("alert");alt.style.display = "none";}</script></head><body>';
			alert+='<div class="banner" id="alert">	<div class="alerttxt">'+contentText+'</div>';
			alert+='<button class="btn" onclick="closeWindow()"><span aria-hidden="true">&times;</span></button></div>';
			alert+='</body></html>';
			nav+=alert;
		}
		nav+='</div>';	 
	 document.getElementsByTagName("header")[0].innerHTML = nav; 
} 
