
// .forEach() with .appendTo()

function solution1() {
  $('ul').empty();
  const flavors = window.iceCreamFlavors;
  flavors.forEach(flavor => {
    $("<li class='ice-cream-flavor'>" + flavor + "</li>").appendTo(".ice-cream-list");
  });
}
