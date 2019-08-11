

  $("button").click(function() {
    var ptext = this.nextElementSibling;
    this.classList.toggle("selected");
    if (ptext.style.maxHeight){
        ptext.style.maxHeight = null;
      } else {
        ptext.style.maxHeight = ptext.scrollHeight + "px";
      } 
});

$(document).ready(function(){
    $('div #progress-skill label').each(function(i){
        var val = $(this).css("width");  
        if(val=="900px")
    $(this).css("background-color","red");
    else if(val=="950px") {
        $(this).css("background-color","green");

    }

    else if(val=="850px") {
        $(this).css("background-color","skyblue");

    }

    else if(val=="750px")
    $(this).css("background-color","yellow");

    else if(val=="800px")
    $(this).css("background-color","blue");

    else if(val=="970px")
    $(this).css("background-color","cyan");
    });    

})