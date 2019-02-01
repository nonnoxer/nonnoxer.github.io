function goto() {
  $("#gotoed").html('<iframe src="https://www.openprocessing.org/sketch/658208/embed/" width=100% height=100%></iframe><button><a href="https://nonnoxer.github.io">Go Back</a></button>');
}

function count() {
  alert("Let's play a game: Who can count the highest?");
  var high = prompt("You start: how high can you count?");
  alert(high + "? I can count MUCH higher than that");
  alert("Prepare to be epic destroyed, human >:)");
  for (var i = 1; i <= parseInt(high) + 1; i++) {
    alert(i);
  }
  alert("#destroyed");
}

function destroy() {
  $("body").addClass("animated hinge");
  $("body").after('<a href="https://nonnoxer.github.io">Reverse time using space magic?</a>');
}
