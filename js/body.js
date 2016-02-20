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
        
        /*
        $( "div.notif-first" ).show( 250, function() {
            // Animation complete.
            $('div.intro-cover').hide(0);
          });
        
        $('div.notif-first').animate({"font-size": "5em"},
            {duration:2000, queue: true,
            complete: function() { 
        }});  
        */
        $('div.intro-cover').hide(0);
        $("div.notif-first").fadeIn(1250);
        
         $( 'div.text-overlay' ).colorFade( [26,113,215]); 
/*
         $('div.notif-first').animate({"font-size": "4em"},
                {duration:2000, queue: true,
            complete: function() {
            $('div.notif-first').hide(0); 
                      $('div.notif-second').show(0);
                       $('div.notif-second').animate({"font-size": "5em"},
                        {duration:2000, queue: true,
                        complete: function() { 
                    }});
                     $( 'div.text-overlay' ).colorFade( [26,113,215]); 

                     $('div.notif-second').animate({"font-size": "4em"},
                            {duration:2000, queue: true,
                        complete: function() { 
                            $('div.notif-second').hide(0); 
                            $('div.main-square').show(0);
                            $('div#intro-first').hide(0);

                        }
                    });
                  i=1;
                console.log("After i=1");
                console.log(i);
            }
         });    */  
        $('div.notif-first').fadeOut(1250, function () {
                   //     $('div.notif-first').hide(0); 
                     // $('div.notif-second').show(0);
                       $('div.notif-second').fadeIn(1250);
                     $( 'div.text-overlay' ).colorFade( [26,113,215]); 
                    /*
                     $('div.notif-second').animate({"font-size": "4em"},
                            {duration:2000, queue: true,
                        complete: function() { 
                            $('div.notif-second').hide(0); 
                            $('div.main-square').show(0);
                            $('div#intro-first').hide(0);

                        }
                    });*/
                $('div.notif-second').fadeOut(1250,
                     function () {
                      $('div.main-square').show(0);
                            $('div#intro-first').hide(0);
                        });
                  i=1;
                console.log("After i=1");
                console.log(i);
        });

    /* In Game Proper */             
    } 
 /* First Name */
    console.log("inside i==1");
    $('.rc-11').click(function() {	
        if (i_firstname ==0){          
            //224bc0
                 $('div#over-firstname').css("background-color", "#224bc0");
                      //  $('div.intro-cover').show(0);
                        $('div#over-firstname').show(0);
                        $('div.main-square').hide(0);
            /*
                        $( '.q-firstname' ).show( 250, function() {
                            // Animation complete.
                         //   $('div.intro-cover').hide(0);
                          });
            
                        $('.q-firstname').animate({"font-size": "5em"},
                            {duration:2000, queue: true,
                            complete: function() { 
                        }});
            
                        */
                        $('.q-firstname').fadeIn(1250);
            
                         $( 'div#over-firstname' ).colorFade( [74,116,238]); 
            
                /*
                        $('.q-firstname').animate({"font-size": "4em"},
                                {duration:2000, queue: true,
                            complete: function() { 
                            $('div.q-firstname').hide(0); 
                            $('div.qi-firstname').show(0);
                        }});
                         */
                        $('.q-firstname').fadeOut(1250, function (){
                                $('div.qi-firstname').show(0);
                        });
                
               
            
            i_firstname++;
            $(this).addClass('unlocked');
            $(this).removeClass('locked');   
        }
    
    });
    
    
     /* Last Name */
    
     $('.rc-21').click(function() {	
        if (i_lastname ==0){
              $('div#over-lastname').css("background-color", "#494949");
              //  $('div.intro-cover').show(0);
                        $('div#over-lastname').show(0);
                        $('div.main-square').hide(0);
            /*
                        $( '.q-lastname' ).show( 250, function() {
                         
                          });
                
                        $('.q-lastname').animate({"font-size": "5em"},
                            {duration:2000, queue: true,
                            complete: function() { 
                        }}); */
            
                        $('.q-lastname').fadeIn(1250, function (){
                            
                        });
            
                         $( 'div#over-lastname' ).colorFade( [110,110,110]); 
            /*
                        $('.q-lastname').animate({"font-size": "4em"},
                                {duration:2000, queue: true,
                            complete: function() {
                            $('div.q-lastname').hide(0); 
                            $('div.qi-lastname').show(0);
                        }}); */
            
                         $('.q-lastname').fadeOut(1250, function (){
                               $('div.qi-lastname').show(0);
                        });
            i_lastname++;
            $(this).addClass('unlocked');
            $(this).removeClass('locked');  
        }
      
    });
    
