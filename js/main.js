// header&footer
$('.header-temp').html(
    '<header><nav class="pc"><h1 class="title">S-bakery</h1><ul><li><a href="index.html">HOME</a></li><li><a href="page/menu.html">MENU</a></li><li><a href="SHOP.html">SHOP</a></li><li><a href="about.html">ABOUT</a></li><li><a href="contact.html">CONTACT</a></li></ul></nav><nav class="sp"><div class="hunberger-btn"><span class="bar bar-top"></span><span class="bar bar-mid"></span><span class="bar bar-bottom"></span></div><div class="nav-area close"><ul><li><a href="index.html">HOME<br>ホーム</a></li><li><a href="menu.html">MENU<br>商品紹介</a></li><li><a href="SHOP.html">SHOP<br>通販</a></li><li><a href="about.html">ABOUT<br>当店について</a></li><li><a href="contact.html">CONTACT<br>お問い合わせ</a></li></ul></div></nav></header>'
    )
    
$('.footer-temp').html(
'<footer><small>&copy;S-bakery</small></footer>'
)

// hunberger-btn open close
$('.hunberger-btn').on('click', function(){
    if($('.nav-area').hasClass('open')){
        $('.nav-area').removeClass('open');
        $('.nav-area').addClass('close');
    }else if($('.nav-area').hasClass('close')){
        $('.nav-area').removeClass('close');
        $('.nav-area').addClass('open');
    }
})

// slider
$('.slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
});

