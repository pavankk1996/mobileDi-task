var obj, dbParam, xmlhttp, myObj,dataDetails, data = "";
//obj = { table: "customers", limit: 20 };
dbParam = JSON.stringify(obj);
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
   console.log(this.responseText);
   myObj = JSON.parse(this.responseText);
   data += "<table border='1'>"
   for(var x=0;x<10;x++) {
     data += "<ul><li>" +myObj.data[x].date + "</li>"+ "<li>" +myObj.data[x].name + "</li>"+"<li><button onclick='View(myObj)'><span>View Details</span></button></li></ul> ";
   }
   data += "</table>"    
   document.getElementById("card").innerHTML = data;
  }
};
xmlhttp.open("GET", "https://cricapi.com/api/matchCalendar?apikey=1Kd985ENa9MPBi9XhuYjcOUJMZL2",true);
xmlhttp.send();

function View(myObj) {
    console.log(myObj);
    dataDetails;
    var index;
    
    for (var i = 0; i < nodes.length; i++) {
        nodes[i].addEventListener('click', function(i) {
           console.log('You clicked element #' + i);
           if(index < 0){
               return
           }
           else{
            index = i;
            console.log('line no',index);
            dataDetails = "<td>" +myObj.data[index].date + "</td>"+ "<td>" +myObj.data[index].name + "</td>";
            document.getElementById("details").innerHTML = dataDetails;
           }
        }.bind(null, i)); 
     }  
}
var nodes = document.getElementsByTagName('button');


