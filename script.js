class Animation{
    constructor(target){
        this.targetPos = target.offset().top;
    }
    static winHeight = $(window).height();
    get scrollToElem(){
        return this.targetPos - Animation.winHeight;
    }
    static checkPC(){
        if ($(window).width() > 760) {
            return true;
        }
        else 
            return false;
    }
}
$(window).scroll(function () { 
    if(window.pageYOffset == 0){
        $('nav').removeClass('navHide');
        $('.navbar-brand').removeClass('navbarDark');
    }else{
        $('nav').addClass('navHide');
        $('.navbar-brand').addClass('navbarDark');
    }
});


var textAbout =[];
for (let i = 0; i < 7; i++) {
    textAbout[i] = false;
}
$(`.colMini p + p`).hide();
$('.colBlock').click(function (e) { 
    var id = e.target.id;
    id = Number(id[1]) + 2;
    $(`.colMini:nth-child(${id}) .colBlock`).hide();
    if (textAbout[id-1] == false) {
        $(`.colMini:nth-child(${id }) .stepText`).fadeOut(0);
        textAbout[id-1] = true;
        $(`.colMini:nth-child(${id}) .stepText + p`).fadeIn(600);
    }
    else{
        $(`.colMini:nth-child(${id}) .stepText`).fadeIn(600);
        textAbout[id-1] = false;
        $(`.colMini:nth-child(${id}) .stepText + p`).fadeOut(0);
    }
    setTimeout(() => {
        $(`.colMini:nth-child(${id}) .colBlock`).show();
    }, 800);
});

$(`#steps div .stepText + p`).fadeOut(0);
var countAbount = 2;
if (Animation.checkPC()) {
    setInterval(() => {
        if (textAbout[countAbount-1] == false) {
            $(`#steps div:nth-child(${countAbount }) .stepText`).fadeOut(0);
            textAbout[countAbount-1] = true;
            $(`#steps div:nth-child(${countAbount}) .stepText + p`).fadeIn(600);
        }
        else{
            $(`#steps div:nth-child(${countAbount}) .stepText`).fadeIn(600);
            textAbout[countAbount-1] = false;
            $(`#steps div:nth-child(${countAbount}) .stepText + p`).fadeOut(0);
        }
        countAbount++;
        if (countAbount == 7) {
            countAbount = 2;
        }
    }, 2200);
}

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top-80;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $("#ClassLinkCalc").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top-50;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    
    let anim1 = new Animation($('#target1'));
    let anim2 = new Animation($('#target2'));
    let anim3 = new Animation($('#target3'));
    let anim4 = new Animation($('#target4'));
    let anim5 = new Animation($('#target5'));
    
    $(window).scroll(function () { 
        let winScrollTop = $(this).scrollTop();
        if (Animation.checkPC()) {
            if(winScrollTop > anim1.scrollToElem){
                $('.blockRight').addClass('fadeInLeft');
                $('.blockLeft').addClass('fadeInRight');
            }
            if(winScrollTop > anim2.scrollToElem){
                $('.blockSpecially:nth-child(1)').addClass("fadeInLeft");
                $('.blockSpecially:nth-child(2)').addClass("fadeInUp");
                $('.blockSpecially:nth-child(3)').addClass("fadeInRight");
            }
            if (winScrollTop > anim3.scrollToElem) {
                let flagPartner = 1;
                setInterval(() => {
                    $(`.blockPartner:nth-child(${flagPartner})`).addClass('zoomIn');
                    flagPartner++;
                    if (flagPartner == 5) {
                        return;
                    }
                }, 300);
            }
            if(winScrollTop > anim4.scrollToElem){
                let flagMini = 1;
                setInterval(() => {
                    $(`.colMini:nth-child(${flagMini})`).addClass('flipInY');
                    flagMini++;
                    if (flagMini == 6) {
                        return;
                    }
                }, 600);
            }
            if(winScrollTop > anim5.scrollToElem){
                $(".footerForm").addClass('fadeInUp');
            }
        }
    });
});

$('nav').fadeOut();
$(document).ready(function(){
    $('nav').fadeIn(500);
    $('#mainTitle').hide();
    $('#mainTitle').slideDown(800);
});

if ($(window).width() < 768) {
    $('.footerTitle').removeClass('order-3');
    $('.footerTitle').addClass('order-1');
    $('#footerLogo').addClass('text-center');
    $('.footerContact').removeClass('text-right');
    $('.footerContact').addClass('text-center');
}

let flagToggler = true;
$('.navbar-toggler').click(function () { 
    if (flagToggler) {
        $('nav').addClass('whiteFon');
        $('.navbar-brand').addClass('navbarDark');
        flagToggler = false;
    }
    else{
        $('nav').removeClass('whiteFon');
        $('.navbar-brand').removeClass('navbarDark');
        flagToggler = true;
    }
});

if ($(window).width() < 990) {
    document.getElementById("stub2").textContent = "";
    document.getElementById("stub").textContent = "";
}
