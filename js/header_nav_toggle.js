$(function() {
    var $header = $('#header');
    var $page_top_btn = $('#page_top_btn');
    var change_header_position = $("#top").height() - $("#header").outerHeight(true);
    var change_page_top_btn_position = 800;

    // Nav and Page Top Btn Fixed
    $(window).scroll(function() {
        if ($(window).scrollTop() > change_header_position) { 
            $header.addClass('fixed');
        } else {
            $header.removeClass('fixed');
        }

        if ($(window).scrollTop() > change_page_top_btn_position) {
            $page_top_btn.addClass('fixed');
        } else {
            $page_top_btn.removeClass('fixed');
        }

    });

    // Nav Toggle Button
    $('#nav_toggle').click(function(){
        const toggle_status = $('#nav_toggle').css('display');
        if (toggle_status === "none") {
            console.log('button is display none, do nothing');
        } else {
            $header.toggleClass('open');
            // Global Nav
            if ( $('#header').hasClass('open') ) {
                $('#global_nav').slideDown();
                $('#global_nav').css('display','block');
            } else {
                $('#global_nav').slideUp(function() {
                    $('#global_nav').css('display','none');
                });
            }
        }
    });
    // Global Nav Links
    $('#global_nav li a').on('click', function(event){
        $('#nav_toggle').trigger('click');
    });

    // For Resize
    $(window).resize(function() {
        var width = $(window).width();
        if(width >= 769) {
            $('#global_nav').css('display', 'block');
            console.log('sp => tab or pc, global nav display block');
        } else {
            $('#global_nav').css('display', 'none');
            console.log('pc or tab => sp, global nav display none');
        }

    });
    
});