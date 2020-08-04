// Reverse while loop with prepend()

function solution4() {
  $('ul li').remove();
  const flavors = window.iceCreamFlavors;
  let i = flavors.length - 1;
  while ( i >= 0) {
    $(".ice-cream-list").prepend("<li class='ice-cream-flavor'>" + flavors[i] + "</li>");
    i--;
  };
}