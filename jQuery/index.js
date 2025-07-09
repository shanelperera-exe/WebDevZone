// $(document).ready(function() {
//     $("h1").css("color", "red");
// });

$("h1").addClass("big-title margin-50");

// $("h1").removeClass("big-title");

$("h1").hasClass("margin-50");


$("h1").text("Bye!")

// $("button").text("Don't click me")

$("h1").html("<em>God Bless!</em>")


console.log($("img").attr("src"));

$("a").attr("href", "https://www.yahoo.com")

$("h1").attr("class");


$("h1").click(function() {
    $("h1").css("color", "purple")
})

$("button").click(function() {
    $("h1").css("color", "purple")
})

// $("input").keypress(function(event) {
//     console.log(event.key);
// })

$(document).keypress(function(event) {
    console.log(event.key);
})

$(document).keypress(function(event) {
    $("h1").text(event.key)
})

$("h1").on("mouseover", function() {
    $("h1").css("color", "green")
})

// $("h1").before("<button>New</button>");
// $("h1").after("<button>New</button>");

// $("h1").prepend("<button>New</button>");
// $("h1").append("<button>New</button>");

// $("button").remove();

// $("h1").on("mouseover", function() {
//     $("h1").hide();
// })

// $("h1").show();

// $("button").on("click", function() {
//     $("h1").toggle();
// })

// $("button").on("click", function() {
//     $("h1").fadeOut();
// })

// $("button").on("click", function() {
//     $("h1").fadeIn();
// })

// $("button").on("click", function() {
//     $("h1").slideUp();
// })

// $("button").on("click", function() {
//     $("h1").slideDown();
// })

// $("button").on("click", function() {
//     $("h1").slideToggle();
// })

// $("button").on("click", function() {
//     $("h1").animate({opacity: 0.5});
// })

$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
})