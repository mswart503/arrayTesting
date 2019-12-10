

$(document).ready(function() {
  $("form#favThings").submit(function(){
    event.preventDefault();
    var favoriteThings = [$("input#favfood").val(),$("input#favMovie").val(),$("input#favAnimal").val()];

    favoriteThings.forEach(function(favoriteThing){
      var userInput = $("input#" + favoriteThing).val();
      $("." + )
    });
    $("h2#output").append(favoriteThings);
    $("h3#output2").append(favoriteThings[2]);
    var favoriteFood = favoriteThings[0];
    var favoriteMovie = favoriteThings[1];
    var favoriteAnimal = favoriteThings[2];
    var blahblah = [];
    blahblah.push(favoriteMovie, favoriteAnimal, favoriteFood);
    $("h4#output3").append(blahblah);

    $("span#food").append(favoriteFood);
    $("li#list2").append(favoriteAnimal);
    $("li#list3").append(favoriteMovie);
    





  });
});
