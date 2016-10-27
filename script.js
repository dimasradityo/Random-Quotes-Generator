var url = 'http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?';
var counter = 0;
var colors = [    
    'lightcoral',
    'lightcyan',
    'lightgreen',
    'lightgoldenrodyellow',
    'lightgray',
    'lightpink',
    'lightblue',
]

$(document).ready(function(){
    $.getJSON(url, function(data){
        var author = data.quoteAuthor;
                
                    $('blockquote').html('"' +data.quoteText+ '"');
                    if (author == ''){
                        author = 'Unknown';
                    }
                    $('cite').html('-' +author);                                                  
            });

    $('#new').on('click', function(){
        counter++;                              
            $.getJSON(url, function(data){
                var author = data.quoteAuthor;
                
                    $('blockquote').html(data.quoteText);
                    if (author == ''){
                        author = 'Unknown';
                    } 
                    $('cite').html('-' +author); 
                                                             
            });

            $('.well').css({
                'background-color': colors[(counter)%colors.length],
                'border-color': colors[(counter)%colors.length]              
            });

            $('a,a:link,a:visited').css({
                'color': colors[(counter)%colors.length]
            });
            
    });
});
            
