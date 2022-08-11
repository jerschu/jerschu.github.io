var id = "content";

function initalizeStyle(item,size,space,para) {

  changeSize(item,size);
  changeSpacing(item,space);
  changeParaSpacing(item,para)
}

function initalizedocStyle(item,size,space,para) {
  var fram=item.frameElement;
  preplink(fram);
  changeSize(fram,size);
  changeSpacing(fram,space);
  changeParaSpacing(fram,para)

}

function preplink(item) {
  var spans = item.querySelectorAll("span");
  for (var i = 0; i < spans.length; i++) {
    spans[i].className = "";
  }
  var elem = item.querySelectorAll("*");
  for (var i = 0; i < elem.length; i++) {
    elem[i].style.margin = "0px";
  }
}

function changeSize(item, size) {

  var val = size;

  var tags = ["h1", "h3", "h4", "h5", "h6", "p", "h2","li"]
  var counter = 0
  for (var j = 0; j < tags.length; j++) {

    var h1Elements = item.querySelectorAll(tags[j]);
    if (h1Elements.length == 0) {
      counter++;
    }
    if (j>5){
	counter++;
    }
    for (var i = 0; i < h1Elements.length; i++) {
      if (h1Elements[i].classList.contains("title")){
	     h1Elements[i].style.fontSize = ((Math.sqrt(10) - Math.sqrt(1)) * (val)) + "px";
      }else{
	     h1Elements[i].style.fontSize = ((Math.sqrt(10) - Math.sqrt(j - counter + 2)) * (val)) + "px";  
      }

    h1Elements[i].style.paddingTop="0";
    h1Elements[i].style.paddingBottom="0";


    }
  }

}

function changeParaSpacing(item,space) {

  var val = space;

  var tags = ["p", "h1", "h2", "h3", "h4", "h5", "h6"]
  for (var j = 0; j < tags.length; j++) {
    var h1Elements = item.querySelectorAll(tags[j]);
    for (var i = 0; i < h1Elements.length; i++) {
      h1Elements[i].style.paddingBottom = space + 'px';
      h1Elements[i].style.paddingTop = space + 'px';
    }
  }
}

function changeSpacing(item,space) {
  var val = space;

  var tags = ["p", "h1", "h2", "h3", "h4", "h5", "h6"]
  for (var j = 0; j < tags.length; j++) {
	  
    var h1Elements = item.querySelectorAll(tags[j]);
    for (var i = 0; i < h1Elements.length; i++) {
      h1Elements[i].style.lineHeight = (val*100) + '%';

    }
  }
}


function changeSizeForAll() {

  var elements = document.getElementsByClassName("notediv");
  var size = document.getElementById("size").value;
  document.querySelector('#size_out').value = size;
  for (var i = 0; i < elements.length; i++) {

    changeSize(elements[i],size);
  }
}

function changeSpacingForAll() {
  var elements = document.getElementsByClassName("notediv");
  var space = document.getElementById("space").value
  document.querySelector('#space_out').value = space;
  for (var i = 0; i < elements.length; i++) {
    changeSpacing(elements[i],space);
  }
}

function changeParaSpacingForAll() {
  var elements = document.getElementsByClassName("notediv");
  var space = document.getElementById("para-space").value
  document.querySelector('#para_space_out').value = space;
  for (var i = 0; i < elements.length; i++) {
    changeParaSpacing(elements[i],space);
  }
}
