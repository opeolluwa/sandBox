//nav controls
const openNav = () => {
 document.getElementById('side-nav').style.display = 'block';
 document.body.classList.toggle('dark-one');
}
const closeNav = () => {
 document.getElementById('side-nav').style.display = 'none';
 document.body.classList.toggle('dark-one');

}
//mode controls
const toggleMode = () => {
 document.body.classList.toggle('dark');
 document.getElementById('get-started').classList.toggle('bg-dark');
 document.querySelector('.fa-moon').classList.toggle('fa-sun');
 document.querySelector('.fa-moon').classList.toggle('fa-spin');
}
//carousel interval
$('.carousel').carousel({
 interval: 2500
});

//close nav item of click
/*if (openNav()) {
 document.querySelector('.main-nav li').addEventListener('click', function hide() {
   document.querySelector('.main-nav').hide();
  }
 }*/

//modal html5 polyfill
$('#modal-form').on('shown.bs.modal', function() {
 $('#myInput').trigger('focus')
})