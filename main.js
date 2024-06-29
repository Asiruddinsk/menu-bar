function myheaderFunction(){
    var header = document.querySelector('.header').classList.toggle('show');
}

function darkmodeFunction(){
  var darktext = document.getElementById('darktext');
  var body = document.body;
  var header = document.querySelector('.main-container');
  if(darktext.innerHTML === 'Light'){
    darktext.innerHTML = 'Dark';
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    header.style.backgroundColor = 'white';
    header.style.color = 'black';
  }else{
    darktext.innerHTML = 'Light';
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
    header.style.backgroundColor = 'black';
    header.style.color = 'white';
  }
}

function readmoreFunction1(){
    var dots = document.getElementById('dots1');
    var text = document.getElementById('text1');
    var readMore = document.getElementById('readmore1');

    if(dots.style.display === 'none'){
        dots.style.display = 'inline';
        text.style.display = 'none';
        readMore.innerHTML = 'readMore';
    }else{
        dots.style.display = 'none';
        text.style.display = 'inline';
        readMore.innerHTML = 'readLess';

    }

}

function readmoreFunction2(){
    var dots = document.getElementById('dots2');
    var text = document.getElementById('text2');
    var readMore = document.getElementById('readmore2');

    if(dots.style.display === 'none'){
        dots.style.display = 'inline';
        text.style.display = 'none';
        readMore.innerHTML = 'readMore';
    }else{
        dots.style.display = 'none';
        text.style.display = 'inline';
        readMore.innerHTML = 'readLess';

    }

}

function readmoreFunction3(){
    var dots = document.getElementById('dots3');
    var text = document.getElementById('text3');
    var readMore = document.getElementById('readmore3');

    if(dots.style.display === 'none'){
        dots.style.display = 'inline';
        text.style.display = 'none';
        readMore.innerHTML = 'readMore';
    }else{
        dots.style.display = 'none';
        text.style.display = 'inline';
        readMore.innerHTML = 'readLess';

    }

}

function readmoreFunction4(){
    var dots = document.getElementById('dots4');
    var text = document.getElementById('text4');
    var readMore = document.getElementById('readmore4');

    if(dots.style.display === 'none'){
        dots.style.display = 'inline';
        text.style.display = 'none';
        readMore.innerHTML = 'readMore';
    }else{
        dots.style.display = 'none';
        text.style.display = 'inline';
        readMore.innerHTML = 'readLess';

    }

}


function myimageFunction(i){
   var img = document.getElementById('shortimg');
   img.src = i.src;
}
