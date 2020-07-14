// CHANGE BUTTONS



$(".changeBtn1").click(function(){

    console.log("click is working Btn 1");

        $(".firstDiv").css("background","magenta");

        $(".firstDiv").css("border-color","green");

});





$(".changeBtn2").click(function(){

    console.log("click is working Btn 2");

        $(".secondDiv").css("background","orange");

        $(".secondDiv").css("border-color","purple");

    });





$(".changeBtn3").click(function(){

    console.log("click is working Btn 3");

        $(".thirdDiv").css("background","white")

        $(".thirdDiv").css("border-color", "pink")



   });



$(".changeAllBtn").click(function(){

    console.log("click is working change all");

    $(".firstDiv").css("background","gray");

    $(".firstDiv").css("border-color","red");



    $(".secondDiv").css("background","gray");

    $(".secondDiv").css("border-color","red");



    $(".thirdDiv").css("background","gray");

    $(".thirdDiv").css("border-color","red");

  });







// HIDE BUTTONS



 $(".hideBtn1").click(function(){

    $(".firstDiv").toggle();

 })    



 $(".hideBtn2").click(function(){

    $(".secondDiv").toggle();

 })    



 $(".hideBtn3").click(function(){

    $(".thirdDiv").toggle();

 })    



 $(".hideAllBtn").click(function(){

    $(".firstDiv").toggle();

    $(".secondDiv").toggle();

    $(".thirdDiv").toggle();

 })    





// SHOW BUTTONS



 $(".showAllBtn").click(function(){

    $(".firstDiv, .secondDiv, .thirdDiv").toggle();

 });