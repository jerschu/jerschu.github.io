var id = "content";

function initalizeStyle(item) {
  changeSize(item);
  changeSpacing(item);
  resize(item);
}

function initalizedocStyle(item) {
  preplink(item);
  changeSize(item);
  changeSpacing(item);
  resize(item);
}

function preplink(item) {
  var frm = item.contentWindow

  var h1Elements = frm.document.getElementsByTagName("span");
  for (var i = 0; i < h1Elements.length; i++) {
    h1Elements[i].className = "";
  }
  resize(item)
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

function changeSize(item) {
  var frm = item.contentWindow
  var val = document.getElementById("size").value;
  document.querySelector('#size_out').value = val;

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
    h1Elements[i].style.paddingBottom="10px";


    }
  }
  preplink(item);

}

function changeSpacing(item) {
  var frm = item.contentWindow;
  var val = document.getElementById("space").value;
  document.querySelector('#space_out').value = val;

  var tags = ["p", "h1", "h2", "h3", "h4", "h5", "h6"]
  for (var j = 0; j < tags.length; j++) {
    var h1Elements = frm.document.getElementsByTagName(tags[j]);
    for (var i = 0; i < h1Elements.length; i++) {
      h1Elements[i].style.lineHeight = (val*100) + '%';

    }
  }
preplink(item);
  resize(item);
}


function changeSizeForAll() {

  var elements = document.getElementsByTagName("iframe");
  for (var i = 0; i < elements.length; i++) {

    changeSize(elements[i]);
  }
}

function changeSpacingForAll() {
  var elements = document.getElementsByTagName("iframe");
  for (var i = 0; i < elements.length; i++) {
    changeSpacing(elements[i]);
  }
}
