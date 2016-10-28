/**
 * Created by rimi on 2016/10/28.
 */
$(document).ready(
    function () {
        // $("input#username,input#pass").focus(
        //     function () {
        //         $(this).css("background","red")
        //     });
        // $("input#username,input#pass").blur(function () {
        //     $(this).css("background","white")
        // });
        //
        // $("#focus").click(function () {
        //     if ($("input#username").val()==''){
        //         {
        //             alert("请输入用户名");
        //             $('input#username').focus();
        //         }
        //     }
        // })

        // $("button#ctrl_img").bind("click",function () {
        //     $("p#img").slideToggle()
        // });
        // $('#img-click').click(function () {
        //     var imghtml='<img src="../images/eg_car.jpg">';
        //         $(this).html(imghtml)
        //
        // });

            // $("#img-toggle").toggle(
            //     function () {$("#img-toggle").attr("src","../images/eg_car.jpg");},
            //     function () {$("#img-toggle").attr("src","../images/u=3408273536,4062697262&fm=21&gp=0.jpg");},
            //    function () {$("#img-toggle").attr("src","../images/u=63795426,3846036191&fm=21&gp=0.jpg");}
            // );

        $("#img-hover").hover(
            function () {
            $("#img-hover").attr("src","../images/eg_car.jpg");
            },
            function () {
            $("#img-hover").attr("src","../images/eg_car2.jpg")});


           // function getTopLenght() {
           //     if($(window).scroll()){
           //         $(window).scroll(function () {
           //             alert($(this).scrollTop());
           //         });
           //     }
           // }

        

        // $("#mouse-img-one").mouseover(function () {
        //     $('#mouse-img-one').attr("src","../images/u=63795426,3846036191&fm=21&gp=0.jpg");
        // });
        // $("#mouse-img-one").mouseout(function () {
        //     $('#mouse-img-one').attr("src","../images/u=3408273536,4062697262&fm=21&gp=0.jpg");
        // });


    });