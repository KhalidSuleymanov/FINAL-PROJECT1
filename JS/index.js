let bars = document.querySelector('.ham-menu i ');
let side_bar = document.querySelector('#side-bar')

bars.addEventListener('click', function () {
    if (side_bar.classList.contains('d-none')) {
        side_bar.className = ''

    }
    else {
        side_bar.className = 'd-none'
    }
});

let buttons = document.querySelectorAll('.type button');
for (let btn of buttons) {
    btn.onclick = function () {
        let active = document.querySelector('.active')
        active.classList.remove('active')
        this.classList.add('active')
    }
}

$('.slider').slick({
    dots: true,
    infinite: false,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
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



let theme = document.querySelector('#changeTheme');
theme.onclick = function (e) {
    e.preventDefault();
    document.body.classList.toggle('dark-theme')
}


let tab = document.querySelectorAll('p');
let btns = document.querySelectorAll('.tab-menu-btn p')

for (let btn of btns) {
    btn.addEventListener("click", function () {
        let active = document.querySelector('.active1')
        active.classList.remove('active1')
        active.classList.add('non-active')
        this.classList.add('active1')
    })
}



function ShowCountProduct() {
    let product_list = JSON.parse(localStorage.getItem('phones'));
    document.querySelector('#count').innerHTML = product_list.length;
}

ShowCountProduct()

let searchIcon = document.querySelector('.search');
let searchSpan = document.querySelector('.search-modal')
let kres = document.querySelector('#x');






searchIcon.onclick = function (e) {

    e.preventDefault()

    if (searchSpan.classList.contains('d-none')) {
        searchSpan.classList.remove('d-none')
    }
    else {
        searchSpan.classList.add('d-none')

    }
}

kres.onclick =function () {
    console.log("salam");

   

    if (!searchSpan.classList.contains('d-none')) {
        searchSpan.classList.add('d-none')
    }
    else {
        searchSpan.classList.remove('d-none')

    }
}

