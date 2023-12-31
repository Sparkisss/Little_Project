"use strict"
window.addEventListener('DOMContentLoaded', () => {


/////////////////////////////////////Отработка нажатия кнопки//////////////////////////////////////////

const headBtn = document.querySelectorAll('.link'),
      parentHeadBtn = document.querySelector('.header'),
      textInfo = document.querySelectorAll('.item__text'),
      changeStyle = document.querySelector('.main__container'),
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

if (localStorage.getItem('bg') === 'changed') {  
  changeStyle.classList.add('main__style');
}

btnStyle.addEventListener('click', () => {
  if (localStorage.getItem('bg') === 'changed') {
    localStorage.removeItem('bg');
    changeStyle.classList.remove('main__style');
  }else {
    localStorage.setItem('bg', 'changed');
    changeStyle.classList.add('main__style');
  }
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
      modalWindow = document.querySelector('.modal');

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
modalWindow.addEventListener('click', (e) => {
  if (e.target === modalWindow || e.target.getAttribute('data-close') == "") {
    closeModal();
  }
});

modalBtn.forEach(btn => {
  btn.addEventListener('click', openModal);
});

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
).render();

new MenuCard(
  'My CSS.',
  'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as  SVG, MathML or XHTML). CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.',
  "./img/CSS.jpg",
  '.main .flex__row',
  'flex__item',  
  'item__text-activ',
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

//////////////////////////////////Get request///////////////////////////////////////
const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
  const request = new XMLHttpRequest();
  
  request.open('GET', 'js/current.json');
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.send();

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      // console.log(request.response);
      const data = JSON.parse(request.response);
      inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
    }else {
      inputUsd.value = "Something goes wrong";
    }
  });
});
//////////////////////////////////Post request///////////////////////////////////////

const forms = document.querySelectorAll('form');

const message = {
  loading: 'Loading',
  success: 'We will call you.',
  failure: 'Something went wrong...',
};

forms.forEach(item => {
  postData(item);  
});

function postData(form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let statusMessage = document.createElement('div');
    statusMessage.classList.add('btn');
    statusMessage.textContent = message.loading;
    form.appendChild(statusMessage);    

    const formData = new FormData(form);

    const object = {};
    formData.forEach(function(value,key) {
      object[key] = value;
    });

    fetch('server.php', {
      method: "POST",
      headers: {
        'Content-tupe': 'application/json'
      },
      body: JSON.stringify(object)
    })
    .then(data => {
      console.log(data);
      showThanksModal(message.success);
      statusMessage.remove();
    }).catch(() => {
      showThanksModal(message.failure);
    }).finally(() => {
      form.reset();
    });    
    
  });
}

function showThanksModal(message) {
  const prevModalDialog = document.querySelector('.modal__dialog');

  prevModalDialog.classList.add('hidden');
  openModal();

  const thanksModal = document.createElement('div');
  thanksModal.classList.add('modal__dialog');
  thanksModal.innerHTML = `
    <div class="modal__content">
      <div class="modal__close" data-close>x</div>
      <div class="modal__title">${message}</div>
    </div>      
  `;
  document.querySelector('.modal').append(thanksModal);
  setTimeout(() => {
    thanksModal.remove();
    prevModalDialog.classList.add('show');
    prevModalDialog.classList.remove('hidden');
    closeModal();
  }, 4000);
}

//////////////////////////////////Slider///////////////////////////////////////

const slides = document.querySelectorAll('.main__img'),
      sliderWrapper = document.querySelector('.slider__wrapper'),
      prev = document.querySelector('.prev__item'),
      next = document.querySelector('.next__item'),
      current = document.querySelector('.count__current'),
      total = document.querySelector('.count__total'),
      slidesWrapper = document.querySelector('.slide__wrapper'),
      slidesField = document.querySelector('.slide__wrapper-inner'),
      width = window.getComputedStyle(slidesWrapper).width;

let offset = 0;
let slideIndex = 1;


      function showDots(arr) {
        arr.forEach(dot => dot.style.opacity = '.5');
        arr[slideIndex - 1].style.opacity = 1;
      }

      if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
      } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
      }
    
      slidesField.style.width = 100 * slides.length + "%";
      slidesField.style.display = "flex";
      slidesField.style.transition = "0.5s all";
    
      slidesWrapper.style.overflow = "hidden";
    
      slides.forEach((slide) => {
        slide.style.width = width;
      });    

      sliderWrapper.style.position = 'relative';

      const indicators = document.createElement('ol'),
            dots = [];

      indicators.classList.add('carousel-indicators');
      sliderWrapper.append(indicators);

      
      for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');
        
        if (i == 0) {
          dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
      }

      function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
      }
      
      next.addEventListener("click", () => {
        if (offset == deleteNotDigits(width) * (slides.length - 1)) {
          offset = 0;
        } else {
          offset += deleteNotDigits(width);
        }
    
        slidesField.style.transform = `translateX(-${offset}px)`;
    
        if (slideIndex == slides.length) {
          slideIndex = 1;
        } else {
          slideIndex++;
        }
    
        if (slides.length < 10) {
          current.textContent = `0${slideIndex}`;
        } else {
          current.textContent = slideIndex;
        }

        showDots(dots);

      });
    
      prev.addEventListener("click", () => {
        if (offset == 0) {
          offset = deleteNotDigits(width) * (slides.length - 1);
        } else {
          offset -= deleteNotDigits(width);
        }
    
        slidesField.style.transform = `translateX(-${offset}px)`;
    
        if (slideIndex == 1) {
          slideIndex = slides.length;
        } else {
          slideIndex--;
        }
    
        if (slides.length < 10) {
          current.textContent = `0${slideIndex}`;
        } else {
          current.textContent = slideIndex;
        }

        showDots(dots);

      });

      dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
          const slideTo = e.target.getAttribute('data-slide-to');

          slideIndex = slideTo;
          offset = deleteNotDigits(width) * (slideTo - 1);

          slidesField.style.transform = `translateX(-${offset}px)`;

          showDots(dots);

          if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
          } else {
            current.textContent = slideIndex;
          }
        });
      });

//////////////////////////////////Инкапсуляция///////////////////////////////////////

class User {
  constructor(name, age) {
    // this._name = name;
    this._age = age;
  }
  #name = "Tigor";

  say() {
    console.log(`Name: ${this.name}, age: ${this._age}`);
  }

  get name() {
    return this._name
  }

  set name(name) {
    if (typeof name === 'string' && name.length > 0 && name.length < 18) {
      this._name = name;
    } else {
      console.log("name error!");
    }
  }

  get age() {
    return this._age;
  }

  set age(age) {
    if (typeof age === 'number' && age > 0 && age < 110) {
      this._age = age;
    } else {
      console.log('Error!');
    }
  }
}

const ivan = new User('Ivan', 27);
console.log(ivan.age);
ivan.age = 99;
console.log(ivan.age);
ivan.say();
ivan.name = 1+'sd';
console.log(ivan.name);

//////////////////////////////////функция генератор///////////////////////////////////////
function* generator() {
  yield 'I';
  yield 'g';
  yield 'o';
  yield 'r';
  yield 'o';
  yield 'k';
}

const str = generator();

console.log(str.next());
console.log(str.next());

//////////////////////////////////WebPack///////////////////////////////////////

const myModule = require('../js/main');

const myModuleInstance = new myModule();

myModuleInstance.hello();
myModuleInstance.goodbye();










});

