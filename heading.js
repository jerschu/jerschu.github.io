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
			<a class="'+isActive("find")+'" href="find">Find</a>\n\
			<div class="dropdown">\n\
				<button class="dropbtn">\n\
					Classes \n\
					<i class="fa fa-caret-down"></i>\n\
				</button>\n\
				<div class="dropdown-content">'
		for (var i=0;i<names.length;i++){
			nav+='<a href=class?'+names[i][2].join("|")+'>'+names[i][0]+' '+names[i][1]+'</a></br>';
		}
		nav+='</div></div></div>';	 
	 document.getElementsByTagName("header")[0].innerHTML = nav; 
} 
