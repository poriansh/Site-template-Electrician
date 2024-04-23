let category = document.querySelectorAll('.category-item-link')
category.forEach(function(item){


    item.addEventListener('click',function(event){
    
        event.preventDefault()
    
       
        this.parentElement.classList.toggle('category-item--active')
    
    
    })


})

    
let subcategory = document.querySelectorAll('.category-sub-link')
subcategory.forEach(function(item){

    item.addEventListener('click',function(event){

        event.preventDefault()
    
        this.parentElement.classList.toggle('category-sub-item--active')
    
    
    
    })

})

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