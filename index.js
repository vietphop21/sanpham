var img = document.querySelectorAll('.imgcaocap')
var thep = document.querySelectorAll('.thep')


function xetrungcap() {
    for (i = 0; i < img.length; i++)
    {




        img[i].setAttribute('class', 'imgtrungcap');
    }

}
function xephothong() {
    for (i = 0; i < img.length; i++)
    {    


        img[i].setAttribute('class', 'imgphothong');
    }

        
}
function xecaocap() {
    for (i = 0; i < img.length; i++)
    {
        img[i].setAttribute('class', 'imgcaocap');
    }

        
}

