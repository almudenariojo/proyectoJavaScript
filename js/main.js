$(document).ready(function(){
    if (typeof moment !== 'undefined') {
        // Tu código que utiliza Moment.js aquí
        // ...
      } else {
        console.log('Moment.js no está cargado correctamente');
      }

      if(window.location.href.indexOf('index')> -1){
    //Slider 

    $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200, 
        pager: true
      });
    };
      //Post
      if(window.location.href.indexOf('index')> -1){
      var posts = [
        {
            title: "Prueba de titulo 1",
            date: "Publicado el día " + moment().format("D") + " de " + moment().format("MMMM YYYY"),
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A, magnam. Alias, odio provident facere nam modi, rerum aliquid sapiente architecto, sint optio voluptatem enim perferendis in repudiandae deserunt porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, magnam. Alias, odio provident facere nam modi, rerum aliquid sapiente architecto, sint optio voluptatem enim perferendis in re. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, magnam. Alias, odio provident facere nam modi, rerum aliquid sapiente architecto, sint optio voluptatem enim perferendis in repudiandae deserunt porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, magnam. Alias, odio provident facere nam modi, rerum aliquid sapiente architecto, sint optio voluptatem enim perferendis in repudiandae deserunt porro. pudiandae deserunt porro"
        },
        {
            title: "Prueba de titulo 2",
            date: "Publicado el día " + moment().format("D") + " de " + moment().format("MMMM YYYY"),
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A, magnam. Alias, odio provident facere nam modi, rerum aliquid sapiente architecto, sint optio voluptatem enim perferendis in repudiandae deserunt porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, magnam. Alias, odio provident facere nam modi, rerum aliquid sapiente architecto, sint optio voluptatem enim perferendis in re. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, magnam. Alias, odio provident facere nam modi, rerum aliquid sapiente architecto, sint optio voluptatem enim perferendis in repudiandae deserunt porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, magnam. Alias, odio provident facere nam modi, rerum aliquid sapiente architecto, sint optio voluptatem enim perferendis in repudiandae deserunt porro. pudiandae deserunt porro"
        },
        {
            title: "Prueba de titulo 3",
            date: "Publicado el día " + moment().format("D") + " de " + moment().format("MMMM YYYY"),
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A, magnam. Alias, odio provident facere nam modi, rerum aliquid sapiente architecto, sint optio voluptatem enim perferendis in repudiandae deserunt porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, magnam. Alias, odio provident facere nam modi, rerum aliquid sapiente architecto, sint optio voluptatem enim perferendis in re. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, magnam. Alias, odio provident facere nam modi, rerum aliquid sapiente architecto, sint optio voluptatem enim perferendis in repudiandae deserunt porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, magnam. Alias, odio provident facere nam modi, rerum aliquid sapiente architecto, sint optio voluptatem enim perferendis in repudiandae deserunt porro. pudiandae deserunt porro"
        },
        {
            title: "Prueba de titulo 4",
            date: "Publicado el día " + moment().format("D") + " de " + moment().format("MMMM YYYY"),
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A, magnam. Alias, odio provident facere nam modi, rerum aliquid sapiente architecto, sint optio voluptatem enim perferendis in repudiandae deserunt porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, magnam. Alias, odio provident facere nam modi, rerum aliquid sapiente architecto, sint optio voluptatem enim perferendis in re. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, magnam. Alias, odio provident facere nam modi, rerum aliquid sapiente architecto, sint optio voluptatem enim perferendis in repudiandae deserunt porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, magnam. Alias, odio provident facere nam modi, rerum aliquid sapiente architecto, sint optio voluptatem enim perferendis in repudiandae deserunt porro. pudiandae deserunt porro"
        },
        {
            title: "Prueba de titulo 5",
            date: "Publicado el día " + moment().format("D") + " de " + moment().format("MMMM YYYY"),
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A, magnam. Alias, odio provident facere nam modi, rerum aliquid sapiente architecto, sint optio voluptatem enim perferendis in repudiandae deserunt porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, magnam. Alias, odio provident facere nam modi, rerum aliquid sapiente architecto, sint optio voluptatem enim perferendis in re. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, magnam. Alias, odio provident facere nam modi, rerum aliquid sapiente architecto, sint optio voluptatem enim perferendis in repudiandae deserunt porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, magnam. Alias, odio provident facere nam modi, rerum aliquid sapiente architecto, sint optio voluptatem enim perferendis in repudiandae deserunt porro. pudiandae deserunt porro"
        },

      ];

     posts.forEach((item, index)=>{
     var post= ` 
     <article class="post">
     <h2>${item.title}</h2>
     <span class="date">${item.date}</span>
     <p>${item.content}</p>
 <a href="#" class="button-more">Leer más</a>
 </article>
 `;

 $("#posts").append(post);
 });

}

 //Selectorr de tema

 var theme= $("#theme");

 $("#to-green").click(function(){
theme.attr("href", "css/green.css")
 });

 $("#to-red").click(function(){
  theme.attr("href", "css/red.css")
   });

   $("#to-blue").click(function(){
    theme.attr("href", "css/blue.css")
     });


// Scroll arriba de la web
$(".subir").click(function(e){
  e.preventDefault();
  $("html,body").animate({
    scrollTop:'0'
     }, 500);

     return false;
   });

// Login falso
$("#login form").submit(function() {
  var form_name = $("#form_name").val();
  localStorage.setItem("form_name", form_name);
});

var form_name = localStorage.getItem("form_name");

if (form_name != null && form_name != "undefined") {
  var about_parrafo = $("#about p");
  about_parrafo.html("<br><strong> Bienvenido " + form_name + "</strong>");
 about_parrafo.append("<a href='#' id='logout'> Cerrar sesión </a>");
 $("#logout").css({
  "color": "white",
  "background": "green",
  "font-size": "16px",
  "margin-left": "20px",
  "text-decoration": "none",
  "border": "1px solid black"
 

});
 $("#login").hide();

 $("#logout").click(function(){
  localStorage.clear();
 location.reload();

 });
};

//Acordeón

if(window.location.href.indexOf('about')> -1){
$("#acordeon").accordion();
};

//Reloj

if(window.location.href.indexOf('reloj')> -1){
  setInterval(function(){
    var fecha =  "Hoy es " + moment().format("D") + " de " + moment().format("MMMM YYYY") + "<br>";
    var reloj  = moment().format("hh:mm:ss");
    $("#fecha").html(fecha);
    $("#reloj").html(reloj);
  }, 1000);

  };


});