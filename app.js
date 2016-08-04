
$(document).ready(function(){
    $('button').click(function(){
        var words = $('textarea').val();
        console.log(words);
         $("#wall").prepend("<div>"+words+"</div>" );
       });
});