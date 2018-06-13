
$(document).ready(function () {
        drawTable(existingData);
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
