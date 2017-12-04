$(document).ready(function() {
  var flavors = ["chocolate", "vanilla", "coffee", "hazelnut"];

  flavors.forEach(function(flavor) {
    $("body").append("<p>" + flavor + "</p>");
  });
});
