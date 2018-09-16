$(function(){
    // $.get('/yoursite/NetEaseMusic/lyric.json').then(function(object){
    //     let lyric = object.lyric;
    //     let array = lyric.split('\n');
    //     let regex = /^\[(.+)\](.+)/ ;
    //     array = array.map(function(string){
    //         let matches = string.match(regex);
    //         // console.log(matches);
    //         if(matches){
    //             return {time: matches[1], words: matches[2]};
    //         }
    //     })
    //     let $lyric = $('.lines');
    //     array.map(function(object){
    //         if(!object){
    //             return ;
    //         }
    //         let $p =$('<p/>');
    //         $p.attr('data-time',object.time).text(object.words);
    //         $p.appendTo($lyric);
    //     })
    // })

    let audio =document.createElement('audio');
    audio.src ='http://www.170mv.com/kw/other.web.ra01.sycdn.kuwo.cn/resource/n2/128/26/14/3930574362.mp3';
    // audio.autoplay = true;
    
    $('.disc').on('click',function(){
        if(audio.paused){
            audio.play();
            $('.disc .icon-play').hide();
            $('.disc-container').addClass('playing').removeClass('paused');

        }else{
            audio.pause();
            $('.disc .icon-play').show().siblings().hide();
            $('.disc-container').addClass('paused');
        }
    })
})