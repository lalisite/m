$.ready(function () {
    // $('body').scrollspy({target: "nav", offset: 50});   

    $(".navbar-nav li a").click(function (event) {
        $(".navbar-collapse").collapse('hide');
    });

    // card
    // var card = document.querySelector('.card');
    // card.addEventListener('click', function () {
    //     card.classList.toggle('is-flipped');
    // });

    //end card


    // $(document).ready(function () {
    //     // $('body').scrollspy({target: "nav", offset: 50});   

    //     $(".navbar-nav li a").click(function (event) {
    //         $(".navbar-collapse").collapse('hide');
    //     });

    //     var card = document.querySelector('.card');
    //     card.addEventListener('click', function () {
    //         card.classList.toggle('is-flipped');
    //     });

    // });

 

});
function ggg(e){
    //console.log($(e));
    if($(e).siblings().hasClass("goralBtn2"))
     $(e).siblings().removeClass("goralBtn2"); 
     $(e).addClass("goralBtn2");//console.log($(e));
};