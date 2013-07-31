var httpobj;
function get_question(number){
  httpobj = createHttpRequest();
  httpobj.onreadystatechange = onReadyStateChanged;
  httpobj.open("GET", "questions/" + number + ".txt", true);
  httpobj.send(null);
  pos = document.getElementById("question");
  pos.parentNode.className = "question" + number;
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
