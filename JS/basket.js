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
////////////////////////////////////////////////////////////


let phones_list = JSON.parse(localStorage.getItem('phones'));

if (phones_list.length > 0) {
    document.querySelector('.alert').classList.add('d-none');
    document.getElementById('cnt').classList.remove('d-none');
}
else {
    document.querySelector('.alert').classList.remove('d-none');
    document.getElementById('cnt').classList.add('d-none');
}

function GetPhones() {
    let phones_list = JSON.parse(localStorage.getItem('phones'));

    let x = '';
    phones_list.forEach(item => {
        console.log(item.Price.split(" ")[0]);
        x += `
        <div class="col-lg-4">
            <div id=${item.Id} class="basket-card">
                <img src= ${item.Image}  class="card-img-top" alt="...">
                    <div class="basket-card-body">
                        <h5 class="basket-card-title">${item.Name}</h5>
                        <p>Price: ${item.Price}</p>
                        <input id="${item.Id}" type="number" value="${item.Count}" onchange="handleCountChange('${item.Id}', this.value)">
                        <p>Total Price: ${item.TotalPrice === null ? item.Price : item.TotalPrice} AZN</p>
                        <p>Count: ${item.Count}</p>
                    <a data-id='${item.Id}' href="#" id = "button" class="btn btn-primary">Delete</a>
                </div>
            </div>
        </div>
        `
    });

    document.querySelector('.rowlist').innerHTML = x;

    document.getElementById('cnt').innerHTML = phones_list.length;
    DeleteItem();
    ShowCountProduct();
}

GetPhones();

document.querySelector('.btn_clear').addEventListener('click', function () {
    localStorage.removeItem('phones');
    location.reload();
})

function DeleteItem() {
    let phones_list = JSON.parse(localStorage.getItem('phones'))
    let removedPhone = document.querySelectorAll('#button')
    for (let rmvphone of removedPhone) {
        rmvphone.addEventListener('click', function () {
            location.reload();
            let removeId = this.getAttribute('data-id');
            let existPhone = phones_list.find(item => item.Id === removeId);
            let index = phones_list.indexOf(existPhone);
            phones_list.splice(index, 1)
            localStorage.setItem('phones', JSON.stringify(phones_list));
        })
    }
    ShowCountProduct();
}



function handleCountChange(productId, newCount) {
    let productList = JSON.parse(localStorage.getItem('phones'));
    if (newCount >= 0) {
        productList.forEach(element => {
            if (element.Id === productId) {
                element.Count = newCount;
                console.log(element.Price);
                element.TotalPrice = element.Price * newCount;
            }
        });
        localStorage.setItem('phones', JSON.stringify(productList));
    }
    else {
        alert("Minimum deyer 0 ola biler")
    }
    DeleteItem();
    GetPhones();
    ShowCountProduct()

}

function ShowCountProduct() {
    let product_list = JSON.parse(localStorage.getItem('phones'));
    document.querySelector('#count').innerHTML = product_list.length;
}

ShowCountProduct()


let theme = document.querySelector('#changeTheme');
theme.onclick = function (e) {
    e.preventDefault();
    document.body.classList.toggle('dark-theme')
}