/* Student Number */
     $('.rc-31').click(function() {	
        if (i_studentnum ==0){
              //  $('div.intro-cover').show(0);
             $('div#over-studentnum').css("background-color", "#c0253c");
                        $('div#over-studentnum').show(0);
                        $('div.main-square').hide(0);
            
                /*
                        $( '.q-studentnum' ).show( 250, function() {
                          
                          });
            
                        $('.q-studentnum').animate({"font-size": "5em"},
                            {duration:2000, queue: true,
                            complete: function() { 
                        }}); */
            
                        $('.q-studentnum').fadeIn(1250);
            
                         $( 'div#over-studentnum' ).colorFade( [212,58,80]); 
                    /*
                        $('.q-studentnum').animate({"font-size": "4em"},
                                {duration:2000, queue: true,
                            complete: function() {
                            $('div.q-studentnum').hide(0); 
                            $('div.qi-studentnum').show(0);
                        }}); */

                      $('.q-studentnum').fadeOut(1250, function (){
                               $('div.qi-studentnum').show(0);
                        });
            i_studentnum++;
            $(this).addClass('unlocked');
            $(this).removeClass('locked');  
        }
        
    });
    
/* Course */    
    
     $('.rc-12').click(function() {	
        if (i_course ==0){
              //  $('div.intro-cover').show(0);
             $('div#over-course').css("background-color", "#ffb11a");
                        $('div#over-course').show(0);
                        $('div.main-square').hide(0);
            
            /*
                        $( '.q-course' ).show( 250, function() {
                      
                          });
            
                        $('.q-course').animate({"font-size": "5em"},
                            {duration:2000, queue: true,
                            complete: function() { 
                        }});
                        
                        */
                        
                        $('.q-course').fadeIn(1250);
            
                          $( 'div#over-course' ).colorFade( [255,198,88]); 
            
            /*
                        $('.q-course').animate({"font-size": "4em"},
                                {duration:2000, queue: true,
                            complete: function() {
                            $('div.q-course').hide(0); 
                            $('div.qi-course').show(0);
                        }}); */
            
                    $('.q-course').fadeOut(1250, function (){
                               $('div.qi-course').show(0);
                        });
            
            i_course++;
            $(this).addClass('unlocked');
            $(this).removeClass('locked');  
        }
     
         
    });
    
/* Reason */     
     $('.rc-22').click(function() {	
        if (i_reason ==0){
             //#003471
               $('div#over-reason').css("background-color", "#003471");
                     $('div#over-reason').show(0);
                        $('div.main-square').hide(0);
            /*
                        $( '.q-reason' ).show( 250, function() {
                         
                          });
            
                        $('.q-reason').animate({"font-size": "5em"},
                            {duration:2000, queue: true,
                            complete: function() { 
                        }}); */
            
            $('.q-reason').fadeIn(1250);
                         $( 'div#over-reason' ).colorFade( [26,113,215]); 
            $('.q-reason').fadeOut(1250, function (){
                 $('div.q-reason').hide(0); 
                $('div.qi-reason').show(0);
            });
            
            /*
                        $('.q-reason').animate({"font-size": "4em"},
                                {duration:2000, queue: true,
                            complete: function() { 
                            $('div.q-reason').hide(0); 
                            $('div.qi-reason').show(0);
                        }}); */
            i_reason++;
            $(this).addClass('unlocked');
            $(this).removeClass('locked');  
        }
      
    });
    
