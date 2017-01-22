var $ = jQuery;

jQuery(document).ready(function($) {

    $(window).load(function(){
        $('#preloader').fadeOut('slow',function(){$(this).remove();});
    });

});

// Setting up Video
var $ = jQuery;
var vidWidth = $(window).width(),
    vidHeight = $(window).height(),
    vidHeightVideo = $('#video-wrap').height();


$("#video-wrap").css({
    'width': vidWidth,
    'min-height': vidHeight
});

if(iOS()){
    $('.vidos').css({
        'display':'none'
    });
    $('.ios-gif').css({
        'display':'block'
    });
}

function iOS() {

  var iDevices = [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ];

  if (!!navigator.platform) {
    while (iDevices.length) {
      if (navigator.platform === iDevices.pop()){ return true; }
    }
  }

  return false;
}

$(window).on('resize', function(){
    vidWidth = $(window).width();
    vidHeight = $(window).height();
    vidHeightVideo = $('#video-wrap .row').height();


    $("#video-wrap").css({
        'width': vidWidth,
        'min-height': vidHeight
    });

    $("#nav-menu").stick_in_parent()
});

// Navbar fixing

$("#nav-menu").stick_in_parent()


// Calling Wow

new WOW().init();


// Count Down Timer

$('.countdown').final_countdown({
//    start : new Date().getTime() / 1000,
//    end   : new Date(2017,2,1).getTime() / 1000,
//    now   : new Date().getTime() / 1000,
    start : 1484911838,
    end   : 1488319200,
    now   : new Date().getTime() / 1000,
    seconds: {
    borderColor: '#5671fc',
    borderWidth: '3'
},
minutes: {
    borderColor: '#7e57c2',
    borderWidth: '3'
},
hours: {
    borderColor: '#4db6ac',
    borderWidth: '3'
},
days: {
    borderColor: '#d81b60',
    borderWidth: '3'
}}, function() {
});

// rotating text

(function() {

    var quotes = $(".quotes");
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(1000)
            .delay(1000)
            .fadeOut(1000, showNextQuote);
    }

    showNextQuote();

})();

// smooth mouse wheel
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


/*------------------------------------------
 Subscribe form ajax
 ------------------------------------------*/


$('#subscribe-form').submit(function(e) {

    e.preventDefault();
    var $form           = $('#subscribe-form');
    var submit          = $('#subscribe-button');
    var ajaxResponse    = $('#subscription-response');
    var email           = $('#subscriber-email').val();

    $.ajax({
        type: 'POST',
        url: 'php/subscribe.php',
        dataType: 'json',
        data: {
            email: email
        },
        cache: false,
        beforeSend: function(result) {
            submit.val("Joining...");
        },
        success: function(result) {
            if(result.sendstatus == 1) {
                ajaxResponse.html(result.message);
                $form.fadeOut(500);
            } else {
                ajaxResponse.html(result.message);
                submit.val("Join");
            }
        }
    });

});

$(document).ready(function() {

    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "php/contacts.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Спасибо!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});