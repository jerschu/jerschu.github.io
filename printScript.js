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
	  frm.document.getElementById(id).classList.remove("Handwritting");
	  frm.document.getElementById(id).classList.remove("Simple");
	  frm.document.getElementById(id).classList.remove("Coding");

	  frm.document.getElementById(id).classList.add(window.font);
	  resize(item);

}

function changeSize(item){
	  var frm=item.contentWindow
	  var val=window.size;


	var tags=["h1","h2","h3","h4","h5","h6","p"]
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
	  var val=window.space;


	var tags=["p","h1","h2","h3","h4","h5","h6"]
	for(var j = 0; j < tags.length; j++){
		var h1Elements = frm.document.getElementsByTagName(tags[j]);
		for(var i = 0; i < h1Elements.length; i++) {
		   h1Elements[i].style.lineHeight =(val*100) + '%';
		}
	}

	resize(item);
}
function prepPrint(){
	var subelem=document.getElementsByTagName("*");
	for(var i=0;i<subelem.length;i++){


		if(subelem[i].tagName=="IFRAME"){
			var stylesheet = subelem[i].contentWindow.document.head.children[3].innerHTML;
			var id = subelem[i].parentElement.id;
			var final = "<style type='stylesheet/less'>#"+id+"{"+stylesheet+"}<//style>"
			
		
			subelem[i].parentElement.innerHTML=subelem[i].contentWindow.document.body.innerHTML;
		}
	}
	window.print();
}
