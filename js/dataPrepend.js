var appendTask = function(){

        var jsonArray = [];

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
          alert("Expected Inputs: TaskName & Assigned To");
          validForm = false;
        }

        if(validDate && validForm){
            jsonArray.unshift({ name: taskName, date : taskDate , assigned: taskAssigned});
        }

        drawTable(jsonArray);

}
