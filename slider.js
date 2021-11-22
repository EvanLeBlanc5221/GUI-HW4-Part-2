//Here I get the value from the slider when the DOM is ready
$(document).ready(function() {

    $("#slider").slider({
        value: 0,
        min: -50,
        max: 50,
        orientation: "horizontal",
        animate: "slow",
        slide: function( event, ui ) {
            $( "#minC" ).val(ui.value );
         }
    });

    $("#slider2").slider({
        value: 0,
        min: -50,
        max: 50,
        orientation: "horizontal",
        animate: "slow",
        slide: function( event, ui ) {
            $( "#maxC" ).val(ui.value);
         }
    });

    $("#slider3").slider({
        value: 0,
        min: -50,
        max: 50,
        orientation: "horizontal",
        animate: "slow",
        slide: function( event, ui ) {
            $( "#minR" ).val(ui.value);
         }
    });

    $("#slider4").slider({
        value: 0,
        min: -50,
        max: 50,
        orientation: "horizontal",
        animate: "slow",
        slide: function( event, ui ) {
            $( "#maxR" ).val(ui.value);
         }
    });
    $( "#minC" ).val( $( "#slider" ).slider( "value" ) );
    $( "#maxC" ).val( $( "#slider2" ).slider( "value" ) );
    $( "#minR" ).val( $( "#slider3" ).slider( "value" ) );
    $( "#maxR" ).val( $( "#slider4" ).slider( "value" ) );
});
