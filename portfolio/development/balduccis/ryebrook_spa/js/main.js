jQuery(document).ready(function() {
    jQuery.noConflict();
    
     //Automate Tabs
    
    var tabChange = function () {
    var tabs = jQuery('.tab');
    var active = tabs.filter('.active');
    var next = active.next('.tab').length ? active.next('.tab') : tabs.filter(':first-child');
    // Use the Bootsrap tab show method
    tabs.removeClass('active');    
    next.addClass('active');
    var box = next.data('tab');
    jQuery('.service_slide').addClass('hidden');
    jQuery('#' + box).removeClass('hidden');
        if (next.is('#caterTab')) {
            if (jQuery(window).width() > 767) {
            jQuery('.tab_services').css('background-image', 'url(img/cater_back.jpg)');
            }
            else {
                jQuery('.tab_services').css('background-image', 'url(img/mob_cater_slide.jpg)');
            }
        }
        else if (next.is('#chefTab')) {
            if (jQuery(window).width() > 767) {
            jQuery('.tab_services').css('background-image', 'url(img/chef_back.jpg)');
            }
            else {
                jQuery('.tab_services').css('background-image', 'url(img/mob_chef_slide.jpg)');
            }
        }
        else if (next.is('#butcherTab')) {
            if (jQuery(window).width() > 767) {
            jQuery('.tab_services').css('background-image', 'url(img/butcher_back.jpg)');
            }
            else {
                jQuery('.tab_services').css('background-image', 'url(img/mob_butcher_slide.jpg)');
            }
        }
        else if (next.is('#cheeseTab')) {
            if (jQuery(window).width() > 767) {
            jQuery('.tab_services').css('background-image', 'url(img/cheese_back.jpg)');
            }
            else {
                jQuery('.tab_services').css('background-image', 'url(img/mob_cheese_slide.jpg)');
            }
        }
    };
    // Tab Cycle function
    var tabCycle = setInterval(tabChange, 4000);

    // Tab click event handler
    jQuery('.tab').on('click', function (e) {
        e.preventDefault();
        // Stop the cycle
        clearInterval(tabCycle);
        // Show the clicked tabs associated tab-pane
        var box = jQuery(this).data('tab');
        jQuery('.service_slide').addClass('hidden');
        jQuery('#' + box).removeClass('hidden');
        // Start the cycle again in a predefined amount of time
        setTimeout(function () {
            tabCycle = setInterval(tabChange, 4000);
        }, 6000);
        if (jQuery(this).is('#caterTab')) {
            if (jQuery(window).width() > 767) {
            jQuery('.tab_services').css('background-image', 'url(img/cater_back.jpg)');
            }
            else {
                jQuery('.tab_services').css('background-image', 'url(img/mob_cater_slide.jpg)');
            }
        }
        else if (jQuery(this).is('#chefTab')) {
            if (jQuery(window).width() > 767) {
            jQuery('.tab_services').css('background-image', 'url(img/chef_back.jpg)');
            }
            else {
                jQuery('.tab_services').css('background-image', 'url(img/mob_chef_slide.jpg)');
            }
        }
        else if (jQuery(this).is('#butcherTab')) {
            if (jQuery(window).width() > 767) {
            jQuery('.tab_services').css('background-image', 'url(img/butcher_back.jpg)');
            }
            else {
                jQuery('.tab_services').css('background-image', 'url(img/mob_butcher_slide.jpg)');
            }
        }
        else if (jQuery(this).is('#cheeseTab')) {
            if (jQuery(window).width() > 767) {
            jQuery('.tab_services').css('background-image', 'url(img/cheese_back.jpg)');
            }
            else {
                jQuery('.tab_services').css('background-image', 'url(img/mob_cheese_slide.jpg)');
            }
        }
    });
    
    
    
    
    jQuery('#exploreSlider').carousel({
      interval: 4000
    });
    
    if (jQuery(window).width() > 767) {
    jQuery('#exploreSlider .item').each(function(){
      var next = jQuery(this).next();
      if (!next.length) {
        next = jQuery(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo(jQuery(this));

      for (var i=0;i<4;i++) {
        next=next.next();
        if (!next.length) {
            next = jQuery(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo(jQuery(this));
      }
    });
    }
    else {
       jQuery('#exploreSlider .item').each(function(){
      var next = jQuery(this).next();
      if (!next.length) {
        next = jQuery(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo(jQuery(this));

      for (var i=0;i<1;i++) {
        next=next.next();
        if (!next.length) {
            next = jQuery(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo(jQuery(this));
      }
    }); 
    }
    
    if (jQuery(window).width() < 767) {
        jQuery('.caption_img_1').attr('src', 'img/exper_slide_1_mob.jpg');
        jQuery('.caption_img_1').click(function() {
            jQuery('#slide1Cap').modal('show');
        });
        jQuery('.caption_img_2').attr('src', 'img/exper_slide_2_mob.jpg');
        jQuery('.caption_img_2').click(function() {
            jQuery('#slide2Cap').modal('show');
        });
        jQuery('.caption_img_3').attr('src', 'img/exper_slide_3_mob.jpg');
        jQuery('.caption_img_3').click(function() {
            jQuery('#slide3Cap').modal('show');
        });
        jQuery('.caption_img_4').attr('src', 'img/exper_slide_4_mob.jpg');
        jQuery('.caption_img_4').click(function() {
            jQuery('#slide4Cap').modal('show');
        });
        jQuery('.caption_img_5').attr('src', 'img/exper_slide_5_mob.jpg');
        jQuery('.caption_img_5').click(function() {
            jQuery('#slide5Cap').modal('show');
        });
    }
    
    
    
    var capWidthMob = jQuery('.mob_holder').width();
    jQuery('.caption_mob').width(capWidthMob);
    
    jQuery(window).resize(function() {
        var newCapWidthMob = jQuery('.mob_holder').width();
    jQuery('.caption_mob').width(newCapWidthMob);
    });
    
    // close map overlay
    jQuery('#closeMapOverlay').click(function() {
        jQuery('#mapOverlay').hide();
    });
    
    
    jQuery('.slick-next').addClass('glyphicon glyphicon-chevron-right');
   
    jQuery('.slick-prev').addClass('glyphicon glyphicon-chevron-left');
    
    //Active Class
    jQuery('.tab').on('click',function() {
        jQuery('.tab').removeClass('active');
        jQuery(this).addClass('active');
    });
    
    
    
    var $slider = jQuery('#department-slider');
        $slider.slick({
            dots: false,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 3,
            autoplay: false,
            responsive: [
				{
				    breakpoint: 769,
				    settings: {
				        slidesToShow: 4,
                        slidesToScroll: 2,
				    }
				},
				{
				    breakpoint: 480,
				    settings: {
				        slidesToShow: 2,
                        slidesToScroll: 1,
				    }
				},
            ]
        });

    jQuery('.slick-next').addClass('glyphicon glyphicon-chevron-right');
    
    
    jQuery(function () {
        jQuery('[data-toggle="tooltip"]').tooltip()
    })
    
   
    
    
});