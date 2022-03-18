'use strict';


// 반복적으로 나오는 코드를 모아가지고..

const galleryLi=document.querySelectorAll('.gallery>ul>li');

const autoGallery=()=>{

  const arrBg=[];

  for(let i=0; i<galleryLi.length; i++){
    arrBg.push(`url(img/${i}.jpg) no-repeat 50%/cover`);
    galleryLi[i].style.background=arrBg[i];
  } 

}

