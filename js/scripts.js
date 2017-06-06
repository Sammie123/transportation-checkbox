$(document).ready(function() {
  $("form#transportation").submit(function(event) {
    event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=work-transportation]:checked").each(function() {
      var workTransportationMode = $(this).val();
      $('#work-responses').append(workTransportationMode + "<br>");
    });

    $("#money-responses").show();
    $("input:checkbox[name=money-transportation]:checked").each(function() {
      var moneyTransportationMode = $(this).val();
      $('#money-responses').append(moneyTransportationMode) + ("<br>");
    });
    $('#transportation').hide();
  });
});
