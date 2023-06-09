window.onload=function(){
    setTimeout(getpre,1000);
    timer=setInterval(getpre,3000);
    var pics=new Array();
    var dots=new Array();
    var album=document.getElementById('album');
    for(var i=1;i<=5;i++){
        var lbli=document.createElement('li');
        var lbimg=document.createElement('img');

        lbimg.src="../images/home/album-0"+i+".jpg";
        lbimg.style.width="750px"
        lbimg.style.height="421px"
        lbli.appendChild(lbimg);

        album.appendChild(lbli);
        pics.push(lbli);
        pics[pics.length-1].style.left="0px";

        lbimg.onmouseenter=function(){
            clearInterval(timer);
        }
        lbimg.onmouseleave=function(){
            timer=setInterval(getpre,3000);
        }    
        var bottomdot=document.createElement("div");
        bottomdot.style.left=140*(i+1)+"px";
        bottomdot.name=i;
        dots.push(bottomdot);
        album.appendChild(bottomdot);

        if(i>3){
            lbli.id=i-3;
        }else{
            lbli.id=i+2;
        }
        
    }

    var len=pics.length-1;
        pics[len-2].style.left="0px";
        pics[len-2].style.opacity=0.5;
        pics[len-3].style.opacity=0;
        pics[len-4].style.opacity=0;
        pics[len-1].style.zIndex=100;
        pics[len-1].style.left="200px";
        pics[len-1].style.transform="scale(1.3)";
        pics[len-1].style.opacity=1;
        pics[len].style.left="400px";
        pics[len].style.opacity=0.5;

    function getnext(){
        var give_up=pics[len];
        pics.pop();
        pics.unshift(give_up);
        for(var i=0;i<pics.length;i++){
            pics[i].style.zIndex=i;
            pics[i].style.transform="scale(1)";
        }
        pics[len-2].style.left="0px";
        pics[len-2].style.opacity=0.5;
        pics[len-3].style.opacity=0;
        pics[len-4].style.opacity=0;
        pics[len-1].style.zIndex=100;
        pics[len-1].style.left="200px";
        pics[len-1].style.transform="scale(1.3)";
        pics[len-1].style.opacity=1;
        pics[len].style.left="400px";
        pics[len].style.opacity=0.5;

        dotmov();
        pics[len-2].onclick=function(){
            getnext();
        }
        pics[len].onclick=function(){
            getpre();
        }
    }

    function getpre(){
        var give_up=pics[0];
        pics.push(give_up);
        pics.shift();
        for(var i=0;i<pics.length;i++){
            pics[i].style.zIndex=i;
            pics[i].style.transform="scale(1)";
        }
        pics[len-2].style.left="0px";
        pics[len-2].style.opacity=0.5;
        pics[len-3].style.opacity=0;
        pics[len-4].style.opacity=0;
        pics[len-1].style.zIndex=100;
        pics[len-1].style.left="200px";
        pics[len-1].style.transform="scale(1.3)";
        pics[len-1].style.opacity=1;
        pics[len].style.left="400px";
        pics[len].style.opacity=0.5;
        dotmov();
        pics[len-2].onclick=function(){
            getnext();
        }
        pics[len].onclick=function(){
            getpre();
        }
    }

    dots[0].style.background="#aaa";
    function dotmov(){
        for(var i=0;i<dots.length;i++){
            if(dots[i].name==pics[len-1].id){
                dots[i].style.background="#cc3333";
            }else{
                dots[i].style.background="#aaa";
            }
        }
    }
}

function show(pos){
    let picture = document.getElementById("bigimages"+pos);
    picture.style.display="flex";
}

function hide(pos){
    let picture = document.getElementById("bigimages"+pos);
    picture.style.display="none";
}

// 定义获取html的值
let sliderContainer = document.querySelector('.slider-container')
let slideRight = document.querySelector('.right-slide')
let slideLeft = document.querySelector('.left-slide')
let upButton = document.querySelector('.up-button')
let downButton = document.querySelector('.down-button')
let slidesLength = slideRight.querySelectorAll('div').length

// 初始化设置0
let activeSlideIndex = 0

upButton.addEventListener('click',() => changeSlide('up'))
downButton.addEventListener('click',() => changeSlide('down'))

let changeSlide = (direction) =>{
    let slidesHeight = sliderContainer.clientHeight
    if(direction === 'up'){
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1){
            activeSlideIndex = 0
        }
    } else if(direction === 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * slidesHeight }px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * slidesHeight }px)`
}