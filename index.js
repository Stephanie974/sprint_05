var xhttp = new XMLHttpRequest();
var respJSON = [];
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    resp = this.responseText;
    respJSON = JSON.parse(resp);

    html = document.getElementById("list");
    html.innerHTML = "";
    debugger;
    for (var i = 0; i < respJSON.length; i++) {
      html.innerHTML +=
        "<li id=" +
        i +
        " onclick='clickMe()'>" +
        respJSON[i].name.official +
        "</li> ";
      console.log(respJSON[i]);
    }
  }
};
xhttp.open("GET", "https://restcountries.com/v3.1/region/europe", true);
xhttp.send();
function clickMe() {
  alert("Testing");
}
