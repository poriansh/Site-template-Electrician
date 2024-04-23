let togelmenu = document.querySelector('.toggel-menu')
let menumobailitem = document.querySelectorAll('.menu-item')
let dropdownmobail = document.querySelector('.dropdown')
let menumobailitemsub = document.querySelectorAll('.menu-item__sub')
let subsub = document.querySelectorAll('.sub-sub')

togelmenu.addEventListener('click', function () {
    document.querySelector('.cover').classList.toggle('cover--active')
    document.querySelector(".toggel-menu__line").classList.toggle('toggel-menu__line--active')
    document.querySelector('.nav-mobail').classList.toggle('nav-mobail--active')
    if (document.querySelector('.nav-mobail').className == 'nav-mobail') {

        document.querySelector(".menu-item--active").classList.remove('menu-item--active')
        document.querySelector(".menu-item-sub--active").classList.remove('menu-item-sub--active')

    }


})
dropdownmobail.addEventListener('click', function () {

    menumobailitem.forEach(function (item) {

        item.classList.toggle('menu-item--active')

    })


})
menumobailitemsub.forEach(function (item) {

    item.addEventListener('click', function () {

        document.querySelectorAll('.menu-item__sub').forEach(function (item) {

            item.classList.add('height-drop')

        })
        document.querySelectorAll('.menu-item-sub--active').forEach(function (item) {


            item.classList.remove('menu-item-sub--active')

        })
        this.classList.toggle('menu-item-sub--active')


    })

})
subsub.forEach(function (item) {

    item.addEventListener('click', function () {

        document.querySelectorAll('.sub-sub').forEach(function (item) {

            item.classList.add('height-drop')

        })
        document.querySelectorAll('.sub-sub--active').forEach(function (item) {


            item.classList.remove('sub-sub--active')

        })
        this.classList.toggle('sub-sub--active')


    })

})
function mousemove(){
    document.querySelector('.cover').classList.add('cover--active')



}
function mouseleave(){

    document.querySelector('.cover').classList.remove('cover--active')


}
var swiper1 = new Swiper(".Swiper-cours", {
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        // when window width is >= 320px

        768: {

            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        992: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
       


    },
    

});

let btnprev = document.querySelector('.prev')
btnprev.addEventListener('click', function () {

    swiper1.slideNext()


})

let btnnext = document.querySelector('.next')
btnnext.addEventListener('click', function () {

    swiper1.slidePrev()

})