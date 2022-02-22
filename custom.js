
var id="content";

function initalizeStyle(item){
	changeFont(item);
	changeSize(item);
	changeSpacing(item);
}

function resize(item)
// function execute while load the iframe
{
  var frame = item;
  // set the height of the iframe as 
  // the height of the iframe content
  frame.style.height = 
  (frame.contentWindow.document.body.scrollHeight + 50) + 'px';     
}

function changeFont(item){
	  var frm=item.contentWindow
	  if(frm.document.getElementById(id).classList.contains("Handwritting")){
	  	frm.document.getElementById(id).classList.remove("Handwritting");
	  }
	  if(frm.document.getElementById(id).classList.contains("Simple")){
	  	frm.document.getElementById(id).classList.remove("Simple");
	  }
	  if(frm.document.getElementById(id).classList.contains("Coding")){
	  	frm.document.getElementById(id).classList.remove("Coding");
	  }

	  frm.document.getElementById(id).classList.add(document.getElementById("font").value);
	  resize(item);

}

function changeSize(item){
	  var frm=item.contentWindow
	  var val=document.getElementById("size").value;
	  document.querySelector('#size_out').value = val;

	var tags=["h1","h2","h3","h4","h5","h6","p","li"]
	var counter=0
	for(var j = 0; j < tags.length; j++){
		var h1Elements = frm.document.getElementsByTagName(tags[j]);
		if(h1Elements.length==0){
			counter++;
		}
		for(var i = 0; i < h1Elements.length; i++) {
		   h1Elements[i].style.fontSize =((Math.sqrt(10)-Math.sqrt(j-counter+2))*(val))+"px";
		}
	}

	  resize(item);

}

function changeSpacing(item){
	  var frm=item.contentWindow;
	  var val=document.getElementById("space").value;
	  document.querySelector('#space_out').value = val;

	var tags=["p","h1","h2","h3","h4","h5","h6"]
	for(var j = 0; j < tags.length; j++){
		var h1Elements = frm.document.getElementsByTagName(tags[j]);
		for(var i = 0; i < h1Elements.length; i++) {
		   h1Elements[i].style.lineHeight =(val*100) + '%';
		}
	}

	resize(item);
}

function changeFontForAll(){
	var elements= document.getElementsByTagName("iframe");
	for(var i=0;i<elements.length;i++){
		changeFont(elements[i]);
	}
}

function changeSizeForAll(){
	var elements= document.getElementsByTagName("iframe");
	for(var i=0;i<elements.length;i++){
		changeSize(elements[i]);
	}
}

function changeSpacingForAll(){
	var elements= document.getElementsByTagName("iframe");
	for(var i=0;i<elements.length;i++){
		changeSpacing(elements[i]);
	}
}
