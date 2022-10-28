ziDonglun(
    ['./image/1.jpg',
        './image/2.jpg',
        './image/3.jpg'
    ],
    [
        ['标题1', '标题2', '标题3'],
        ['这里是标题1，看看我看看我看看我',
            '这里是标题2，不要看我不要看我不要看我',
            '这里是标题3，要看我要看我要看我'
        ]
    ]
);
var num = 1;
$('.oncontent').on('click', function () {
    var len = $('nav li').length;

    if (num) {
        $('.logo-nav').addClass('active');
        $('.logo-nav').css({
            height: (len + 2) * 50 + 'px'
        })
        num = 0
    } else {
        num = 1;
        $('.logo-nav').removeClass('active');
        $('.logo-nav').css({
            height: '50px'
        })
    }
})

document.addEventListener('wheel',function(){
    if(window.scrollY >= 132 &&  $('.logo-nav').hasClass('active')){
        $('.logo-nav').css({
            position: 'fixed'
        })
    }else{
        $('.logo-nav').css({
            position: 'relative'
        })
    }
}, false);
