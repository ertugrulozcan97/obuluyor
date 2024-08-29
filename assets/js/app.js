$(document).on('click', '.tab-nav-item', function() {
    const target = $($(this).data('tab-target'));

    $(this).siblings().removeClass('active');
    $(this).addClass('active');

    target.siblings().removeClass('active');
    target.addClass('active');
});