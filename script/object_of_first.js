var Body = {
    setBackgroundColor : function(color){
        document.querySelector('body').style.backgroundColor = color;
    },
    setFontColor : function(color){
        document.querySelector('body').style.color = color;
    }
}

var Links = {
    setFontColor : function(color){
        var alist = document.querySelectorAll('a');
        console.log(alist);
        for(var x of alist){
            console.log(x);
            x.style.color  = color;
        }
    }
}

function makeNight(self){
    Body.setBackgroundColor('black');
    Body.setFontColor('white');
    Links.setFontColor('powderblue');
}

function makeDay(self){
    Body.setBackgroundColor('white');
    Body.setFontColor('black');
    Links.setFontColor('black');
}
