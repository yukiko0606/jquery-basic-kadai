$(function() {
    //文字色変化
    $('#chage-color').on('click',function(){
        $('#target').css('color', 'blue');
    });
    //文字内容変化
    $('#chage-text').on('click',function(){
        $('#target').text('Hello');
    });
    //フェードアウト
    $('#fade-out').on('click',function(){
        $('#target').fadeOut();
    });
    //フェードアイン
    $('#fade-in').on('click',function(){
        $('#target').fadeIn();
    });
});
