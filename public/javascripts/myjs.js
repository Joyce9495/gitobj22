/**
 * Created by rimi on 2016/10/27.
 */
function do_attr() {
    $('#div-1>p').attr(
        {style:"border:1px solid #foo;",alt:"设置style属性"});
        var oneTg=$('#div-1>p#one').attr('title');
       $('#div-1>p#one').html(oneTg+'的title属性值');
       $('#div-1>p#two').attr('title','修改style的属性值');
        $('#div-1>p#three').attr('title',function () {
            var title=this.id;
            return title;
        }).each(function () {$(this).html('title属性与下一个'+this.title);
        });
}
function do_removeAttr() {
    $('#div-2 p#one').removeAttr('style');
}
function do_addClass() {
    $('#three').addClass('box');
    
}
function do_removeclass(){
    $('#div-4 p').remove('color');
}
function do_toggleClass(){
    $('#one,#two').toggleClass('redbox');

}
function do_toggleClass(){
    var cnt=1;
    $('#div-5 p#three').click(
        function () {
            $(this).toggleClass('redbox,cnt++ % 3==0');

        }
    );
}

function do_html() {
    var val=$('#one').html();
    $('#two').html(val);
}
function do_text() {
    var val=$('#one').text();
    $('#two').html(val);
}
function do_val() {
    var val=$('#div-8 :text#one').val();
    $('#div-8 :text#two').val(val);
    
}

