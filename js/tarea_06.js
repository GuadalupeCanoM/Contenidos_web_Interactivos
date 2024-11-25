

$(document).ready(function(){
 

    

    //CAMBIAMOS COLOR AL BOTÓN AL PULSARLO
    //Seleccionamos los botones por su clase
    var botones = $('.boton');

    //Al hacer clic en los botones
    botones .on('click', function() {
    botones.css('color', '');
    $(this).css('color', 'red');
    });

     //------------------HISTÓRICO DE PULSACIONES EN FOOTER-----------------------//
     $("#boton-aumentar").click(function(){
        $(".historico").prepend("Aumentar fuente<br>");
    }); 

    $("#boton-reducir").click(function(){
        $(".historico").prepend("Reducir fuente<br>");
    }); 

    $("#boton-oscuro").click(function(){
        $(".historico").prepend("Modo oscuro<br>");
    }); 

    $("#boton-simplificada").click(function(){
        $(".historico").prepend("Web modo Simplificada<br>");
    }); 
   
    $("#boton-ultima-hora").click(function(){
        $(".historico").css("color", "red").prepend("Última noticia<br>");
    }); 

    $("#boton-reset").click(function(){
        $(".historico").prepend("Resetear aspecto<br>");
    }); 

    $("#boton-ocultar").click(function(){
        $(".historico").prepend("Ocultar opciones de accesibilidad<br>");
    }); 

    $("#boton-mostrar").click(function(){
        $(".historico").prepend("Mostrar opciones de accesibilidad<br>");
    }); 

    //----------------CAMBIAR TAMAÑO DE FUENTE----------------//
    var minFuente = parseInt($(".min-tamanio-fuente").text());
    var maxFuente = parseInt($(".max-tamanio-fuente").text());
    var defectoFuente = parseInt($(".tamanio-fuente").text());
    
    //----------------BOTÓN 1º: Aumentar tamaño de fuente----------------//
    $("#boton-aumentar").on("click", function(){
      if (defectoFuente < maxFuente) {
        defectoFuente += 3;
        $(".tamanio-fuente").text(defectoFuente);
        $(".noticias").css("font-size", defectoFuente + "px");
        $(".imagen").css({ width: "50%", height: "50%"}); //Reducimos la imagen 
    }
    });
    
    //--------------BOTÓN 2º: Disminuir tamaño de fuente--------------------//
    
    $("#boton-reducir").on("click", function(){
      if (defectoFuente > minFuente) {
        defectoFuente -= 3;
        $(".tamanio-fuente").text(defectoFuente);
        $(".noticias").css("font-size", defectoFuente + "px");
        $(".imagen").css({ width: "50%", height: "50%"}); //Aumentamos la imagen
      }
    });

    //---------------------BOTÓN 3º: MODO OSCURO--------------------------//

    $("#boton-oscuro").click(function(){
        $("body").css("background-color", "black");
        $(".encabezado, .navegacion li a, .titulo_noticia").css("color", "yellow");
        $(".texto").css("color", "white");
        $(".pie").css("color", "white");
        $(".historico").css("color", "white");
        $(".licencia").css("color", "white");
        
      });

     
    //----------------------BOTÓN 4º: VISTA SIMPLIFICADA-----------------//

   // Ocultar cuerpo de la noticia y la imagen al pulsar el botón de vista simplificada
   $('#boton-simplificada').click(function() {
        $('.cuerpo_noticia').slideUp(500);
        $('.imagen').slideUp(500);
    });

    //Ocultar y mostrar el cuerpo de la noticia y la imagen al hacer click en el titular
    $('.titulo_noticia').click(function() {
        $(this).siblings('.cuerpo_noticia').slideToggle();
        $('.imagen').slideDown();
    });

  //----------------------BOTÓN 5º: SELECCIÓN DE FUENTE-----------------//
    // Obtiene el elemento de selección de fuente
    var seleccionFuente = $('#s_fuente');

    // Evento que se activa al cambiar la selección de fuente
    seleccionFuente.on('change', function() {
      // Obtiene el valor de la selección de fuente
      var valorFuente = seleccionFuente.val();
  
      // Actualiza la fuente tanto del titular como del cuerpo de la noticia
      switch (valorFuente) {
        case '1':
          $('.titulo_noticia, .texto').css('font-family', 'Verdana, sans-serif');
          break;
        case '2':
          $('.titulo_noticia, .texto').css('font-family', 'Dancing Script');
          break;
        case '3':
          $('.titulo_noticia, .texto').css('font-family', 'Merriweather');
          break;
      }
    });

    //------------------BOTÓN 6º: ÚLTIMA HORA---------------//
    $("#boton-ultima-hora").click(function() {
    
        // Creamos la nueva noticia
        var nuevaNoticia = $("<div>").attr("id", "noticia_0").addClass("noticia");
        var titulo = $("<h2>").addClass("titulo_noticia").text("Última Noticia").css("color", "red");
        var cuerpo = $("<div>").addClass("cuerpo_noticia");
        var texto = $("<p>").addClass("texto").text("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum").css("color", "red");
        var imagen = $("<img>").attr("src", "./img/img4.jpg").attr("alt", "Imagen de la última noticia").addClass('imagen');
        cuerpo.append(texto).append(imagen);
        nuevaNoticia.append(titulo).append(cuerpo);
        
        // Agregamos la nueva noticia al inicio de la lista de noticias
        $(".navegacion ul").prepend($("<li>").append($("<a>").attr("href", "#noticia_0").text("Última Noticia").css("color", "red").css("font-size", "18px")));
        $(".noticias").prepend(nuevaNoticia);
    
        // Ocultamos el botón de última hora
        $(this).hide();
      });

      
    //------------------BOTÓN 7º: RESET-----------------//
    $("#boton-reset").on("click", function() {
        // Restablece el tamaño de la fuente
        $(".tamanio-fuente").text("14");
        $("body").css("font-size", "14px");

        // Restablece la fuente
        $("#s_fuente").val("1");
        $("body").css("font-family", "'Merriweather', serif");

        // Restablece el tema
        $("body").removeClass("tema-oscuro");

        // Oculta la barra de accesibilidad
        $(".barra").hide();

        // Borra el historial
        window.location.replace(window.location.origin + window.location.pathname);
    });

    //----------------BOTÓN 8: OCULTAR----------------//
    $("#boton-ocultar").click(function(){
        $(".barra").animate({left: '-=1500'}, 500);
        $("#boton-mostrar").show();
        $("#boton-ocultar").hide();
      });
    
    //-----------------BOTÓN 9: MOSTRAR ------------//
    $("#boton-mostrar").click(function(){
        $(".barra").animate({left: '+=1500'}, 500);
        $("#boton-mostrar").hide();
        $("#boton-ocultar").show();
      });
  
});


