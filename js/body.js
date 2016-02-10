jQuery(document).ready(function($) {


    
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
    
    var complete_puzzle = 0;
    
// we use touchstart and touchend events
var enterEvent = "touchstart";
var leaveEvent = "touchend";
if(!("ontouchstart" in window)){
    // if no touch we use mouseenter and mouseleave events
    enterEvent = "mouseenter";
    leaveEvent = "mouseup";
}

    
    $(".gridster ul").gridster({
        widget_margins: [10, 10],
        widget_base_dimensions: [200, 200]
    });
    
  
    if (i ==0) {
      //  $('div.notif-first').show(250);
        $("div#intro-first").show(0);
        $( "div.notif-first" ).show( 250, function() {
            // Animation complete.
            $('div.intro-cover').hide(0);
          });
        
        $('div.notif-first').animate({"font-size": "5em"},
            {duration:2000, queue: true,
            complete: function() { 
        }});
         $( 'div.text-overlay' ).colorFade( [26,113,215]); 

         $('div.notif-first').animate({"font-size": "4em"},
                {duration:2000, queue: true,
            complete: function() { /* Animation complete */  
            $('div.notif-first').hide(0); 
                      $('div.notif-second').show(0);
                       $('div.notif-second').animate({"font-size": "5em"},
                        {duration:2000, queue: true,
                        complete: function() { 
                    }});
                     $( 'div.text-overlay' ).colorFade( [26,113,215]); 

                     $('div.notif-second').animate({"font-size": "4em"},
                            {duration:2000, queue: true,
                        complete: function() { /* Animation complete */ 
                        //    $('div.text-overlay').css("background-color", "#003471");
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
 /* First Name */
    console.log("inside i==1");
    $('.rc-11').click(function() {	
        if (i_firstname ==0){          
                      //  $('div.intro-cover').show(0);
                        $('div#over-firstname').show(0);
                        $('div.main-square').hide(0);
            
                        $( '.q-firstname' ).show( 250, function() {
                            // Animation complete.
                         //   $('div.intro-cover').hide(0);
                          });
            
                        $('.q-firstname').animate({"font-size": "5em"},
                            {duration:2000, queue: true,
                            complete: function() { 
                        }});
                         $( 'div#over-firstname' ).colorFade( [26,113,215]); 
            
                        $('.q-firstname').animate({"font-size": "4em"},
                                {duration:2000, queue: true,
                            complete: function() { /* Animation complete */  
                            $('div.q-firstname').hide(0); 
                            $('div.qi-firstname').show(0);
                        }});
                                     
                
               
            
            i_firstname++;
            $(this).addClass('unlocked');
            $(this).removeClass('locked');   
        }
    
    });
    
    
     /* Last Name */
    
     $('.rc-21').click(function() {	
        if (i_lastname ==0){
            
              //  $('div.intro-cover').show(0);
                        $('div#over-lastname').show(0);
                        $('div.main-square').hide(0);
            
                        $( '.q-lastname' ).show( 250, function() {
                            // Animation complete.
                         //   $('div.intro-cover').hide(0);
                          });
            
                        $('.q-lastname').animate({"font-size": "5em"},
                            {duration:2000, queue: true,
                            complete: function() { 
                        }});
                         $( 'div#over-lastname' ).colorFade( [26,113,215]); 
            
                        $('.q-lastname').animate({"font-size": "4em"},
                                {duration:2000, queue: true,
                            complete: function() { /* Animation complete */  
                            $('div.q-lastname').hide(0); 
                            $('div.qi-lastname').show(0);
                        }});
            i_lastname++;
            $(this).addClass('unlocked');
            $(this).removeClass('locked');  
        }
      
    });
    
/* Student Number */
     $('.rc-31').click(function() {	
        if (i_studentnum ==0){
              //  $('div.intro-cover').show(0);
                        $('div#over-studentnum').show(0);
                        $('div.main-square').hide(0);
            
                        $( '.q-studentnum' ).show( 250, function() {
                            // Animation complete.
                         //   $('div.intro-cover').hide(0);
                          });
            
                        $('.q-studentnum').animate({"font-size": "5em"},
                            {duration:2000, queue: true,
                            complete: function() { 
                        }});
                         $( 'div#over-studentnum' ).colorFade( [26,113,215]); 
            
                        $('.q-studentnum').animate({"font-size": "4em"},
                                {duration:2000, queue: true,
                            complete: function() { /* Animation complete */  
                            $('div.q-studentnum').hide(0); 
                            $('div.qi-studentnum').show(0);
                        }});
            i_studentnum++;
            $(this).addClass('unlocked');
            $(this).removeClass('locked');  
        }
        
    });
    
/* Course */    
    
     $('.rc-12').click(function() {	
        if (i_course ==0){
              //  $('div.intro-cover').show(0);
                        $('div#over-course').show(0);
                        $('div.main-square').hide(0);
            
                        $( '.q-course' ).show( 250, function() {
                            // Animation complete.
                         //   $('div.intro-cover').hide(0);
                          });
            
                        $('.q-course').animate({"font-size": "5em"},
                            {duration:2000, queue: true,
                            complete: function() { 
                        }});
                         $( 'div#over-course' ).colorFade( [26,113,215]); 
            
                        $('.q-course').animate({"font-size": "4em"},
                                {duration:2000, queue: true,
                            complete: function() { /* Animation complete */  
                            $('div.q-course').hide(0); 
                            $('div.qi-course').show(0);
                        }});
            i_course++;
            $(this).addClass('unlocked');
            $(this).removeClass('locked');  
        }
     
         
    });
    
/* Reason */     
     $('.rc-22').click(function() {	
        if (i_reason ==0){
             
                     $('div#over-reason').show(0);
                        $('div.main-square').hide(0);
            
                        $( '.q-reason' ).show( 250, function() {
                            // Animation complete.
                         //   $('div.intro-cover').hide(0);
                          });
            
                        $('.q-reason').animate({"font-size": "5em"},
                            {duration:2000, queue: true,
                            complete: function() { 
                        }});
                         $( 'div#over-reason' ).colorFade( [26,113,215]); 
            
                        $('.q-reason').animate({"font-size": "4em"},
                                {duration:2000, queue: true,
                            complete: function() { /* Animation complete */  
                            $('div.q-reason').hide(0); 
                            $('div.qi-reason').show(0);
                        }});
            i_reason++;
            $(this).addClass('unlocked');
            $(this).removeClass('locked');  
        }
      
    });
    
/* Witty */     
     $('.rc-32').click(function() {
        if (i_witty ==0){
              //  $('div.intro-cover').show(0);
                        $('div#over-witty').show(0);
                        $('div.main-square').hide(0);
            
                        $( '.q-witty' ).show( 250, function() {
                            // Animation complete.
                         //   $('div.intro-cover').hide(0);
                          });
            
                        $('.q-witty').animate({"font-size": "5em"},
                            {duration:2000, queue: true,
                            complete: function() { 
                        }});
                         $( 'div#over-witty' ).colorFade( [26,113,215]); 
            
                        $('.q-witty').animate({"font-size": "4em"},
                                {duration:2000, queue: true,
                            complete: function() { /* Animation complete */  
                            $('div.q-witty').hide(0); 
                            $('div.qi-witty').show(0);
                        }});
            i_witty++;
            $(this).addClass('unlocked');
            $(this).removeClass('locked');   
        }
        
    });
    
/*Contact Number */    
     $('.rc-13').click(function() {	
        if (i_contactnum ==0){
              //  $('div.intro-cover').show(0);
            $('div#over-contactnum').css("background-color", "#ac1a2f");
                          $('div#over-contactnum').show(0);
                        $('div.main-square').hide(0);
            
                        $( '.q-contactnum' ).show( 250, function() {
                            // Animation complete.
                         //   $('div.intro-cover').hide(0);
                          });
            
                        $('.q-contactnum').animate({"font-size": "5em"},
                            {duration:2000, queue: true,
                            complete: function() { 
                        }});
                         $( 'div#over-contactnum' ).colorFade( [212,58,80]); 
            
                        $('.q-contactnum').animate({"font-size": "4em"},
                                {duration:2000, queue: true,
                            complete: function() { /* Animation complete */  
                            $('div.q-contactnum').hide(0); 
                            $('div.qi-contactnum').show(0);
                        }});
            i_contactnum++;
            $(this).addClass('unlocked');
            $(this).removeClass('locked');   
        }
       
    });
    
/* Fb link */    
     $('.rc-23').click(function() {	
        if (i_fblink ==0){
              //  $('div.intro-cover').show(0);
                         $('div#over-fblink').show(0);
                        $('div.main-square').hide(0);
            
                        $( '.q-fblink' ).show( 250, function() {
                            // Animation complete.
                         //   $('div.intro-cover').hide(0);
                          });
            
                        $('.q-fblink').animate({"font-size": "5em"},
                            {duration:2000, queue: true,
                            complete: function() { 
                        }});
                         $( 'div#over-fblink' ).colorFade( [26,113,215]); 
            
                        $('.q-fblink').animate({"font-size": "4em"},
                                {duration:2000, queue: true,
                            complete: function() { /* Animation complete */  
                            $('div.q-fblink').hide(0); 
                            $('div.qi-fblink').show(0);
                        }});
            i_fblink++;
            $(this).addClass('unlocked');
            $(this).removeClass('locked'); 
        }
          
    });
    
/* Bonus */        
     $('.rc-33').click(function() {	
        if (i_bonus ==0){
              //  $('div.intro-cover').show(0);
                          $('div#over-bonus').show(0);
                        $('div.main-square').hide(0);
            
                        $( '.q-bonus' ).show( 250, function() {
                            // Animation complete.
                         //   $('div.intro-cover').hide(0);
                          });
            
                        $('.q-bonus').animate({"font-size": "5em"},
                            {duration:2000, queue: true,
                            complete: function() { 
                        }});
                         $( 'div#over-bonus' ).colorFade( [26,113,215]); 
            
                        $('.q-bonus').animate({"font-size": "4em"},
                                {duration:2000, queue: true,
                            complete: function() { /* Animation complete */  
                            $('div.q-bonus').hide(0); 
                            $('div.qi-bonus').show(0);
                        }});
            i_bonus++;
            $(this).addClass('unlocked');
             $(this).removeClass('locked');   
        }
      
    });
    
    $('.fa-check-circle').hover(  function() {
      $(this).animate({"font-size": "+=0.25em"});
      }, function() {
       $(this).animate({"font-size": "-=0.25em"});
      } );
    
    $('.check-firstname').click(function() {
       firstname = $('#input_firstname').val();
        console.log(firstname);
       
        $('div.qi-firstname').hide(0); 
        $( '.c-firstname' ).show( 250, function() {
                            // Animation complete.
                        
          });

        $('.c-firstname').animate({"font-size": "5em"},
            {duration:2000, queue: true,
            complete: function() { 
        }});
         $( 'div#over-firstname' ).colorFade( [26,113,215]); 

        $('.c-firstname').animate({"font-size": "4em"},
                {duration:2000, queue: true,
            complete: function() { /* Animation complete */  
            $('div.c-firstname').hide(0); 
                
            $('div.main-square').show(0);
            $('div#over-firstname').hide(0);

        }});

    });
   /*Check last name */ 
    $('.check-lastname').click(function() {
       lastname = $('#input_lastname').val();
        console.log(lastname);
       
        $('div.qi-lastname').hide(0); 
        $( '.c-lastname' ).show( 250, function() {
                            // Animation complete.
                        
          });

        $('.c-lastname').animate({"font-size": "5em"},
            {duration:2000, queue: true,
            complete: function() { 
        }});
         $( 'div#over-lastname' ).colorFade( [26,113,215]); 

        $('.c-lastname').animate({"font-size": "4em"},
                {duration:2000, queue: true,
            complete: function() { /* Animation complete */  
            $('div.c-lastname').hide(0); 
                
            $('div.main-square').show(0);
            $('div#over-lastname').hide(0);

        }});

    });
    
    /*Check studentnum */
       $('.check-studentnum').click(function() {
       studentnum = $('#input_studentnum').val();
        console.log(studentnum);
       
        $('div.qi-studentnum').hide(0); 
        $( '.c-studentnum' ).show( 250, function() {
                            // Animation complete.
                        
          });

        $('.c-studentnum').animate({"font-size": "5em"},
            {duration:2000, queue: true,
            complete: function() { 
        }});
         $( 'div#over-studentnum' ).colorFade( [26,113,215]); 

        $('.c-studentnum').animate({"font-size": "4em"},
                {duration:2000, queue: true,
            complete: function() { /* Animation complete */  
            $('div.c-studentnum').hide(0); 
                
            $('div.main-square').show(0);
            $('div#over-studentnum').hide(0);

            }});

       });
    
    /*Check course */
       $('.check-course').click(function() {
       course = $('#input_course').val();
        console.log(course);
       
        $('div.qi-course').hide(0); 
        $( '.c-course' ).show( 250, function() {
                            // Animation complete.
                        
          });

        $('.c-course').animate({"font-size": "5em"},
            {duration:2000, queue: true,
            complete: function() { 
        }});
         $( 'div#over-course' ).colorFade( [26,113,215]); 

        $('.c-course').animate({"font-size": "4em"},
                {duration:2000, queue: true,
            complete: function() { /* Animation complete */  
            $('div.c-course').hide(0); 
                
            $('div.main-square').show(0);
            $('div#over-course').hide(0);

            }});

       });
       /*Check reason */
       $('.check-reason').click(function() {
       reason = $('#input_reason').val();
        console.log(reason);
       
        $('div.qi-reason').hide(0); 
        $( '.c-reason' ).show( 250, function() {
                            // Animation complete.
                        
          });

        $('.c-reason').animate({"font-size": "5em"},
            {duration:2000, queue: true,
            complete: function() { 
        }});
         $( 'div#over-reason' ).colorFade( [26,113,215]); 

        $('.c-reason').animate({"font-size": "4em"},
                {duration:2000, queue: true,
            complete: function() { /* Animation complete */  
            $('div.c-reason').hide(0); 
                
            $('div.main-square').show(0);
            $('div#over-reason').hide(0);

            }});

       });
    
     /*Check witty */
       $('.check-witty').click(function() {
       witty = $('#input_witty').val();
        console.log(witty);
       
        $('div.qi-witty').hide(0); 
        $( '.c-witty' ).show( 250, function() {
                            // Animation complete.
                        
          });

        $('.c-witty').animate({"font-size": "5em"},
            {duration:2000, queue: true,
            complete: function() { 
        }});
         $( 'div#over-witty' ).colorFade( [26,113,215]); 

        $('.c-witty').animate({"font-size": "4em"},
                {duration:2000, queue: true,
            complete: function() { /* Animation complete */  
            $('div.c-witty').hide(0); 
                
            $('div.main-square').show(0);
            $('div#over-witty').hide(0);

            }});

       });
    
      /*Check contactnum */
       $('.check-contactnum').click(function() {
       contactnum = $('#input_contactnum').val();
        console.log(contactnum);
       
        $('div.qi-contactnum').hide(0); 
        $( '.c-contactnum' ).show( 250, function() {
                            // Animation complete.
                        
          });

        $('.c-contactnum').animate({"font-size": "5em"},
            {duration:2000, queue: true,
            complete: function() { 
        }});
         $( 'div#over-contactnum' ).colorFade( [26,113,215]); 

        $('.c-contactnum').animate({"font-size": "4em"},
                {duration:2000, queue: true,
            complete: function() { /* Animation complete */  
            $('div.c-contactnum').hide(0); 
                
            $('div.main-square').show(0);
            $('div#over-contactnum').hide(0);

            }});

       });
    
      /*Check fblink */
       $('.check-fblink').click(function() {
       fblink = $('#input_fblink').val();
        console.log(fblink);
       
        $('div.qi-fblink').hide(0); 
        $( '.c-fblink' ).show( 250, function() {
                            // Animation complete.
                        
          });

        $('.c-fblink').animate({"font-size": "5em"},
            {duration:2000, queue: true,
            complete: function() { 
        }});
         $( 'div#over-fblink' ).colorFade( [26,113,215]); 

        $('.c-fblink').animate({"font-size": "4em"},
                {duration:2000, queue: true,
            complete: function() { /* Animation complete */  
            $('div.c-fblink').hide(0); 
                
            $('div.main-square').show(0);
            $('div#over-fblink').hide(0);

            }});

       });
    
      /*Check bonus */
       $('.check-bonus').click(function() {
       bonus = $('#input_bonus').val();
        console.log(bonus);
       
        $('div.qi-bonus').hide(0); 
        $( '.c-bonus' ).show( 250, function() {
                            // Animation complete.
                        
          });

        $('.c-bonus').animate({"font-size": "5em"},
            {duration:2000, queue: true,
            complete: function() { 
        }});
         $( 'div#over-bonus' ).colorFade( [26,113,215]); 

        $('.c-bonus').animate({"font-size": "4em"},
                {duration:2000, queue: true,
            complete: function() { /* Animation complete */  
            $('div.c-bonus').hide(0); 
                
            $('div.main-square').show(0);
            $('div#over-bonus').hide(0);

            }});

       });

    function showFinalEnding() {
                      $("div#ending-first").show(0);
        $( "div.notif-first-end" ).show( 250, function() {
            // Animation complete.
            //$('div.intro-cover').hide(0);
          });
        
        $('div.notif-first-end').animate({"font-size": "5em"},
            {duration:2000, queue: true,
            complete: function() { 
        }});
         $( 'div.text-overlay' ).colorFade( [26,113,215]); 

         $('div.notif-first-end').animate({"font-size": "4em"},
                {duration:2000, queue: true,
            complete: function() { /* Animation complete */  
                $('div.notif-first-end').hide(0); 
                      $('div.notif-second-end').show(0);
                       $('div.notif-second-end').animate({"font-size": "5em"},
                        {duration:2000, queue: true,
                        complete: function() { 
                    }});
                     $( 'div.text-overlay' ).colorFade( [26,113,215]); 

                     $('div.notif-second-end').animate({"font-size": "4em"},
                            {duration:2000, queue: true,
                        complete: function() { /* Animation complete */  

                        }
                    });
         }});
    }
                
var complete_order = '[{"col":3,"row":3,"size_x":1,"size_y":1},{"col":3,"row":1,"size_x":1,"size_y":1},{"col":1,"row":3,"size_x":1,"size_y":1},{"col":2,"row":1,"size_x":1,"size_y":1},{"col":2,"row":3,"size_x":1,"size_y":1},{"col":1,"row":2,"size_x":1,"size_y":1},{"col":2,"row":2,"size_x":1,"size_y":1},{"col":3,"row":2,"size_x":1,"size_y":1},{"col":1,"row":1,"size_x":1,"size_y":1}]';
    console.log("complete_order");
    console.log(complete_order);
    
    $("li").on(leaveEvent, function(e){
//$( "li" ).mouseup(function() {
    
           console.log("leaveEvent");
                    var gridster = $(".gridster ul").gridster({
                    serialize_params: function($w, wgd) {
                        return {
                            x: wgd.col,
                            y: wgd.row,
                            width: wgd.size_x,
                            height: wgd.size_y,
                            id: $($w).attr('id'),
                            class: $($w).attr('class')
                        }
                    }
                }).data('gridster');

                var json = JSON.stringify(gridster.serialize());
                    console.log(json);
            var json_string = "";
            json_string = json;
            console.log("json_string");
            console.log(json_string);
            console.log(complete_order);
            var k =0;
        if ($(this).hasClass("unlocked")) {
            for (j = 0; j< complete_order.length; j++) {
                if (complete_order[j] != json_string[j] ) {
                    k++;
                    console.log("k");
                    console.log(k);
                    console.log(json_string[j]);
                    console.log(complete_order[j]);
                    if(k >2) {
                        break;
                    }
                }
            }
            console.log("value of k");
            console.log(k);
            if ((k<=2)||(json_string==complete_order)) {
                console.log("NAG-MATCH!!!!");
                $('div.gridster').hide(0);
                $('div.endingpic').show(0);
                complete_puzzle =1;
                
                  $('div.endingpic').animate({"opacity": "0"},
            {duration:4000, queue: true,
            complete: function() { 
        }});
                  $( "#submit_button" ).click();
                
                  setTimeout(showFinalEnding, 3500);
                  i=1;
                console.log("After i=1");
                console.log(i);
            }
             
            }
            k = 0;
 
       
  }); 
    
  
   $( "li" ).mouseup(function() {
    
           console.log("mouseup");
                    var gridster = $(".gridster ul").gridster({
                    serialize_params: function($w, wgd) {
                        return {
                            x: wgd.col,
                            y: wgd.row,
                            width: wgd.size_x,
                            height: wgd.size_y,
                            id: $($w).attr('id'),
                            class: $($w).attr('class')
                        }
                    }
                }).data('gridster');

                var json = JSON.stringify(gridster.serialize());
                    console.log(json);
            var json_string = "";
            json_string = json;
            console.log("json_string");
            console.log(json_string);
            console.log(complete_order);
            var k =0;
        if ($(this).hasClass("unlocked")) {
            for (j = 0; j< complete_order.length; j++) {
                if (complete_order[j] != json_string[j] ) {
                    k++;
                    console.log("k");
                    console.log(k);
                    console.log(json_string[j]);
                    console.log(complete_order[j]);
                    if(k >2) {
                        break;
                    }
                }
            }
            console.log("value of k");
            console.log(k);
            if ((k<=2)||(json_string==complete_order)) {
                console.log("NAG-MATCH!!!!");
                $('div.gridster').hide(0);
                $('div.endingpic').show(0);
                $('div.endingpic').animate({"opacity": "0"},
            {duration:4000, queue: true,
            complete: function() { 
        }});
                complete_puzzle =1;
                   $( "#submit_button" ).click();
                 setTimeout(showFinalEnding, 3500);
    
                  i=1;
                console.log("After i=1");
                console.log(i);
            }
        
            }
            k = 0;
 
       
  }); 

      
var gridster = $(".gridster ul").gridster({
    serialize_params: function($w, wgd) {
        return {
            x: wgd.col,
            y: wgd.row,
            width: wgd.size_x,
            height: wgd.size_y,
            id: $($w).attr('id'),
            class: $($w).attr('class')
        }
    }
}).data('gridster');

var json = JSON.stringify(gridster.serialize());
    console.log(json);

});