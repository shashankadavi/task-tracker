var appendTask = function(){
  //console.log("here");

      // existingData.splice(0, 0,
      //   { name: document.getElementById('taskname').value, date : document.getElementById('taskdate').value , assigned: document.getElementById('taskassigned').value});
      //existingData.unshift({ name: document.getElementById('taskname').value, date : document.getElementById('taskdate').value , assigned: document.getElementById('taskassigned').value});

        //console.log(JSON.stringify(existingData));
        var jsonArray = [];
        // var retrievedData = localStorage.getItem("jsonData");
        // console.log(retrievedData);

        jsonArray=existingData;
        //alert()
        //var newName = document.getElementById('taskname').value;
        //var newDate =
        jsonArray.unshift({ name: document.getElementById('taskname').value, date : document.getElementById('taskdate').value , assigned: document.getElementById('taskassigned').value});
        // var newRow = {
        //     name: document.getElementById('taskname').value,
        //     date : document.getElementById('taskdate').value ,
        //     assigned: document.getElementById('taskassigned').value
        //   }
        // jsonArray.push(newRow);
        // alert(JSON.stringify(jsonArray));
        //localStorage.setItem("jsonData", JSON.stringify(jsonArray));
        //alert(localStorage.getItem("jsonData"));
        //window.location.href="/index.html";

        //existingData = JSON.parse(jsonArray);

        drawTable(jsonArray);


}
