$(document).ready(function() {

    // Hide the "view" div.
    $('#preferences').hide();
    // Watch for clicks on the "slide" link.
    $('#showPreferences').click(function() {
        // When clicked, toggle the "view" div.
        $('#preferences').slideToggle(400, function() {
         
            if ($(this).is(":visible"))
              $('#showPreferences').text('Hide Preferences');
            else
              $('#showPreferences').text('Preferences');
            
        });
        return false;
    });
    $('span.slide1').click(function() {
        // When clicked, toggle the "view" div.
        $('#one').hide();
        $('#second').slideToggle(400, function() {
         
            if ($(this).is(":visible"))
              $('span.slide1 > a').text('hide Behavior');
            else
              $('span.slide1 > a').text('Behavior');
            
        });
        return false;
    });


});