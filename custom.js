var id = "content";

function initalizeStyle(item,size,space) {

  changeSize(item,size);
  changeSpacing(item,space);
  resize(item);
}

function initalizedocStyle(item,size,space) {
  var fram=item.frameElement;
  preplink(fram);
  changeSize(fram,size);
  changeSpacing(fram,space);
  resize(fram);
}

function preplink(item) {
  var frm = (item.contentWindow || item.contentDocument);
  frm.document.firstChild.children[1].children[4].style="max-width:95%; margin:2.5%;"
  var h1Elements = frm.document.getElementsByTagName("span");
  for (var i = 0; i < h1Elements.length; i++) {
    h1Elements[i].className = "";
  }
  resize(item);
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

function changeSize(item, size) {
  var frm = item.contentWindow;
  var val = size;

  var tags = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "li"]
  var counter = 0
  for (var j = 0; j < tags.length; j++) {

    var h1Elements = frm.document.getElementsByTagName(tags[j]);
    if (h1Elements.length == 0) {
      counter++;
    }
    for (var i = 0; i < h1Elements.length; i++) {
      h1Elements[i].style.fontSize = ((Math.sqrt(10) - Math.sqrt(j - counter + 2)) * (val)) + "px";
		h1Elements[i].style.paddingTop="0";
    h1Elements[i].style.paddingBottom="5px";


    }
  }
  resize(item);

}

function changeSpacing(item,space) {
  var frm = item.contentWindow;
  var val = space;

  var tags = ["p", "h1", "h2", "h3", "h4", "h5", "h6"]
  for (var j = 0; j < tags.length; j++) {
    var h1Elements = frm.document.getElementsByTagName(tags[j]);
    for (var i = 0; i < h1Elements.length; i++) {
      h1Elements[i].style.lineHeight = (val*100) + '%';

    }
  }
  resize(item);
}


function changeSizeForAll() {

  var elements = document.getElementsByTagName("iframe");
  var size = document.getElementByID("size").value;
  for (var i = 0; i < elements.length; i++) {

    changeSize(elements[i],size);
  }
}

function changeSpacingForAll() {
  var elements = document.getElementsByTagName("iframe");
  var space = document.getElementByID("space").value
  for (var i = 0; i < elements.length; i++) {
    changeSpacing(elements[i],space);
  }
}
