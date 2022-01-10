// -------------------------------------------------navbar-----------------------------


$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 25);
});

// -------------------------------------------------navbar-----------------------------
// --------------------------------------------------up btn --------------------------------------------------------
$(window).scroll(function () {
    $('a').toggleClass('scrollh', $(this).scrollTop() > 25);
});

$(".demoupbtn").click(function(){
    $("body,html").animate({scrollTop:'0'},1000)
})

// --------------------------------------------------up btn --------------------------------------------------------
$("a[href^='#']").click(function(e) {
    let ax = $(e.target).attr("href");
    let ay = $(ax).offset().top;
    $("body,html").animate({scrollTop:ay},1000)
})

// --------------------------------------------------up btn --------------------------------------------------------

$(document).ready(function(){
    
    $(".store-container").fadeOut(3000,function(){
        $(".loadingggggg").fadeOut(500,function(){
          
            $(".loadingggggg").remove()
        })
    })
})

// -----------------------------------------------------------------------------------------------------

$('body').scrollspy({target: '.navbar-fixed-top'})

// ---------------------------------------------------------------------------------------------------------
AOS.init();
setTimeout(function() {
    document.getElementById("loading-page").className += "loaded";
    document.getElementById("loader").className += "opzero";
    document.getElementById("lastray").className += " finalray";
    document.body.className += "whitebk";
  },6500);