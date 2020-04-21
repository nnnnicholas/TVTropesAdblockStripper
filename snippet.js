var body = document.getElementsByTagName("body");
for (var x in body[0].childNodes){if(body[0].childNodes[x].tagName == "DIV" && body[0].childNodes[x].style.zIndex == 100001){body[0].childNodes[x].remove()}};
