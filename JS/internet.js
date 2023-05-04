$('.bankingslider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});



let buttons = document.querySelectorAll('.two-butt button');
for (let btn of buttons) {
    btn.onclick = function () {
        let active = document.querySelector('.active')
        active.classList.remove('active')
        this.classList.add('active')
    }
}


let theme = document.querySelector('#changeTheme');
theme.onclick = function (e) {
    e.preventDefault();
    document.body.classList.toggle('dark-theme')
}