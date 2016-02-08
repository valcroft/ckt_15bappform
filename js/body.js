jQuery(document).ready(function($) {

   // $('div.main-square').hide();
 //   $('div.centered-text').hide();
    
    var i =0;
    var i_firstname = 0;
    var i_lastname = 0;
    var i_studentnum = 0;
    var i_course = 0;
    var i_reason = 0;
    var i_witty = 0;
    var i_contactnum = 0;
    var i_fblink = 0;
    var i_bonus = 0;
    
    var firstname = "";
    var lastname = "";
    var studentnum = "";
    var course = "";
    var reason = "";
    var witty = "";
    var contactnum = "";
    var fblink = "";
    var bonus = "";
    
    
    $(".gridster ul").gridster({
        widget_margins: [10, 10],
        widget_base_dimensions: [200, 200]
    });
    
    if (i ==0) {
      //  $('div.notif-first').show(250);
        $('div#intro-first').show(0);
        $( "div.notif-first" ).show( 250, function() {
            // Animation complete.
            $('div.intro-cover').hide(0);
          });
        
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
                  i=1;
                console.log("After i=1");
                console.log(i);
            }
         });         
    /* In Game Proper */             
    } 
 
        console.log("inside i==1");
    $('.rc-11').click(function() {	
        if (i_firstname ==0){          
            
            i_firstname++;
            $(this).addClass('unlocked');
            $(this).removeClass('locked');   
        }
    
    });
     $('.rc-21').click(function() {	
        if (i_lastname ==0){
            i_lastname++;
            $(this).removeClass('locked');  
        }
      
    });
     $('.rc-31').click(function() {	
        if (i_studentnum ==0){
            i_studentnum++;
            $(this).removeClass('locked');  
        }
        
    });
     $('.rc-12').click(function() {	
        if (i_course ==0){
            i_course++;
            $(this).addClass('unlocked');
            $(this).removeClass('locked');  
        }
     
         
    });
     $('.rc-22').click(function() {	
        if (i_reason ==0){
            i_reason++;
            $(this).addClass('unlocked');
            $(this).removeClass('locked');  
        }
      
    });
     $('.rc-32').click(function() {
        if (i_witty ==0){
            i_witty++;
            $(this).addClass('unlocked');
            $(this).removeClass('locked');   
        }
        
    });
     $('.rc-13').click(function() {	
        if (i_contactnum ==0){
            i_contactnum++;
            $(this).addClass('unlocked');
            $(this).removeClass('locked');   
        }
       
    });
     $('.rc-23').click(function() {	
        if (i_fblink ==0){
            i_fblink++;
            $(this).addClass('unlocked');
            $(this).removeClass('locked'); 
        }
          
    });
     $('.rc-33').click(function() {	
        if (i_bonus ==0){
            i_bonus++;
            $(this).addClass('unlocked');
             $(this).removeClass('locked');   
        }
      
    });
    
 
        
        
      
    
    
   //  var gridster = $('.gridster ul').gridster().data('gridster');
    /*
    $('.rc-11').click(function() {	
        $(this).removeClass('locked');   
        console.log(i);
    });*/
});