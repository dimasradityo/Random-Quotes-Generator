var url = 'http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?';

$(document).ready(function(){
    $('#new').on('click', function(){
                //var $content = $('.content');
            $.getJSON(url, function(data){
                
                    $('.content').append('<blockquote>' +data.quoteText+ '</blockquote>' );
                    $('.content').append('<cite> ' +data.quoteAuthor+ '</cite>' );                                    
            });
    });
});
            
