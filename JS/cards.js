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



//////////////////////////////////////////////////////////



if (localStorage.getItem("phones") === null) {
    localStorage.setItem("phones", JSON.stringify([]));
}

let buttonsaddBasket = document.querySelectorAll('.but-dess');


for (let btn of buttonsaddBasket) {
    btn.onclick = function (e) {
        e.preventDefault();
        let id = this.parentElement.id;
        let src = this.parentElement.children[0].src;
        console.log(src);
        let pr_name = this.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
        console.log(pr_name);
        let pr_price = this.previousElementSibling.children[1].innerHTML;
        console.log(pr_price);
        let phones_list = JSON.parse(localStorage.getItem('phones'));

        let existPhone = phones_list.find(item => item.Id === id);

        if(existPhone === undefined){
            phones_list.push({
                Id: id,
                Image: src,
                Name: pr_name,
                Price: pr_price,
                Count: 1,
                TotalPrice: Number(this.Price) * 1
            })


        }
        else{
            existPhone.Count += 1;

        }
        localStorage.setItem('phones', JSON.stringify(phones_list));
        ShowCountProduct();
    }
}

function ShowCountProduct() {
    let product_list = JSON.parse(localStorage.getItem('phones'));
    document.querySelector('#count').innerHTML = product_list.length;
}

ShowCountProduct();

let theme = document.querySelector('#changeTheme');
theme.onclick = function (e) {
    e.preventDefault();
    document.body.classList.toggle('dark-theme')
}
