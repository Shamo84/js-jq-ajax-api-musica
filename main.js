$(document).ready(function() {
  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function (data, stato) {
      for (var key in data.response) {
        var source = $(".template").html();
        var template = Handlebars.compile(source);
        var context = data.response[key];
        var html = template(context);
        $(".cds-container").append(html);
      }
    },
    error: function (richiesta, stato, errori) {
      alert("E' avvenuto un errore. " + errore);
    }
  });
  $(document).on("change", "#genere", function(event) {
    var genereScelto = $(this).val();
    if (genereScelto == "All") {
      $(".cds-container > .cd").show();
    } else {
      for (var i = 0; i < $(".cds-container > .cd").length; i++) {
        if ($(".cds-container > .cd").eq(i).children("span.genre").text() == genereScelto) {
          $(".cds-container > .cd").eq(i).show();
        } else {
          $(".cds-container > .cd").eq(i).hide();
        }
      }
    }
  });
});