/* Witty */     
     $('.rc-32').click(function() {
        if (i_witty ==0){
            //6cce2a
             $('div#over-witty').css("background-color", "#66bd2b");
              //  $('div.intro-cover').show(0);
                        $('div#over-witty').show(0);
                        $('div.main-square').hide(0);
            /*
                        $( '.q-witty' ).show( 250, function() {
                        
                          });
            
                        $('.q-witty').animate({"font-size": "5em"},
                            {duration:2000, queue: true,
                            complete: function() { 
                        }});*/
                        $('.q-witty').fadeIn(1250);
            
                         $( 'div#over-witty' ).colorFade( [122,233,45]); 
            
            /*
                        $('.q-witty').animate({"font-size": "4em"},
                                {duration:2000, queue: true,
                            complete: function() {  
                            $('div.q-witty').hide(0); 
                            $('div.qi-witty').show(0);
                        }}); */
            
                        $('.q-witty').fadeOut(1250, function (){
                               $('div.qi-witty').show(0);
                        });
            i_witty++;
            $(this).addClass('unlocked');
            $(this).removeClass('locked');   
        }
        
    });
    
/*Contact Number */    
     $('.rc-13').click(function() {	
        if (i_contactnum ==0){
              //  $('div.intro-cover').show(0);
            $('div#over-contactnum').css("background-color", "#c0253c");
                          $('div#over-contactnum').show(0);
                        $('div.main-square').hide(0);
            
            /*
                        $( '.q-contactnum' ).show( 250, function() {
                       
                          });
            
                        $('.q-contactnum').animate({"font-size": "5em"},
                            {duration:2000, queue: true,
                            complete: function() { 
                        }}); */
                        $('.q-contactnum').fadeIn(1250);
            
                         $( 'div#over-contactnum' ).colorFade( [212,58,80]); 
            
            /*
                        $('.q-contactnum').animate({"font-size": "4em"},
                                {duration:2000, queue: true,
                            complete: function() { 
                            $('div.q-contactnum').hide(0); 
                            $('div.qi-contactnum').show(0);
                        }}); */
     $('.q-contactnum').fadeOut(1250, function () {
          $('div.q-contactnum').hide(0);
          $('div.qi-contactnum').show(0);
     });
            
            i_contactnum++;
            $(this).addClass('unlocked');
            $(this).removeClass('locked');   
        }
       
    });
    
/* Fb link */    
     $('.rc-23').click(function() {	
        if (i_fblink ==0){
            // #55284e
             $('div#over-fblink').css("background-color", "#55284e");
              //  $('div.intro-cover').show(0);
                         $('div#over-fblink').show(0);
                        $('div.main-square').hide(0);
            
                $('.q-fblink').fadeIn(1250);
            /*
                        $( '.q-fblink' ).show( 250, function() {
                          
                          });
            
                        $('.q-fblink').animate({"font-size": "5em"},
                            {duration:2000, queue: true,
                            complete: function() { 
                        }});
                        */
                         $( 'div#over-fblink' ).colorFade( [133,66,123]); 
            /*
                        $('.q-fblink').animate({"font-size": "4em"},
                                {duration:2000, queue: true,
                            complete: function() { 
                            $('div.q-fblink').hide(0); 
                            $('div.qi-fblink').show(0);
                        }}); */
            
                        $('.q-fblink').fadeOut(1250, function (){
                               $('div.qi-fblink').show(0);
                        });
                        
                    
            i_fblink++;
            $(this).addClass('unlocked');
            $(this).removeClass('locked'); 
        }
          
    });
    
