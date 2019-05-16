document.addEventListener("DOMContentLoaded", function(event) {
  var one = document.getElementById("Stringone");
  var four = document.getElementById("Stringfour");
  var six = document.getElementById("Stringsix");
  var eight = document.getElementById("Stringeight");
  TweenMax.set(one, { y: 2000 });
  TweenMax.set(four, { y: 2000 });
  TweenMax.set(six, { y: 2000 });
  TweenMax.set(eight, { y: 2000 });

  var two = document.getElementById("Stringtwo");
  var three = document.getElementById("Stringthree");
  var five = document.getElementById("Stringfive");
  var seven = document.getElementById("Stringseven");
  TweenMax.set(two, { y: -2000 });
  TweenMax.set(three, { y: -2000 });
  TweenMax.set(five, { y: -2000 });
  TweenMax.set(seven, { y: -2000 });

  setTimeout(function() {
    TweenMax.to(one, 2, { y: 0 });
    TweenMax.to(two, 2, { y: 0 });
    TweenMax.to(three, 2, { y: 0 });
    TweenMax.to(four, 2, { y: 0 });
    TweenMax.to(five, 2, { y: 0 });
    TweenMax.to(six, 2, { y: 0 });
    TweenMax.to(seven, 2, { y: 0 });
    TweenMax.to(eight, 2, { y: 0 });
  }, 2000);

  setTimeout(function() {
    const dateElem = document.getElementById("info");
    dateElem.style.opacity = 1;
  }, 4000);
});