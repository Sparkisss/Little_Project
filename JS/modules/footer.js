function footer() {
const headBtn = document.querySelectorAll('.link'),
      parentHeadBtn = document.querySelector('.header'),
      textInfo = document.querySelectorAll('.item__text'),
      btnStyle = document.querySelector('a');
      

function showUseSkills (a, b, c, d, e, f) {
  textInfo.forEach((item, index) => {
    if (item === textInfo[a] || item === textInfo[b] || item === textInfo[c] 
      || item === textInfo[d] || item === textInfo[e] || item === textInfo[f]){

    //   MenuCard.classes[index].classList.add('item__text-activ');
    }    
  });  
};

function delUseSkills () {
  textInfo.forEach((item, index) => {
    textInfo[index].classList.remove('item__text-activ');
  });
};

headBtn.forEach((item, i) => {
  headBtn[i].addEventListener('click', (event) => {    
    if (i === 0) {     
      delUseSkills (); 
      showUseSkills (0, 1, 2,3);
    }else if (i === 1) {
      delUseSkills (); 
      showUseSkills (3,4);
    }else if (i === 2) {
      delUseSkills (); 
      showUseSkills (1,3,4,5);
    }else if (i === 3) {
      delUseSkills (); 
      showUseSkills (4);
    }else if (i === 4) {
      delUseSkills (); 
      showUseSkills (1,2,3,4,5);
    }    
  });
});

btnStyle.addEventListener('click', (event) => {
  delUseSkills ();
});

parentHeadBtn.addEventListener('click', (event) => {
  event.preventDefault();
});
}

module.exports = footer;