
// .map() with .append()

function solution3() {
  $("ul").children().remove();
  const flavors = window.iceCreamFlavors;
  $(".ice-cream-list").append(
    flavors.map(function (flavor) {
      return $("<li class='ice-cream-flavor'>" + flavor + "</li>");
    })
  );
}