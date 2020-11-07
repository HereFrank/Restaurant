$(document).ready(() => {

    //Efecto menú
    $('.menu a').each(function(index) {

        //Se ejecuta está línea de código
        $(this).css({
            top: '-200px'
        });

        //Se lee está línea de código pero queda en espera (por lo que la línea 7 anterior se ejecutará primero en todos y cada uno de los elementos del menu)
        $(this).animate({
            top: 0
        }, 2000 + (index * 500));
    });

    //Efecto header
    const windowWidth = $(window).width();

    if (windowWidth > 800) {
        $('header .textos').css({
            opacity: 0,
            marginTop: 0
        });

        $('header .textos').animate({
            opacity: 1,
            //Regresandolo a su estado original
            marginTop: '-52px'
        }, 1500);
    }

    //Scroll elementos menú

    //Guardando posición de las secciones correspondientes
    const acercaDe = $('#acerca-de').offset().top,
            menu = $('#platillos').offset().top,
            galeria = $('#galeria').offset().top,
            ubicacion = $('#ubicacion').offset().top;

    $('#btn-acerca-de').on('click', function(){

        //Animando scroll del body de la página
        $('html, body').animate({
            scrollTop : acercaDe - 100
        }, 500);
    });

    $('#btn-acerca-de').on('click', function(){

        //Animando scroll del body de la página
        $('html, body').animate({
            scrollTop : acercaDe - 100
        }, 500);
    });

    $('#btn-acerca-de').on('click', function(){

        //Animando scroll del body de la página
        $('html, body').animate({
            scrollTop : acercaDe - 100
        }, 500);
    });

    $('#btn-menu').on('click', function(){

        //Animando scroll del body de la página
        $('html, body').animate({
            scrollTop : menu
        }, 500);
    });

    $('#btn-galeria').on('click', function(){

        //Animando scroll del body de la página
        $('html, body').animate({
            scrollTop : galeria
        }, 500);
    });

    $('#btn-ubicacion').on('click', function(){

        //Animando scroll del body de la página
        $('html, body').animate({
            scrollTop : ubicacion
        }, 500);
    });

    //Efecto Parallax
    $(window).scroll(function() {
        const windowWidth = $(window).width();

        if (windowWidth > 800) {
            const scroll = $(window).scrollTop();

            $('header .textos').css({
                
                // Se divide el scroll entre 2 para que .textos no se mueva tan rápido
                transform: `translateY(${scroll / 2}%)`
            });

            $('.acerca-de article').css({
                
                // Se divide el scroll entre 2 para que .textos no se mueva tan rápido
                transform: `translateY(-${scroll / 4}%)`
            });
        }
    });

    //Detectando si el usuario cambia tamaño de la pantalla (rotando su tablet por ejemplo)
    $(window).resize(function() {

        const windowWidth = $(window).width();

        if (windowWidth < 800) {

            //Arreglando descolocación de .textos y eliminando  efecto parallax agregado
            $('header .textos').css({
                
                marginTop: '100px',
                transform: 'translateY(0px)'
            });

            $('.acerca-de article').css({
                
                // Se divide el scroll entre 2 para que .textos no se mueva tan rápido
                transform: 'translateY(0px)'
            });
        }

        //Reestableciendo efecto parallax
        if (windowWidth > 800) {

            $('header .textos').css({
                
                // Se divide el scroll entre 2 para que .textos no se mueva tan rápido
                transform: `translateY(${scroll / 2}%)`
            });
    
            $('.acerca-de article').css({
                
                // Se divide el scroll entre 2 para que .textos no se mueva tan rápido
                transform: `translateY(-${scroll / 4}%)`
            });
        }
    });

});