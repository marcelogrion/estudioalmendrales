let menuHamburguesa = document.querySelector('.menu-hamburguesa');
let menuHide = document.querySelector('.menu-hide');


console.log(menuHide)
console.log(menuHamburguesa)
menuHamburguesa.addEventListener('click', () => {
    console.log(menuHide.style.display);
    if(menuHide.style.display == 'flex') {
       
       menuHide.style.display ='none';

}
    if(menuHide.style.display == 'none') {
       menuHide.style.display = 'flex'}
       
})