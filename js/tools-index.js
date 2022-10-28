function ziDonglun(target,text){
    var index = 0;
    var timer;
    randDom(target,text);
    // 渲染启动
    function randDom(target,text) {
        var conTent = $('.content');
        conTent.append(siderDom(target));
        conTent.append(anDom());
        conTent.append(siderOn(target));
        animateMove('on-right');
        sideronHover();
        blurContent();
        Text(text);
    }
    // 图片渲染
    function siderDom(target) {
        var oDiv = $('<div class = "sider" />');
        var i = 0;
        var str = ''
        target.forEach(function (index, ele) {
            str +=
                '<li>' +
                '<a href="">' +
                '<img src="' + index + ' " alt="">' +
                '</a>' +
                '</li>'
            i++;
        })
        oDiv.append(str)
        var len = oDiv[0].children;
        $(oDiv[0]).css({ width: 100 * i + '%' })
        for (var j = 0; j < len.length; j++) {
            $(len[j]).css({ width: 'calc(100% / ' + i + ')' })
        }
        return oDiv
    }

    // 按钮生成
    function anDom() {
        var oDiv1 = $('<div class="siderlf"></div>')
        var oDiv2 = $('<div class="siderrg"></div>')
        return [oDiv1, oDiv2]
    }

    //底部导航按钮生成
    function siderOn(target) {
        var oDiv = $('<div class = "sideron" />');
        var len = target.length;
        for (var i = 0; i < len; i++) {
            oDiv.append($('<span>'))
        }
        return oDiv;
    }


    //动画
    function animateMove(dritions) {
        var scree = $('.content').width();
        var sonlen = $('.sider li').length - 1;
        $('.sideron span').removeClass('active');
        $('.sider li').removeClass('active');
        switch (dritions) {
            case 'on-left': {
                index--;
                index < 0 ? index = sonlen : index;
                console.log(index)
                $('.sider').css({
                    left: -scree * index + 'px',
                })
                $($('.sideron span')[index]).addClass('active');
                $($('.sider li')[index]).addClass('active')
                break;
            }
            case 'on-right': {
                index++;
                index > sonlen ? index = 0 : index;
                $('.sider').css({
                    left: -scree * index + 'px'
                })
                $($('.sideron span')[index]).addClass('active');
                $($('.sider li')[index]).addClass('active')
                break;
            }
        }
    }
    //左右按钮点击事件
    $('.siderlf').on('click', function () {
        animateMove('on-left');
    })
    $('.siderrg').on('click', function () {
        animateMove('on-right');
    })

    // 底部按钮hover事件
    function sideronHover(){
        $('.sideron span').on('mouseover',function(){
            var scree = $('.content').width();
            $('.sideron span').removeClass('active');
            $('.sider li').removeClass('active')
         var index = $(this).index();
          $(this).addClass('active');
          $($('.sider li')[index]).addClass('active')
          $('.sider').css({left: -scree * index + 'px'})
        })
    }

     // 自动轮播配合聚焦加锁
        timer = setInterval(function () {
                animateMove('on-right')
        }, 2000)

    // banner聚焦清除定时器
    function blurContent(){
        $('.sider').on('mousemove',function(){
            clearInterval(timer);
           
        })
        $('.sider').on('mouseleave',function(){
            timer = setInterval(function () {
                    animateMove('on-right')
            }, 2000)
        })
    }
    //创建banner里面的文字
    function Text(target){
        var P = $('<p />');
        target[0].forEach(function(ele,index){
            var H = $('<h1 />');
            H.text(ele)
            $($('.sider li')[index]).append(H);
        })
        target[1].forEach(function(ele,index){
            var P = $('<p />');
            P.text(ele)
            $($('.sider li')[index]).append(P);
        })
    }
}