
document.addEventListener('DOMContentLoaded', () => {
    
    sal();
    var titre = document.querySelector(".titre");
const TL = new TimelineMax({paused: false});
	TL
	.from(titre,1,{opacity:0,x:-100});
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
    
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
    
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
    
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
    
        });
      });
    }

    const options = {
        bottom: '64px',
        right: 'unset',
        left: '30px',
        time: '0.5s',
        mixColor: '#fff',
        backgroundColor: '#fff',
        buttonColorDark: '100f2c',
        buttonColorLight: '#fff',
        saveInCookies: 'false',
        label: "<img src='ressources/cut.jpg'>",
        autoMatchOsTheme: 'true'
        }
            const darkmode = new Darkmode(options);
            darkmode.showWidget();
            //darkmode.toggle();
});

var btn = document.getElementById("btn");


btn.addEventListener("click",()=>{
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
})

