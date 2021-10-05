let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open');
let boton1 = document.getElementById('enlace-equipo')
let boton2 = document.getElementById('enlace-servicio')
let boton3 = document.getElementById('enlace-trabajo')
let boton4 = document.getElementById('enlace-inicio')
let boton5 = document.getElementById('enlace-contacto')
let botones = document.getElementsByClassName('btn-header')
let cerrado = true;

function menus (){
    let Desplazamiento_Actual = window.pageYOffset

    if(Desplazamiento_Actual<=80){
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition = '1s';
        menu.style.top = '80px';
        abrir.style.color = '#fff'
    }else{
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition = '1s';
        menu.style.top = '100px';
        abrir.style.color = '#fff';
        //mio//
        boton1.style.color = '#fff';
        boton2.style.color = '#fff';
        boton3.style.color = '#fff';
        boton4.style.color = '#fff';
        boton5.style.color = '#fff';
        nav.style.color = '#0933bbc7';
        //mio//

    }
}

function apertura (){
    if(cerrado){
        menu.style.width = '70vw';
        cerrado = false;
    }else{
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        cerrado = true;
    }
}

window.addEventListener('load',function(){
    menus();
});

window.addEventListener('click',function(e){
    console.log(e.target);
    if(cerrado==false){
        let span = document.querySelector('span');

        if(e.target !== span && e.target !== abrir){
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            cerrado = true;
        }
    }
});

window.addEventListener('scroll',function(){
    console.log(window.pageYOffset);
    menus();
});
window.addEventListener('resize', function(){
        if(screen.width>=700){
            cerrado = true;
            menu.style.removeProperty('overflow');
            menu.style.removeProperty('width');
        }
});

abrir.addEventListener('click', function(){
    apertura();
})

