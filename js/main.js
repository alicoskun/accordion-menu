'use strict'

$('.accordion-item').click(function (e) {

    e.preventDefault();

    let $this = $(this);

    if ($this.find('.accordion-item-icon').text() === '+') {
        $('.accordion-item-icon').text('+');
        $this.find('.accordion-item-icon').text('-');
    }
    else if ($this.find('.accordion-item-icon').text() === '-') {
        $('.accordion-item-icon').text('+');
        $this.find('.accordion-item-icon').text('+');
    }

    if ($this.find('.accordion-sub-menu').hasClass('show')) {
        $this.find('.accordion-sub-menu').removeClass('show');
        $this.find('.accordion-sub-menu').slideUp(350);
    } else {
        $this.parent().find('.accordion-sub-menu.show').slideUp(350);
        $this.parent().find('.accordion-sub-menu.show').removeClass('show');
        $this.find('.accordion-sub-menu').toggleClass('show');
        $this.find('.accordion-sub-menu').slideToggle(350);
    }
});

$(".accordion-sub-menu").each(function () {
    if ($(this).children().length === 0) {
        $(this).parent().find('.accordion-item-icon').remove();
    }
});