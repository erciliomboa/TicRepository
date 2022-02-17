(function(){

// Portais choice
$('.choices').on('click', 'a', function(){
    $(this).toggleClass('trigger_down').next('.menu').fadeToggle();
}).on('mouseleave', '.menu', function(){
    $(this).hide().prev('a').toggleClass('trigger_down');
});

// Tabs
$('.tabs').each(function(){

         // For each set of tabs, we want to keep track of

         // which tab is active and it's associated content

         var $active, $content, $links = $(this).find('a');



         // Use the first link as the initial active tab

         $active = $links.first().addClass('active');

         $content = $($active.attr('href'));



         // Hide the remaining content

         $links.not(':first').each(function () {

             $($(this).attr('href')).hide();

         });





         // Bind the click event handler

         $(this).on('click', 'a', function(e){

             // Make the old tab inactive.

             $active.removeClass('active');

             $content.hide();





             // Update the variables with the new link and content

             $active = $(this);

             $content = $($(this).attr('href'));



             // Make the tab active.

             $active.addClass('active');

             $content.show();



             // Prevent the anchor's default click action

             e.preventDefault();

         });

     });

// Dropdown menus

//Pessoas
$('.top_nav li.pessoas').bind('mouseover', abrirMenu);
$('.top_nav li.pessoas').bind('mouseout', fecharMenu);
        
function abrirMenu() {
    $(this).find('.dropdown_pessoas').css('visibility', 'visible');
    $(this).find('a').addClass("dropped");
};
        
function fecharMenu() {
    $(this).find('.dropdown_pessoas').css('visibility', 'hidden');
    $(this).children('a').removeClass("dropped");
};



//Moçambique
$('.top_nav li.mocambique').bind('mouseover', abrirMenu2);
$('.top_nav li.mocambique').bind('mouseout', fecharMenu2);
        
function abrirMenu2() {
    $(this).find('.dropdown_mocambique').css('visibility', 'visible');
    $(this).find('a').addClass("dropped");
};
        
function fecharMenu2() {
    $(this).find('.dropdown_mocambique').css('visibility', 'hidden');
    $(this).children('a').removeClass("dropped");
};


// Governo
$('.top_nav li.governo').bind('mouseover', abrirMenu3);
$('.top_nav li.governo').bind('mouseout', fecharMenu3);
        
function abrirMenu3() {
    $(this).find('.dropdown_governo').css('visibility', 'visible');
    $(this).find('a').addClass("dropped");
};
        
function fecharMenu3() {
    $(this).find('.dropdown_governo').css('visibility', 'hidden');
    $(this).children('a').removeClass("dropped");
};

// Negócios
$('.top_nav li.negocios').bind('mouseover', abrirMenu4);
$('.top_nav li.negocios').bind('mouseout', fecharMenu4);
        
function abrirMenu4() {
    $(this).find('.dropdown_negocios').css('visibility', 'visible');
    $(this).find('a').addClass("dropped");
};
        
function fecharMenu4() {
    $(this).find('.dropdown_negocios').css('visibility', 'hidden');
    $(this).children('a').removeClass("dropped");
};


// Imprensa
$('.top_nav li.imprensa').bind('mouseover', abrirMenu5);
$('.top_nav li.imprensa').bind('mouseout', fecharMenu5);
        
function abrirMenu5() {
    $(this).find('.dropdown_imprensa').css('visibility', 'visible');
    $(this).find('a').addClass("dropped");
};
        
function fecharMenu5() {
    $(this).find('.dropdown_imprensa').css('visibility', 'hidden');
    $(this).children('a').removeClass("dropped");
};



// Lightbox
$("a.show-panel").click(function(){
    $("#lightbox, #lightbox-panel").fadeIn(300);
})

$("a.fechar_lightbox").click(function(){
    $("#lightbox, #lightbox-panel").fadeOut(300);
})


// font size

var elementsAfected = $('.noticias *, #tab1 *, #tab2 *, #tab3 *, #tab4 *, aside *');

$('.fontsize').on('click','.plus', function(){
    elementsAfected.css('font-size', '+=1');
});
$('.fontsize').on('click','.minus', function(){
    elementsAfected.css('font-size', '-=1');
});

// accordion provincias
$('.wrapacord').on('click', 'h3', function(){
    $(this).next('.container-accordion').slideToggle('slow');
    $(this).toggleClass('provincias_expanded').siblings().removeClass('provincias_expanded');
    $(this).siblings('h3').next('.container-accordion').slideUp();
});

// fake link behaviour resultados pesquisa

$('.pesquisa').on('click', 'input[type="submit"]', function() {
    window.location = 'resultados-pesquisa.html';
});



})();