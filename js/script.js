document.addEventListener("DOMContentLoaded", function () {
    // add padding top to show content behind navbar
    const navbar_height = document.querySelector('.navbar').offsetHeight;
    document.body.style.paddingTop = navbar_height + 'px';

    const card_text_height = document.querySelector('.card-text').offsetHeight;
    document.querySelectorAll('.card-img-left img').forEach(card_img_left => {
        card_img_left.style.height = card_text_height;
    });

});