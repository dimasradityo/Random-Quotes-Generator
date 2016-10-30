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
var author = '';
var quote = '';
var encode = '';
var twit = 'https://twitter.com/intent/tweet?text=';


$(document).ready(function(){
    $.getJSON(url, function(data){
         author = data.quoteAuthor;
         quote = '"' +data.quoteText+ '"';         
                
                    $('blockquote').hide().html(quote).fadeIn(2000);
                    if (author == ''){
                        author = 'Unknown';
                    }
                    author = '-' + author;
                    $('cite').hide().html(author).fadeIn(4000);

        encode = encodeURIComponent(quote + ' ' +author);               
            });

    $('#tweet').on('click', function(){
        $('#tweet').attr('href', twit.concat(encode));
        window.open(this.href, 'newTweet','left=300,top=350,width=700,height=270,toolbar=1,resizable=0'); return false;
    });                            

    $('#new').on('click', function(){
        counter++;                              
            $.getJSON(url, function(data){
                 author = data.quoteAuthor;
                 quote = '"' +data.quoteText+ '"';                                
                    $('blockquote').hide().fadeOut(1000).html(quote).fadeIn(2000);
                    
                    if (author == ''){
                        author = 'Unknown';
                    } 
                    author = '-' + author;
                    $('cite').hide().fadeOut(1000).html(author).fadeIn(4000); 

                    encode = encodeURIComponent(quote + ' ' +author);

                    $('.well').css({
                        transition: 'background-color 1s ease-in-out',
                        'background-color': colors[(counter)%colors.length],                        
                        'border-color': colors[(counter)%colors.length]
                    });

                    $('a,a:link,a:visited').css({
                        transition: 'color 1s ease-in-out',
                        'color': colors[(counter)%colors.length]
                    });
                                                             
            });

            
            
    });
});
            
