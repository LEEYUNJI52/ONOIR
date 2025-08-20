$(function(){
    // submenu
    $(".submenu").hide();
    // gnb li에 마우스를 올리면,
    $(".gnb li").mouseenter(function(){
        // 마우스가 올려진 gnb li(this)의 자식요소인 submenu를 이전 움직임을 멈추고(stop) 슬라이드다운한다.
        $(this).children(".submenu").stop().slideDown();
    });

    // gnb li에 마우스가 벗어나면,
    $(".gnb li").mouseleave(function(){
        // 마우스가 올려진 gnb li(this)의 자식요소인 submenu를 이전 움직임을 멈추고(stop) 슬라이드업한다.
        $(this).children(".submenu").stop().slideUp();
    });
});