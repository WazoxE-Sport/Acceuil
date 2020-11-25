$('.header__navbar-toggle').click(function(e) {
    e.preventDefault();
    $('.header__navbar').toggleClass('is-open');
})

const header__navbar = document.querySelector('.header__navbar-toggle');

header__navbar.addEventListener('click',() => {
    header__navbar.classList.toggle('active');
});

const btn = document.querySelectorAll('.btn');
const container = document.querySelectorAll('.container')
const articles = document.querySelectorAll('.articles');

window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    .from(container, 1, {top: -50, opacity: 0, ease: "pawer2.out"}, 0.3)
    .from(btn, 1, {opacity: 0, ease: "pawer2.out"}, 0.3, '-=1')
    .from(articles, 1, {width: 0, ease: "power2out"}, '-=2');

    TL.play();
});

{
   // send mail with ajax
   $('#send_email').click(function(e){
    e.preventDefault();
    var data = {
        email: $('#email').val(),
        name: $('#name').val(),
        objet: $('#firstname').val(),
        message: $('#message').val()
    };
    // AJAX
    $.ajax({
        url: "mail.php",
        type: 'POST',
        data: data,
        success: function(data) {
            $('#js_alert_success').css({'display' : 'block'});
            setTimeout(function(){
                $('#js_alert_success').css({'display' : 'none'});
                $('#email').val("");
                $('#name').val("");
                $('#object').val("");
                $('#message').val("")
            }, 3000);
        },
        error: function(data) {
            $('#js_alert_danger').css({'display' : 'block'});
            setTimeout(function(){
                $('#js_alert_danger').css({'display' : 'none'});
                $('#email').val("");
                $('#name').val("");
                $('#object').val("");
                $('#message').val("")
            }, 3000);
        }
    });
}); 
}