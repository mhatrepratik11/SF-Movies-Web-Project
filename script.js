
var xhttp;

var arrdata;
var locations=[];


function filterData()
{

  for(var i=0;i<arrdata.length;i++)
  {
 
  //var myLatlng = new google.maps.LatLng(arrdata[i].latitude,arrdata[i].longitude);
  var marker1 = new google.maps.Marker({
    map: map,
    position:arrdata[i].latLng
    //anchorPoint: new google.maps.Point(0, -29)
  });
   // console.log(arrdata[i]);
 console.log(arrdata.length);
}
//document.getElementById("pac-input").value=arrdata[2].locations;
//console.log(input)

//marker.setPosition(myLatlng);
}



if (window.XMLHttpRequest) {
    // code for modern browsers
    xhttp = new XMLHttpRequest();
 } else {
    // code for old IE browsers
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
var map;

xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {

    //document.body.innerHTML = this.responseText;
    //console.log(this.responseText);
    //console.log(this.responseText);
   // console.log(this.responseText);
    arrdata=JSON.parse(this.responseText);
    arrdata=arrdata.moviesInfoList;
    console.log(arrdata);
    filterData();
    //initMap();
  }
};
//xhttp.open("GET", "https://data.sfgov.org/resource/wwmu-gmzc.json", true);
xhttp.open("POST","http://192.168.1.7:8083/movie/getMoviesFromSanFransisco",true);

xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//xhttp.open("GET","https://data.sfgov.org/resource/6a9r-agq8.json",true);
xhttp.send();
