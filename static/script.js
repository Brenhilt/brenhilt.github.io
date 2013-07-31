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
