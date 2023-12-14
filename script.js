$(window).on("scroll", function () {
    if ($(window).scrollTop() > 0) {
        $(".navbar").addClass("active");
    }
    else {


        $(".navbar").removeClass("active");
    }
}
);
//   scroll end

$(document).ready(function () {
    $(window).scroll(function () {
        var positiontop = $(document).scrollTop();
        console.log(positiontop);

        if ((positiontop > 10) && (positiontop < 300)) {

            $('#banner-content').addClass('animate__animated animate__bounceInLeft');
            $('#banner-img').addClass('animate__animated animate__zoomIn');


        }
        else if ((positiontop > 700) && (positiontop < 1000)) {

            $('#about-intro').addClass('animate__animated animate__zoomIn');
            $('#profile-pic').addClass('animate__animated animate__zoomIn');
            $('#about-one').addClass('animate__animated animate__zoomIn');
            $('#list-one').addClass('animate__animated animate__zoomIn');
            $('#list-two').addClass('animate__animated animate__zoomIn');



        }
       else if ((positiontop > 1600) && (positiontop < 1800)) {

            $('#service-intro').addClass('animate__animated animate__bounceInLeft');
            $('#service-box1').addClass('animate__animated animate__bounceInLeft');
            $('#service-box2').addClass('animate__animated animate__zoomIn');
            $('#service-box3').addClass('animate__animated animate__bounceInRight');



        }
        else  if ((positiontop > 2300) && (positiontop < 2400)) {

            $('#contact-form').addClass('animate__animated animate__bounceInLeft');
            $('#contact-details').addClass('animate__animated animate__bounceInRight');



        }
        else  if ((positiontop > 2500) && (positiontop < 2550)) {

            $('#footer').addClass('animate__animated animate__bounceInLeft');



        }
    });
})

//   
