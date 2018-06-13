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

        var datePattern = new RegExp("(0|1)[0-9]\/[0-3][0-9]\/(19|20)[0-9]{2}");
        var validDate = true;

        var taskName = document.getElementById('taskname').value;
        var taskDate = document.getElementById('taskdate').value;
        var taskAssigned = document.getElementById('taskassigned').value;

        var validForm = true;

        if(!(datePattern.test(document.getElementById('taskdate').value))){
          alert("Expected Date Format: MM/DD/YYYY");
          validDate = false;
        }

        if(taskName.length == 0 || taskAssigned.length == 0){
          alert("Expected Input:TaskName and TaskAssigned");
          validForm = false;
        }
        //alert()
        //var newName = document.getElementById('taskname').value;
        //var newDate =
        if(validDate && validForm){
            jsonArray.unshift({ name: document.getElementById('taskname').value, date : document.getElementById('taskdate').value , assigned: document.getElementById('taskassigned').value});
        }

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
