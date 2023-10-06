"use strict"
window.addEventListener('DOMContentLoaded', () => {


/////////////////////////////////////Отработка нажатия кнопки//////////////////////////////////////////

const headBtn = document.querySelectorAll('.link'),
      parentHeadBtn = document.querySelector('.header'),
      textInfo = document.querySelectorAll('.item__text'),
      btnStyle = document.querySelector('a');
      

function showUseSkills (a, b, c, d, e, f) {
  textInfo.forEach((item, index) => {
    if (item === textInfo[a] || item === textInfo[b] || item === textInfo[c] 
      || item === textInfo[d] || item === textInfo[e] || item === textInfo[f]){

      MenuCard.classes[index].classList.add('item__text-activ');
      console.log(MenuCard.classes[index]);      

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
      
/////////////////////////////////////Timer//////////////////////////////////////////

const howMatchTime = '2023-06-11';

function getFullTime(fullTime) {
  const t = Date.parse(new Date()) - Date.parse(fullTime),
        days = Math.floor(t/ (1000 * 60 * 60 * 24)),
        hours = Math.floor((t / (1000 * 60 * 60) % 24)),
        minutes = Math.floor((t / 1000 / 60) % 60),
        seconds = Math.floor((t / 1000) % 60);

  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function getZero(num) {
  if (num >= 0 && num < 10) return `0${num}`;
  else return num;
}

function setClock(selector, fullTime) {
  const timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);

  updateClock(); // убираем мигание при старте работы таймера, т. е. запускаем таймер сразу а не ждем секунду

  function updateClock() {
    const t = getFullTime(fullTime);

    days.innerHTML = getZero(t.days);
    hours.innerHTML = getZero(t.hours);
    minutes.innerHTML = getZero(t.minutes);
    seconds.innerHTML = getZero(t.seconds);

    if (t.total <= 0) {
      clearInterval(timeInterval);
    }
  }
}

setClock('.timer', howMatchTime);

//////////////////////////////////Modal window///////////////////////////////////////

const modalBtn = document.querySelectorAll('[data-modal]'),
      modalWindow = document.querySelector('.modal'),
      modalClose = document.querySelector('[data-close]');

function closeModal() {
  modalWindow.classList.remove('show');
  modalWindow.classList.add('hidden');
  document.body.style.overflow = '';
};

function openModal() {
  modalWindow.classList.add('show');
  modalWindow.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  // clearInterval(modalTimerId);
}

modalBtn.forEach(btn => {
  btn.addEventListener('click', openModal);
});

modalClose.addEventListener('click', closeModal);
document.addEventListener('keydown', (event) => {
  if (event.code === 'Escape' && modalWindow.classList.contains('show')) {
    closeModal();
  }
});

// const modalTimerId = setTimeout(openModal, 10000);

function showModalByScroll() {
  if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
    openModal();
    window.removeEventListener('scroll', showModalByScroll);
  }
}

window.addEventListener('scroll', showModalByScroll);

//////////////////////////////////Constructor. Classes for cards///////////////////////////////////////

class MenuCard {
  constructor(title, text, src, parentSelector, ... classes) {
    this.title = title;
    this.text = text;
    this.src = src;
    this.classes = classes;
    this.parent = document.querySelector(parentSelector);
  }

  render() {
    const element = document.createElement('div');
    if (this.classes.length === 0) {
      this.element = 'flex__item';
      element.classList.add(this.element);
    }else {
      this.classes.forEach(className => element.classList.add(className));
    }


    element.innerHTML = `        
        <div class="item__title">${this.title}</div>
        <div class="item__text">${this.text}</div>
        <div class="item__img">
          <img src=${this.src} alt="">
        </div>      
    `;
    this.parent.append(element);
  }
}

new MenuCard(
  'My HTML.',
  'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.',
  "./img/HTML.png",
  '.main .flex__row',
  'flex__item',
  'item__text-activ',
).render();

new MenuCard(
  'My CSS.',
  'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as  SVG, MathML or XHTML). CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.',
  "./img/CSS.jpg",
  '.main .flex__row',
  'flex__item',  

).render();

new MenuCard(
  'My JS.',
  'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior,[10] often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users devices.',
  "./img/JS.png",
  '.main .flex__row',
  'flex__item',
).render();


new MenuCard(
  'My Sass/SCSS.',
  'Sass (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself.',
  "./img/scss.png",
  '.main .flex__row-two',
  'flex__item',
).render();

new MenuCard(
  'My React.',
  'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.',
  "./img/React.jpg",
  '.main .flex__row-two',
  'flex__item',  

).render();

new MenuCard(
  'My TS.',
  'TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript. Because TypeScript is a superset of JavaScript, all JavaScript programs are syntactically valid TypeScript, but they can fail to type-check for safety reasons.',
  "./img/TS.png",
  '.main .flex__row-two',
  'flex__item',
).render();


const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');


inputRub.addEventListener('input', () => {
  const request = new XMLHttpRequest();
  
  request.open('GET', 'js/current1.json');
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.send();

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
      const data = JSON.parse(request.response);
      inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
    }else {
      inputUsd.value = "Something goes wrong";
    }
  });
});















});

