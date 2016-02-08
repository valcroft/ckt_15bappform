jQuery(document).ready(function($) {
   $(function(){ //DOM Ready
   var gridster = $(".gridster ul").gridster().data('gridster');

    $(".gridster ul").gridster({
        widget_margins: [10, 10],
        widget_base_dimensions: [200, 200]
    });

    });
    
});