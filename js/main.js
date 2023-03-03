import {displayGames} from './Modules/Display.js';

$(function(){
    $('#loading').fadeOut();
})

displayGames().then(res=>{
    $('#show-more-btn').click(function(){
        res.next();
    })
});

$('nav .nav-item a').click(function(){
    let cat = this.dataset.cat;
    $('nav .nav-item a').removeClass('active')
    $(this).addClass('active');
    displayGames(cat)
})

$('#game-detail-close').click(function(){
    $('#game-detail').hide();
    $('body').removeClass('overflow-hidden');
})