// Tab Navigation
$(document).on('click', '.tab-nav-item', function() {
    const target = $($(this).data('tab-target'));

    $(this).siblings().removeClass('active');
    $(this).addClass('active');

    target.siblings().removeClass('active');
    target.addClass('active');
});

// Modal
$(document).on('click', '[data-toggle="modal"]', function(e) {
    e.preventDefault();

    const target = $($(this).data('target'));

    toggleModal(target);
});

$(document).on('click', '[data-modal-close]', function() {
    const target = $($(this).closest('.modal'));

    toggleModal(target);
});

function toggleModal(target)
{
    // Check if the modal is already open
    if (!target.hasClass('active'))
    {
        $('body').append('<div class="modal-backdrop"></div>');

        setTimeout(() => {
            $('.modal-backdrop').addClass('show');

            target.fadeIn(250).addClass('active');
        }, 250);

        $('html').addClass('page-scroll-lock');
    }
    else
    {
        target.fadeOut(250).removeClass('active');

        setTimeout(() => {
            $('.modal-backdrop').remove();

            target.removeClass('active');
        }, 250);

        $('html').removeClass('page-scroll-lock');
    }
}