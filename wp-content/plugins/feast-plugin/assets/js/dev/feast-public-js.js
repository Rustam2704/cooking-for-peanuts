(function($){

     // Check if Yoast FAQ Toggle is enabled
     if (typeof feastJSData !== 'undefined' && feastJSData.yoastFaqEnabled) {
         // Yoast FAQ toggle (only runs if enabled)
         $('.schema-faq-question').on('click', function() {
             $(this).toggleClass('active', !$(this).hasClass('active'));
         });
     }
 
     // Mobile submenu dropdowns
     $('.menu-item-has-children button').click(function() {
         $(this).parent('.menu-item').toggleClass('open');
     });
 
 })(jQuery);
