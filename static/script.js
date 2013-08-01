var httpobj;
function get_problem(number){
  httpobj = createHttpRequest();
  httpobj.onreadystatechange = onReadyStateChanged;
  httpobj.open("GET", "problems/" + number + ".txt", true);
  httpobj.send(null);
  pos = document.getElementById("problem");
  pos.parentNode.className = "problem" + number;
}

function onReadyStateChanged(){
  if(httpobj.readyState == 4){
    pos.childNodes[0].nodeValue = httpobj.responseText;
  }
}

function createHttpRequest(){
  if(window.ActiveXObject){
    try{
      return new ActiveXObject("Msxml2.XMLHTP")
    } catch(e) {
      try {
        return new ActiveXObject("Microsoft.XMLHTTP")
      } catch(e2) {
        return null
      }
    }
  } else if(window.XMLHttpRequest){
    return new XMLHttpRequest()
  } else {
    return null
  }
}


function init(){
    tds = document.getElementsByTagName("td");
    for (var i = 0; i < tds.length; i++){
        textdata = tds[i].childNodes[0].text;
        tds[i].innerText = textdata;
        tds[i].onclick = function() {
            get_problem(this.id.replace("problem", ""));
        }
    }
}


if(window.addEventListener) window.addEventListener("load", init, false);
else if(window.attachEvent) window.attachEvent("onload", init);
else window.onload = init;
