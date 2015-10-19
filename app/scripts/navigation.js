(function($, undefined) {
    "use strict";
    
    /*
     * Prevent default behaviour of links in navbar (prevent change the 'fragment' in URL)
     * Scroll to specified section
     */
    $("body").on("click", ".navbar a[href^=#]", function(e) {
        var navbarHeight = $(".navbar").outerHeight(),
            href = $(this).attr("href"),
            $body = $("html, body"),
            $navbarToggle = $(".navbar-toggle"),
            $target = $(href),
            scrollTopValue = 0;
       
        e.preventDefault();
        
        if ($target.length > 0) {        
            scrollTopValue = $target.offset().top - navbarHeight;
        } 

        $body.stop().animate({ scrollTop: scrollTopValue }, 600);
        
        // collapse navbar aria        
        if ($navbarToggle.attr("aria-expanded") === "true") {
            $navbarToggle.trigger('click.bs.collapse.data-api');
        }        
    });
    
})(jQuery);