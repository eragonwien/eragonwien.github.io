$(document).ready(function(){
    $(".navbar").ready(function(){
        $(".nav-item")
            .hover(function () {
                $(".navbar-nav").find("li").removeClass("active");
                $(this).addClass("active");
            })
            .click(function () {
                $(".navbar-nav").find("li").removeClass("active");
                $(this).addClass("active");
            });
    });
});