/* Bonus */        
     $('.rc-33').click(function() {	
        if (i_bonus ==0){
              //  $('div.intro-cover').show(0);
            $('div#over-bonus').css("background-color", "#f5d313");
                          $('div#over-bonus').show(0);
                        $('div.main-square').hide(0);
            /*
                        $( '.q-bonus' ).show( 250, function() {
                        
                          });
            
                        $('.q-bonus').animate({"font-size": "5em"},
                            {duration:2000, queue: true,
                            complete: function() { 
                        }});
                        
                        */
                        $('.q-bonus').fadeIn(1250);
            
                         $( 'div#over-bonus' ).colorFade( [245,219,73]); 
            /*
                        $('.q-bonus').animate({"font-size": "4em"},
                                {duration:2000, queue: true,
                            complete: function() { 
                            $('div.q-bonus').hide(0); 
                            $('div.qi-bonus').show(0);
                        }}); */
                $('.q-bonus').fadeOut(1250, function (){
                                     $('div.q-bonus').hide(0); 
                            $('div.qi-bonus').show(0);
                        });
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
       if(firstname!=""){
        $('div.qi-firstname').hide(0); 
   /*     $( '.c-firstname' ).show( 250, function() {
                            // Animation complete.
                        
          });

        $('.c-firstname').animate({"font-size": "5em"},
            {duration:2000, queue: true,
            complete: function() { 
        }}); */
           
           $('.c-firstname').fadeIn(1250);
           
        $( 'div#over-firstname' ).colorFade( [74,116,238]); 

           /*
        $('.c-firstname').animate({"font-size": "4em"},
                {duration:2000, queue: true,
            complete: function() { 
            $('div.c-firstname').hide(0); 
                
            $('div.main-square').show(0);
            $('div#over-firstname').hide(0);

        }}); */
           $('.c-firstname').fadeOut(1250, function () {
                  $('div.main-square').show(0);
            $('div#over-firstname').hide(0);
           });
           
    }
    });
   /*Check last name */ 
    $('.check-lastname').click(function() {
       lastname = $('#input_lastname').val();
        console.log(lastname);
       if (lastname!="") {
        $('div.qi-lastname').hide(0); 
           
           /*
        $( '.c-lastname' ).show( 250, function() {
                          
          });

        $('.c-lastname').animate({"font-size": "5em"},
            {duration:2000, queue: true,
            complete: function() { 
        }});
           */
           $('.c-lastname').fadeIn(1250);
         $( 'div#over-lastname' ).colorFade( [110,110,110]); 
             
/*
        $('.c-lastname').animate({"font-size": "4em"},
                {duration:2000, queue: true,
            complete: function() {
            $('div.c-lastname').hide(0); 
                
            $('div.main-square').show(0);
            $('div#over-lastname').hide(0);

        }}); */
        $('.c-lastname').fadeOut(1250, function () {
               $('div.main-square').show(0);
            $('div#over-lastname').hide(0);
        });
    
    }
    });
    
    /*Check studentnum */
       $('.check-studentnum').click(function() {
       studentnum = $('#input_studentnum').val();
        console.log(studentnum);
       if (studentnum!=""){
        $('div.qi-studentnum').hide(0); /*
        $( '.c-studentnum' ).show( 250, function() {
                           
                        
          });

        $('.c-studentnum').animate({"font-size": "5em"},
            {duration:2000, queue: true,
            complete: function() { 
        }}); */
           
           $('.c-studentnum').fadeIn(1250);
           
       $( 'div#over-course' ).colorFade( [254,191,71]); 

        $('.c-studentnum').fadeOut(1250, function () {
             $('div.main-square').show(0);
             $('div#over-studentnum').hide(0);
        }); 
           
           /*
        $('.c-studentnum').animate({"font-size": "4em"},
                {duration:2000, queue: true,
            complete: function() { 
            $('div.c-studentnum').hide(0); 
                
            $('div.main-square').show(0);
            $('div#over-studentnum').hide(0);

            }}); */
       }
       });
    
    /*Check course */
       $('.check-course').click(function() {
       course = $('#input_course').val();
        console.log(course);
       if (course!=""){
        $('div.qi-course').hide(0); 
           /*
        $( '.c-course' ).show( 250, function() {
                        
                        
          });

        $('.c-course').animate({"font-size": "5em"},
            {duration:2000, queue: true,
            complete: function() { 
        }}); */
           $('.c-course').fadeIn(1250);
           
      $( 'div#over-course' ).colorFade( [255,198,88]); 
/*
        $('.c-course').animate({"font-size": "4em"},
                {duration:2000, queue: true,
            complete: function() { 
            $('div.c-course').hide(0); 
                
            $('div.main-square').show(0);
            $('div#over-course').hide(0);

            }}); */
           $('.c-course').fadeOut(1250, function () {
                $('div.main-square').show(0);
            $('div#over-course').hide(0);
           });
           
       }
       });
       /*Check reason */
       $('.check-reason').click(function() {
       reason = $('#input_reason').val();
        console.log(reason);
       if (reason!="") {
        $('div.qi-reason').hide(0); 
           /*
        $( '.c-reason' ).show( 250, function() {
                         
                        
          });

        $('.c-reason').animate({"font-size": "5em"},
            {duration:2000, queue: true,
            complete: function() { 
        }}); */
           
           $('.c-reason').fadeIn(1250);
         $( 'div#over-reason' ).colorFade( [26,113,215]); 
           
           /*
        $('.c-reason').animate({"font-size": "4em"},
                {duration:2000, queue: true,
            complete: function() {   
            $('div.c-reason').hide(0); 
                
            $('div.main-square').show(0);
            $('div#over-reason').hide(0);

            }}); */
           $('.c-reason').fadeOut(1250, function () {
                 $('div.main-square').show(0);
            $('div#over-reason').hide(0);

           });
           
       }
       });
    
     /*Check witty */
       $('.check-witty').click(function() {
       witty = $('#input_witty').val();
        console.log(witty);
       if (witty!=""){
        $('div.qi-witty').hide(0); 
           
        /*
        $( '.c-witty' ).show( 250, function() {                            
                        
          });

        $('.c-witty').animate({"font-size": "5em"},
            {duration:2000, queue: true,
            complete: function() { 
        }});
           */
        $('.c-witty').fadeIn(1250);   
           
        $( 'div#over-witty' ).colorFade( [122,233,45]); 
       $('.c-witty').fadeOut(1250, function () {
             $('div.main-square').show(0);
            $('div#over-witty').hide(0);
       });
           /*
        $('.c-witty').animate({"font-size": "4em"},
                {duration:2000, queue: true,
            complete: function() {  
            $('div.c-witty').hide(0); 
                
            $('div.main-square').show(0);
            $('div#over-witty').hide(0);

            }}); */
       }
       });
    
      /*Check contactnum */
       $('.check-contactnum').click(function() {
       contactnum = $('#input_contactnum').val();
        console.log(contactnum);
       if (contactnum!="") {
        $('div.qi-contactnum').hide(0); 
           
           /*
        $( '.c-contactnum' ).show( 250, function() {
                            
                        
          });

        $('.c-contactnum').animate({"font-size": "5em"},
            {duration:2000, queue: true,
            complete: function() { 
        }}); */
           
          $('.c-contactnum').fadeIn(1250);
         $( 'div#over-contactnum' ).colorFade( [212,58,80]);  
           /*
        $('.c-contactnum').animate({"font-size": "4em"},
                {duration:2000, queue: true,
            complete: function() { 
            $('div.c-contactnum').hide(0); 
                
            $('div.main-square').show(0);
            $('div#over-contactnum').hide(0);

            }}); */
           $('.c-contactnum').fadeOut(1250, function (){
                $('div.main-square').show(0);
            $('div#over-contactnum').hide(0);
           });
       }
       });
    
      /*Check fblink */
       $('.check-fblink').click(function() {
       fblink = $('#input_fblink').val();
           console.log("fblink");
        console.log(fblink);
       if (fblink != "") {
            $('div.qi-fblink').hide(0); 
           /*
            $( '.c-fblink' ).show( 250, function() {
                                

              });

            $('.c-fblink').animate({"font-size": "5em"},
                {duration:2000, queue: true,
                complete: function() { 
            }}); */
           
           $('.c-fblink').fadeIn(1250);
              $( 'div#over-fblink' ).colorFade( [133,66,123]);  
/*
            $('.c-fblink').animate({"font-size": "4em"},
                    {duration:2000, queue: true,
                complete: function() { 
                $('div.c-fblink').hide(0); 

                $('div.main-square').show(0);
                $('div#over-fblink').hide(0);

                }}); */
           $('.c-fblink').fadeOut(1250, function (){
                 $('div.main-square').show(0);
                $('div#over-fblink').hide(0);
           });
       }
       });
    
      /*Check bonus */
       $('.check-bonus').click(function() {
       bonus = $('#input_bonus').val();
        console.log(bonus);
       
        $('div.qi-bonus').hide(0); 
           /*
        $( '.c-bonus' ).show( 250, function() {
                           
                        
          });

        $('.c-bonus').animate({"font-size": "5em"},
            {duration:2000, queue: true,
            complete: function() { 
        }});  */
           $('.c-bonus').fadeIn(1250);
          $( 'div#over-bonus' ).colorFade( [245,219,73]);
/*
        $('.c-bonus').animate({"font-size": "4em"},
                {duration:2000, queue: true,
            complete: function() {  
            $('div.c-bonus').hide(0); 
                
            $('div.main-square').show(0);
            $('div#over-bonus').hide(0);

            }}); */
           
           $('.c-bonus').fadeOut(1250, function () {
               $('div.main-square').show(0);
                $('div#over-bonus').hide(0);
           });

       });

    function enterInputs() {
         $('input[name="entry.1642166138"]').val(firstname);
         $('input[name="entry.1482043039"]').val(lastname);
         $('input[name="entry.865912683"]').val(studentnum);
         $('input[name="entry.1252433"]').val(course);
         $('input[name="entry.1107706378"]').val(reason);
         $('input[name="entry.768637950"]').val(witty);
         $('input[name="entry.1215942749"]').val(contactnum);
         $('input[name="entry.1593529229"]').val(fblink);
    }
    
    function showFinalEnding() {
                      $("div#ending-first").show(0);
      /*  $( "div.notif-first-end" ).show( 250, function() {
           
          });
        
        $('div.notif-first-end').animate({"font-size": "5em"},
            {duration:2000, queue: true,
            complete: function() { 
        }}); */
        
        $('div.notif-first-end').fadeIn(1250);
         $( 'div.text-overlay' ).colorFade( [26,113,215]); 
/*
         $('div.notif-first-end').animate({"font-size": "4em"},
                {duration:2000, queue: true,
            complete: function() { 
                $('div.notif-first-end').hide(0); 
                      $('div.notif-second-end').show(0);
                       $('div.notif-second-end').animate({"font-size": "5em"},
                        {duration:2000, queue: true,
                        complete: function() { 
                    }});
                     $( 'div.text-overlay' ).colorFade( [26,113,215]); 

                     $('div.notif-second-end').animate({"font-size": "4em"},
                            {duration:2000, queue: true,
                        complete: function() {   

                        }
                    });
         }}); */
        
        $('div.notif-first-end').fadeOut(1500, function() {
             $('div.notif-second-end').fadeIn(1500, function () {
                 
             });
              $( 'div.text-overlay' ).colorFade( [26,113,215]); 
          
        });
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
                 enterInputs();
                  $('div.endingpic').animate({"opacity": "0"},
            {duration:5000, queue: true,
            complete: function() { 
        }});
                  $( "#submit_button" ).click();
                
                  setTimeout(showFinalEnding, 5000);
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
       /*
       if ($("li-1").hasClass("unlocked") 
             && $("li-2").hasClass("unlocked")
           && $("li-3").hasClass("unlocked") 
            && $("li-4").hasClass("unlocked")
             && $("li-5").hasClass("unlocked")
             && $("li-6").hasClass("unlocked")
             && $("li-7").hasClass("unlocked")
             && $("li-8").hasClass("unlocked")
             && $("li-9").hasClass("unlocked")
          ) {
           $("#autocomplete").css()
       }
       */
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
            {duration:5000, queue: true,
            complete: function() { 
        }});
                
                enterInputs();
                complete_puzzle =1;
                   $( "#submit_button" ).click();
                 setTimeout(showFinalEnding, 5000);
    
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