
// function load() {
//   var pageData = JSON.parse(existingData);
//   for (var i = 0; i < pageData.length; i++) {
//     document.write(pageData[i].name);
//     doucment.write(pageData[i].date);
//     document.write(pageData[i].assigned);
//   }
//
// }

// var load = function(){
// var executed = false;
// return(function(){
//       if(!executed){
//         executed = true;
//         localStorage.setItem("jsonData", JSON.stringify(existingData));
//       }
// })
// //console.log(localStorage.getItem("jsonData"));
// }
//var url = "./js/existingData.JSON"

$(document).ready(function () {
      //$.getJSON(url,function(existingData){

        //var retrievedData = localStorage.getItem("jsonData");
        drawTable(existingData);
        // var $wrapBeg = $('<span>').attr('class','tableElement');
        // var $wrapEnd = $('</span>').attr('class','tableElement');
        //
        // var tr;
        // for (var i = 0; i < json.length; i++) {
        //     tr = $('<tr/>');
        //     tr.append("<td><b>" + json[i].name+"</b> "+ json[i].date+"</td>");
        //     // tr.append("<td>" + json[i].date + "</td>");
        //     tr.append("<td>" + json[i].assigned + "</td>");
        //     $('#datatable').append(tr);
        // }
        //
        // $("table#datatable tr:even").css("background-color", "#FFFFFF");
        // $("table#datatable tr:odd").css("background-color", "#ECECEC");
        // $("table#datatable td:odd").css("font-weight", "bold");



    // });

    //     $('#tasksubmit').on('click',function(){
    //           var json= existingData;
    //           //var formData = JSON.stringify($("#task_Form").serializeArray());
    //
    //           //var values = $(this).serializeObject();
    //           //existingData.push(values);
    //           //console.log(JSON.stringify(existingData));
    //
    //           //var $inputs = $('#myForm :input');
    //
    // // not sure if you wanted this, but I thought I'd add it.
    // // get an associative array of just the values.
    //           // var values = {};
    //           // $inputs.each(function() {
    //           //     values["this.name"] = $(this).val();
    //           // });
    //
    //
    //
    //           json.splice(0 , 0,
    //             { "name": $('#taskname').val(), "date" : $('#taskdate').val(), "assigned": $('#taskassigned').val()});
    //             console.log(JSON.stringify(json));
    //             existingData = json;
    //             //('#task_form').submit();
    //   // var name = '#taskname';
    //   // var date = '#taskdate';
    //   // var assigned = 'taskassigned';
    //   //
    //   // var task = { name: name, date: date, assigned: assigned}
    //   //
    //   // existingData.push(task);
    //
    //
    //     });
    //   console.log(JSON.stringify(existingData));
    });

    function drawTable( input ) {
      var $wrapBeg = $('<span>').attr('class','tableElement');
      var $wrapEnd = $('</span>').attr('class','tableElement');

      var tr;
      $('#datatable').empty();
      for (var i = 0; i < input.length; i++) {
          tr = $('<tr/>');
          tr.append("<td><b>&nbsp" + input[i].name+"</b>&nbsp"+input[i].date +"</td>");
          // tr.append("<td>" + input[i].date + "</td>");
          tr.append("<td><b>" + input[i].assigned + "</b></td>");
          $('#datatable').append(tr);
      }


      $("table#datatable tr:even").css("background-color", "#FFFFFF");
      $("table#datatable tr:odd").css("background-color", "#ECECEC");
      //$("table#datatable td:odd").css("font-weight", "bold");
    }
