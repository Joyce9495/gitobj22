/**
 * Created by rimi on 2016/10/27.
 */
function do_css() {
    $('#div-8 p').each(function () {
        $(this).append("属性是["+$(this).css("color")+"].");
    });
}
function do_css2() {
    $("#div-2 p#one2").css('color','red');

    $("#div-2 p#two2").css({color:"white",background:'black'});
}
function do_offset() {
    var ofset=$('#div-3 p#one').offset();
    $('#div-3 p#two').html("top = "+ofset.top+"px<br>"+ofset.left+"px");
}
function do_height() {
    $("#div-4 p#one").append("高度="+$(document).height()+"px");
    $("#div-4 p#two").append("高度="+$(window).height()+"px");
    $("#div-4 p#three").append("高度="+$("div#div-4").height()+"px");
}
function do_width() {
    $("#div-5 p#one").append("宽度="+$(document).height()+"px");
    $("#div-5 p#two").append("宽度="+$(window).height()+"px");
    $("#div-5 p#three").append("宽度="+$("div#div-5").height()+"px");
}