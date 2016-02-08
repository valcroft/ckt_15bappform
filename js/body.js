jQuery(document).ready(function($) {
   $(function(){ //DOM Ready
   var gridster = $(".gridster ul").gridster().data('gridster');

    $(".gridster ul").gridster({
        widget_margins: [10, 10],
        widget_base_dimensions: [200, 200]
    });
gridster.add_widget('<li class="new">The HTML of the widget...</li>', 1,1 ,3, 4);
    });
    
    
});