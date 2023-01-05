import $ from './lib/lib';

$("button").on('click', function(){
  $("div").eq(1).toggleClass("active");
});

$("div").click(function() {
  console.log($(this).index());
});


console.log($("button").html());

console.log($("div").eq(2).find(".some"));