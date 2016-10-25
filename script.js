var url = 'http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?';

$(document).ready(function(){
    $.getJSON(url, function(data){
        var author = data.quoteAuthor;
                
                    $('blockquote').html(data.quoteText);
                    if (author == ''){
                        author = 'Unknown';
                    }
                    $('cite').html(author);                                                  
            });

    $('#new').on('click', function(){                                
            $.getJSON(url, function(data){
                var author = data.quoteAuthor;
                
                    $('blockquote').html(data.quoteText);
                    if (author == ''){
                        author = 'Unknown';
                    } 
                    $('cite').html(author);                                                  
            });
    });
});
            
