//Here I get the value from the slider when the DOM is ready
$(document).ready(function() {

    $("#slider").slider({
        value: 0,
        orientation: "horizontal",
        animate: "slow",
        slide1: function( event, ui ) {
            $( "#minC" ).val(ui.value );
         }
    });

    $("#slider2").slider({
        value: 0,
        orientation: "horizontal",
        animate: "slow",
        slide2: function( event, ui ) {
            $( "#maxC" ).val(ui.value);
         }
    });

    $("#slider3").slider({
        value: 0,
        orientation: "horizontal",
        animate: "slow",
        slide3: function( event, ui ) {
            $( "#minR" ).val(ui.value);
         }
    });

    $("#slider4").slider({
        value: 0,
        orientation: "horizontal",
        animate: "slow",
        slide4: function( event, ui ) {
            $( "#maxR" ).val(ui.value);
         }
    });
    $( "#minC" ).val( $( "#slider" ).slider( "value" ) );
    $( "#maxC" ).val( $( "#slider2" ).slider( "value" ) );
    $( "#minR" ).val( $( "#slider3" ).slider( "value" ) );
    $( "#maxR" ).val( $( "#slider4" ).slider( "value" ) );
});