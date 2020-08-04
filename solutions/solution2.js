
// For loop with .html()

function solution2() {
  $(".ice-cream-list").html("");
  let flavors = "";
  for(let i = 0; i < window.iceCreamFlavors.length; i++) {
    flavors += `<li class="ice-cream-flavor">${window.iceCreamFlavors[i]}</li>`
  };

  $(".ice-cream-list").html(flavors);
}

