$(".toogle").click(function() {
    $(".formulario").animate({
        height: "toggle",
        'padding-bottom': 'toggle',
        'padding-top': 'toggle',
        opacity: "toggle"
    },"slow");

});

$("#esconde").hide();

$("#hacerlo").click(function() {

    $("#esconde").show(1000);
    $("#hacerlo").hide(1000);

});

$("#esconde").click(function() {

    $("#hacerlo").show(1000);
    $("#esconde").hide(1000);

});



