$(document).on('click', '.mega-dropdown-menu', function(e) {
    e.stopPropagation()
})

odoo.define('biztech_website_megamenu.custom_js', function(require) {
    'use strict';

    $(document).ready(function() {
        // e.stopPropagation()
            setTimeout(function(){
                $('li.li-mega-menu').on('click',function(event) {
                    var sliderTwo = $('.mm-carousel-slider .carousel').carousel({
                        /* your options for slider #2 */
                    })
                    $(".mm-carousel-slider .carousel-control").click(function (e) {
                        var index = $(this).data('slide');
                        sliderTwo.carousel(index);
                        e.preventDefault();
                    });
                });

            },100)
        // close opened List catefory menus on loading if its mobile view
        if ( $(window).width() < 768) {
            $('.main_category').each(function() {
                var $each_header = $(this).parent().parent().find('li')

                // to close opened menu
                if ( $(this).parent().hasClass('active') == true ){
                    $(this).parent().next('.category_container').addClass('o_hidden');
                    $(this).parent().removeClass('active');
                    return true
                }
            });
        }

        
        $('.main_category').click(function() {
            var $each_header = $(this).parent().parent().find('li')

            // to close opened menu
            if ( $(this).parent().hasClass('active') == true ){
                $(this).parent().next('.category_container').addClass('o_hidden');
                $(this).parent().removeClass('active');
                return true
            }

            $each_header.removeClass('active');
            $(this).parent().addClass('active');

            var $parent_container = $(this).parent().parent().parent().parent()
            var clicked_cat_id = parseInt($(this).attr('id'));

            $parent_container.find('.category_container').each(function() {

                var cat_id = parseInt($(this).attr('name'));
                if (cat_id == clicked_cat_id) {
                    $(this).removeClass('o_hidden');
                } else {
                    $(this).addClass('o_hidden');
                }
            });
        });


        $('.list_cat_megamenu, .cat_megamenu, .pages_megamenu').each(function() {
            var list_cat_selector = this

            $(list_cat_selector).on('click', '.second-category', function(e) {
                var redirect_to = $(this).find('a').first().attr('href')
                window.location.href = redirect_to
            });

            $(list_cat_selector).on('click', '.first-category-dd', function(e) {
                var $child = $(this).parent().find('.second-category');

                var $ripple = $(this).parent().find('.ripple');
                var ripple_time = 1000;
                if ($ripple.length > 0){

                    $ripple.addClass('ripple_animated');
                    setTimeout(function(){
                        $ripple.removeClass('ripple_animated');       
                    }, ripple_time);
                }

                if ($(this).parent().hasClass('open') == true) {
                    $(this).parent().parent().find('li').removeClass('open');
                    $(this).parent().parent().parent().removeClass('o_sub_opened');

                } else {
                    $(this).parent().parent().parent().parent().find('li').removeClass('o_sub_opened');
                    $(this).parent().parent().parent().parent().find('.categories, .first-category-dd').removeClass('open');
                    $(this).parent().parent().parent().addClass('o_sub_opened');
                    $(this).parent().addClass('open');
                }
            });
        });
        setTimeout(function(){
            $('header.o_header_affix .list_cat_megamenu,header.o_header_affix .cat_megamenu,header.o_header_affix .pages_megamenu').each(function() {
                var list_cat_selector = this

                $(list_cat_selector).on('click', '.second-category', function(e) {
                    var redirect_to = $(this).find('a').first().attr('href')
                    window.location.href = redirect_to
                });

                $(list_cat_selector).on('click', '.first-category-dd', function(e) {
                    var $child = $(this).parent().find('.second-category');

                    var $ripple = $(this).parent().find('.ripple');
                    var ripple_time = 1000;
                    if ($ripple.length > 0){

                        $ripple.addClass('ripple_animated');
                        setTimeout(function(){
                            $ripple.removeClass('ripple_animated');       
                        }, ripple_time);
                    }

                    if ($(this).parent().hasClass('open') == true) {
                        $(this).parent().parent().find('li').removeClass('open');
                        $(this).parent().parent().parent().removeClass('o_sub_opened');

                    } else {
                        $(this).parent().parent().parent().parent().find('li').removeClass('o_sub_opened');
                        $(this).parent().parent().parent().parent().find('.categories, .first-category-dd').removeClass('open');
                        $(this).parent().parent().parent().addClass('o_sub_opened');
                        $(this).parent().addClass('open');
                    }
                });
            });
        },500);
    });
});