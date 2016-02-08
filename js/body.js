jQuery(document).ready(function($) {

   // $('div.main-square').hide();
 //   $('div.centered-text').hide();
    
    var i =0;
    
    $(".gridster ul").gridster({
        widget_margins: [10, 10],
        widget_base_dimensions: [200, 200]
    });
    
    if (i ==0) {
        $('div.notif-first').show(250);

        $('div.notif-first').animate({"font-size": "2em"},
            {duration:2000, queue: true,
            complete: function() { 
        }});
         $( 'div.text-overlay' ).colorFade( [26,113,215]); 

         $('div.notif-first').animate({"font-size": "1.75em"},
                {duration:2000, queue: true,
            complete: function() { /* Animation complete */  
            $('div.notif-first').hide(0); 
                      $('div.notif-second').show(0);
                       $('div.notif-second').animate({"font-size": "2em"},
                        {duration:2000, queue: true,
                        complete: function() { 
                    }});
                     $( 'div.text-overlay' ).colorFade( [26,113,215]); 

                     $('div.notif-second').animate({"font-size": "1.75em"},
                            {duration:2000, queue: true,
                        complete: function() { /* Animation complete */  
                            $('div.notif-second').hide(0); 
                            $('div.main-square').show(0);
                            $('div#intro-first').hide(0);

                        }
                    });
                  i++;
            }
         });
             
  
          
      
                 
    }
        
           // $('div#intro-first').hide();
      
    
    
   //  var gridster = $('.gridster ul').gridster().data('gridster');
    $('.rc-11').click(function() {	
        $(this).removeClass('locked');   
    });
});