jQuery(document).ready(function () { "use strict"; nexuspcs_tm_color_switcher(); nexuspcs_tm_switcher_opener(); nexuspcs_tm_cursor_switcher(); nexuspcs_tm_menu(); nexuspcs_tm_modalbox_news(); nexuspcs_tm_popupscroll(); nexuspcs_tm_modalbox_about(); nexuspcs_tm_popupscroll_about(); nexuspcs_tm_projects(); nexuspcs_tm_portfolio(); nexuspcs_tm_cursor(); nexuspcs_tm_imgtosvg(); nexuspcs_tm_popup(); nexuspcs_tm_data_images(); nexuspcs_tm_contact_form(); nexuspcs_tm_owl_carousel(); jQuery(window).load('body', function () { nexuspcs_tm_my_load(); }); }); function nexuspcs_tm_color_switcher() { "use strict"; var list = jQuery('.nexuspcs_tm_settings .colors li a'); list.on('click', function () { var element = jQuery(this); var elval = element.attr('class'); element.closest('.nexuspcs_tm_all_wrap').attr('data-color', '' + elval + ''); return false; }); }
function nexuspcs_tm_switcher_opener() {
    "use strict"; var settings = jQuery('.nexuspcs_tm_settings'); var button = settings.find('.link'); var direction = settings.find('.direction li a'); var light = settings.find('.direction li a.light'); var dark = settings.find('.direction li a.dark'); button.on('click', function () {
        var element = jQuery(this); if (element.hasClass('opened')) { element.removeClass('opened'); element.closest('.nexuspcs_tm_settings').removeClass('opened'); } else { element.addClass('opened'); element.closest('.nexuspcs_tm_settings').addClass('opened'); }
        return false;
    }); direction.on('click', function () { var element = jQuery(this); if (!element.hasClass('active')) { direction.removeClass('active'); element.addClass('active'); } }); dark.on('click', function () { var el = jQuery(this); jQuery('body').addClass('dark'); jQuery('.nexuspcs_tm_partners').addClass('opened'); el.closest('.nexuspcs_tm_settings').addClass('changed'); return false; }); light.on('click', function () { var ele = jQuery(this); jQuery('body').removeClass('dark'); jQuery('.nexuspcs_tm_partners').removeClass('opened'); ele.closest('.nexuspcs_tm_settings').removeClass('changed'); return false; });
}
function nexuspcs_tm_cursor_switcher() {
    "use strict"; var wrapper = jQuery('.nexuspcs_tm_all_wrap'); var button = jQuery('.nexuspcs_tm_settings .cursor li a'); var show = jQuery('.nexuspcs_tm_settings .cursor li a.show'); var hide = jQuery('.nexuspcs_tm_settings .cursor li a.hide'); button.on('click', function () {
        var element = jQuery(this); if (!element.hasClass('showme')) { button.removeClass('showme'); element.addClass('showme'); }
        return false;
    }); show.on('click', function () { wrapper.attr('data-magic-cursor', ''); }); hide.on('click', function () { wrapper.attr('data-magic-cursor', 'hide'); });
}
function nexuspcs_tm_menu() { "use strict"; var list = jQuery('.nexuspcs_tm_all_wrap .leftpart .menu ul li,.nexuspcs_tm_mobile_menu .menu ul li'); var vContent = jQuery('.nexuspcs_tm_all_wrap'); var vSection = jQuery('.nexuspcs_tm_section'); list.on('click', function () { var element = jQuery(this); var myHref = element.find('a').attr('href'); if (!element.hasClass('active')) { list.removeClass('active'); element.addClass('active'); vSection.removeClass('active'); vContent.find(myHref).addClass('active').animate({ scrollTop: 0 }); } }); }
function nexuspcs_tm_modalbox_news() { "use strict"; var modalBox = jQuery('.nexuspcs_tm_modalbox_news'); var list = jQuery('.nexuspcs_tm_news ul li'); var closePopup = modalBox.find('.close'); list.each(function () { var element = jQuery(this); var details = element.find('.list_inner').html(); var buttons = element.find('.details .title a,.nexuspcs_tm_full_link,.nexuspcs_tm_read_more a'); var mainImage = element.find('.main'); var imgData = mainImage.data('img-url'); var title = element.find('.title'); var titleHref = element.find('.title a').html(); buttons.on('click', function () { jQuery('body').addClass('modal'); modalBox.addClass('opened'); modalBox.find('.description_wrap').html(details); mainImage = modalBox.find('.main'); mainImage.css({ backgroundImage: 'url(' + imgData + ')' }); title = modalBox.find('.title'); title.html(titleHref); nexuspcs_tm_imgtosvg(); return false; }); }); closePopup.on('click', function () { modalBox.removeClass('opened'); modalBox.find('.description_wrap').html(''); jQuery('body').removeClass('modal'); return false; }); }
function nexuspcs_tm_popupscroll() {
    "use strict"; var WW = jQuery(window).width(); var H = jQuery(window).height(); var scrollable = jQuery('.nexuspcs_tm_modalbox_news .scrollable'); var popupBox = jQuery('.nexuspcs_tm_modalbox_news .description_wrap'); if (WW >= 1200) { popupBox.css({ height: H - 140 }); } else { popupBox.css({ height: H }); }
    scrollable.each(function () {
        var element = jQuery(this); var wH = jQuery(window).height(); element.css({ height: wH - 140 }); if (WW >= 1200) { element.css({ height: wH - 140 }); } else { element.css({ height: wH }); }
        element.niceScroll({ touchbehavior: false, cursorwidth: 0, autohidemode: true, cursorborder: "0px solid #fff" });
    });
}
function nexuspcs_tm_modalbox_about() { "use strict"; var modalBox = jQuery('.nexuspcs_tm_modalbox_about'); var opener = jQuery('.nexuspcs_tm_about .nexuspcs_tm_button a'); var closer = modalBox.find('.close'); opener.on('click', function () { modalBox.addClass('opened'); return false; }); closer.on('click', function () { modalBox.removeClass('opened'); return false; }); }
function nexuspcs_tm_popupscroll_about() {
    "use strict"; var WW = jQuery(window).width(); var H = jQuery(window).height(); var scrollable = jQuery('.nexuspcs_tm_modalbox_about .scrollable'); var popupBox = jQuery('.nexuspcs_tm_modalbox_about .description_wrap'); if (WW >= 1200) { popupBox.css({ height: H - 140 }); } else { popupBox.css({ height: H }); }
    scrollable.each(function () {
        var element = jQuery(this); var wH = jQuery(window).height(); element.css({ height: wH - 140 }); if (WW >= 1200) { element.css({ height: wH - 140 }); } else { element.css({ height: wH }); }
        element.niceScroll({ touchbehavior: false, cursorwidth: 0, autohidemode: true, cursorborder: "0px solid #fff" });
    });
}
function nexuspcs_tm_projects() {
    "use strict"; jQuery('.nexuspcs_tm_portfolio_animation_wrap').each(function () {
        jQuery(this).on('mouseenter', function () {
            if (jQuery(this).data('title')) { jQuery('.nexuspcs_tm_portfolio_titles').html(jQuery(this).data('title') + '<span class="work__cat">' + jQuery(this).data('category') + '</span>'); jQuery('.nexuspcs_tm_portfolio_titles').addClass('visible'); }
            jQuery(document).on('mousemove', function (e) { jQuery('.nexuspcs_tm_portfolio_titles').css({ left: e.clientX - 10, top: e.clientY + 25 }); });
        }).on('mouseleave', function () { jQuery('.nexuspcs_tm_portfolio_titles').removeClass('visible'); });
    });
}
function nexuspcs_tm_portfolio() { "use strict"; if (jQuery().isotope) { var list = jQuery('.nexuspcs_tm_portfolio .portfolio_list'); var filter = jQuery('.nexuspcs_tm_portfolio .portfolio_filter ul'); if (filter.length) { filter.find('a').on('click', function () { var selector = jQuery(this).attr('data-filter'); list.isotope({ filter: selector, animationOptions: { duration: 750, easing: 'linear', queue: false } }); return false; }); filter.find('a').on('click', function () { filter.find('a').removeClass('current'); jQuery(this).addClass('current'); return false; }); } } }
function tdProgress(container) { "use strict"; container.find('.progress_inner').each(function () { var progress = jQuery(this); var pValue = parseInt(progress.data('value'), 10); var pColor = progress.data('color'); var pBarWrap = progress.find('.bar'); var pBar = progress.find('.bar_in'); pBar.css({ width: pValue + '%', backgroundColor: pColor }); setTimeout(function () { pBarWrap.addClass('open'); }); }); }
jQuery('.nexuspcs_progress').each(function () { "use strict"; var pWrap = jQuery(this); pWrap.waypoint({ handler: function () { tdProgress(pWrap); }, offset: '90%' }); }); function nexuspcs_tm_preloader() { "use strict"; var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false; var preloader = $('#preloader'); if (!isMobile) { setTimeout(function () { preloader.addClass('preloaded'); }, 800); setTimeout(function () { preloader.remove(); }, 2000); } else { preloader.remove(); } }
function nexuspcs_tm_my_load() { "use strict"; var speed = 500; setTimeout(function () { nexuspcs_tm_preloader(); }, speed); }
function nexuspcs_tm_cursor() { "use strict"; var myCursor = jQuery('.mouse-cursor'); if (myCursor.length) { if ($("body")) { const e = document.querySelector(".cursor-inner"), t = document.querySelector(".cursor-outer"); let n, i = 0, o = !1; window.onmousemove = function (s) { o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX }, $("body").on("mouseenter", "a, .cursor-pointer", function () { e.classList.add("cursor-hover"), t.classList.add("cursor-hover") }), $("body").on("mouseleave", "a, .cursor-pointer", function () { $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover")) }), e.style.visibility = "visible", t.style.visibility = "visible" } } }; function nexuspcs_tm_imgtosvg() {
    "use strict"; jQuery('img.svg').each(function () {
        var jQueryimg = jQuery(this); var imgClass = jQueryimg.attr('class'); var imgURL = jQueryimg.attr('src'); jQuery.get(imgURL, function (data) {
            var jQuerysvg = jQuery(data).find('svg'); if (typeof imgClass !== 'undefined') { jQuerysvg = jQuerysvg.attr('class', imgClass + ' replaced-svg'); }
            jQuerysvg = jQuerysvg.removeAttr('xmlns:a'); jQueryimg.replaceWith(jQuerysvg);
        }, 'xml');
    });
}
function nexuspcs_tm_popup() { "use strict"; jQuery('.gallery_zoom').each(function () { jQuery(this).magnificPopup({ delegate: 'a.zoom', type: 'image', gallery: { enabled: true }, removalDelay: 300, mainClass: 'mfp-fade' }); }); jQuery('.popup-youtube, .popup-vimeo').each(function () { jQuery(this).magnificPopup({ disableOn: 700, type: 'iframe', mainClass: 'mfp-fade', removalDelay: 160, preloader: false, fixedContentPos: false }); }); jQuery('.soundcloude_link').magnificPopup({ type: 'image', gallery: { enabled: true, }, }); }
function nexuspcs_tm_data_images() { "use strict"; var data = jQuery('*[data-img-url]'); data.each(function () { var element = jQuery(this); var url = element.data('img-url'); element.css({ backgroundImage: 'url(' + url + ')' }); }); }
function nexuspcs_tm_contact_form() {
    "use strict"; jQuery(".contact_form #send_message").on('click', function () {
        var name = jQuery(".contact_form #name").val(); var email = jQuery(".contact_form #email").val(); var message = jQuery(".contact_form #message").val(); var subject = jQuery(".contact_form #subject").val(); var success = jQuery(".contact_form .returnmessage").data('success'); jQuery(".contact_form .returnmessage").empty(); if (name === '' || email === '' || message === '') { jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500); }
        else {
            jQuery.post("modal/contact.php", { ajax_name: name, ajax_email: email, ajax_message: message, ajax_subject: subject }, function (data) {
                jQuery(".contact_form .returnmessage").append(data); if (jQuery(".contact_form .returnmessage span.contact_error").length) { jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500); } else { jQuery(".contact_form .returnmessage").append("<span class='contact_success'>" + success + "</span>"); jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500); }
                if (data === "") { jQuery("#contact_form")[0].reset(); }
            });
        }
        return false;
    });
}
function nexuspcs_tm_owl_carousel() {
    "use strict"; var carousel = jQuery('.partners .owl-carousel'); var rtlMode = false; if (jQuery('body').hasClass('rtl')) { rtlMode = 'true'; }
    carousel.owlCarousel({ loop: true, items: 4, lazyLoad: false, margin: 50, autoplay: true, autoplayTimeout: 7000, rtl: rtlMode, dots: true, nav: false, navSpeed: true, responsive: { 0: { items: 1 }, 480: { items: 2 }, 768: { items: 3 }, 1040: { items: 3 }, 1200: { items: 3 }, 1600: { items: 4 }, 1920: { items: 4 } } }); nexuspcs_tm_imgtosvg();
}