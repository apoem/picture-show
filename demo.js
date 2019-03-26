window.onload = function () {
    var img = $('img');
    var len = img.length;
    for (var i = 0; i < len; i++) {
        img.eq(i).css({
            'transform': 'rotateY(' + 360 / len * i + 'deg) translateZ(300px)',
            'transition': 'transform 2s, translateX 2s ' + (len - i - 1) * 0.2 + 's'
        });
    }
    bindEvent();
}

function bindEvent() {
    var nowX, nowY, lastX, lastY, disX = 0, disY = 0, timer;
    $('body').mousedown(function (e) {
        lastX = e.clientX;
        lastY = e.clientY;
        $('body').mousemove(function (e) {
            nowX = e.clientX;
            nowY = e.clientY;
            disX += nowX - lastX;
            disY -= nowY - lastY;
            console.log('ffdsadfs');
            $('.box').css({
                'transform': 'rotateY(' + disX * 0.2 + 'deg) rotateX(' + disY * 0.2 + 'deg)',
            })
            lastX = nowX;
            lastY = nowY;
        })

        $('body').mouseup(function () {
            $('body').off('mousemove');
            timer = setInterval(function () {
                disX *= 0.95;
                disY *= 0.95;
                $('.box').css({
                    'transform': 'rotateY(' + disX * 0.2 + 'deg) rotateX(' + disY * 0.2 + 'deg)',
                })
                if (Math.abs(disX) < 0.1 && Math.abs(disY) < 0.1) {
                    clearInterval(timer);
                }
            }, 10)
            
        })
        return false;
    })
}
