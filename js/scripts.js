$(document).ready(function() {
  var flavors = ["chocolate", "vanilla", "coffee", "hazelnut"];

  // flavors.forEach(function(flavor) {
  //   $("body").append("<p>" + flavor + "</p>");
  // });

  for (var index = 0; index < flavors.length; index += 1) {
    $("body").append("<p>" + flavors[index] + "</p>");
  }
  
});
