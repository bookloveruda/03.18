'use strict';

const gallery=document.querySelector('.gallery');
const galleryLi=document.querySelectorAll('.gallery>ul>li');
const itemsLi=document.querySelectorAll('.items>ul>li');

// Q : galleryLi 각각 for, 배열을 이용해서 배경이미지를 설정하시오
// A : 
// for(i=0){
//   galleryLi[0].
// }
// A :
const arrBg=[];
for(let i=0; i<galleryLi.length; i++){
  arrBg.push(`url(img/${i}.jpg) no-repeat 50%/cover`);
  galleryLi[i].style.background=arrBg[i];
} 



let i = -1;


function autoGallery(){

  i++;

  // ▼ 이동 기준 거리 (하나의 li의 너비)
  const gap = galleryLi[1].offsetLeft - galleryLi[0].offsetLeft;

  // ▼.gallery가 이동하는 것 (li가 이동하는 것이 아니라) 왼쪽으로 이동하니까 -i
  const goto = (-i*gap)+'px';

  // console.log(`autoGallery -> i ${i}`);
  console.log(`i ${i} , gap ${gap} , goto ${goto}`);
  
  gallery.style.left=goto;
  gallery.style.transition='all 0.5s'

  // li가 마지막번지가 되었다가 다시 0으로 되돌아가는, 반복실행 하도록 조건문 써보시오
  // if(i>3){
  //   i = -1;
  // }
  // if(i>=4) i = -1;
  if(i>=galleryLi.length-1) i = -1;

  // 밑에 순서 표시가 움직임.. forEach 활용해서
  itemsLi.forEach((el,idx)=>{
    // console.log(el,idx)
    if(idx===i){
      el.classList.add('on')
    }else{
      el.classList.remove('on')
    }
  });

}

// Q : 3초마다 autoGallery실행하도록 해보시오. setInterval 사용해서..
// A : 
// setInterval(autoGallery,3000);


// 즉시 실행 함수
(()=>{
  autoGallery();
})();






////////////////////////////////////////////////////////////////////////////////

