$('.carousel').carousel({
  interval: 8000
})
/*--done of the page's scrolling--*/
const progress= document.querySelector('.progress')//find this element in the site

window.addEventListener('scroll',progressBar);// add the event on the scrolling of our page.

function progressBar(e){
  let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;// fine how many picsels we have scrolled
  let windowHight = document.documentElement.scrollHeight - document.documentElement.clientHeight;//show us the window height
  //console.log(windowScroll)
  //console.log(windowHight)
  let percents=windowScroll/windowHight * 100;//get percents%%%
  
  progress.style.width = percents + '%';//width gets %
}

/*---scrolling effect ---*/

  const animItems=document.querySelectorAll('.anim-items');//added classes in var
  
  if(animItems.length>0){//if thre'is what to scroll
  window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params){
      for(let i=0;i<animItems.length;i++){
        const animItem = animItems[i];//any element from our page
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;//how the element is lower on the page//its position
        const animStart = 4;//beginning of animation from 1/4 of the screen

        let animItemPoint = window.innerHeight - animItemHeight/animStart;//beginning of animation

        if(animItemHeight > window.innerHeight){
          animItemPoint = window.innerHeight - animItemHeight/animStart;//if the element is more then window
        }
        if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
          animItem.classList.add('.active');
        } else{
          animItem.classList.remove('.active');
        }


      }
    }

    function offset(el){
      const rect = el.getBoundingClientRect();
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    animOnScroll();
  }
