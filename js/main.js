$(document).ready(function(){
    if (typeof moment !== 'undefined') {
        // Tu código que utiliza Moment.js aquí
        // ...
      } else {
        console.log('Moment.js no está cargado correctamente');
      }
    //Slider 

    $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200, 
        pager: true
      });

      //Post

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

});