"use strict"
window.addEventListener('DOMContentLoaded', () => {
// Введение в AJAX
const btn = document.querySelector('.btn');
const btnGet = document.querySelector('.btn-get-posts');
const btnAddPost = document.querySelector('.btn-add-posts ');
const explor = document.querySelector('.explor');

function getPosts(callBack) {

}

function createPost(body, callBack) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
  xhr.addEventListener('load', () => {
    const response = JSON.parse(xhr.responseText);
    callBack(response);
}); 
xhr.setRequestHeader("Content-type", "application/json;charset=UTF8")

  xhr.addEventListener('error', () => {
    console.log('error');
  });
  xhr.send(JSON.stringify(body));
}
function cardTemplate(post) {
    const card = document.createElement('div');
    card.classList.add('tilt');
    const cardBody = document.createElement('div');
    const title = document.createElement('h5');
    title.classList.add('tilt');
    title.textContent = post.title;
    const article = document.createElement('p');
    article.classList.add('textus');
    article.textContent = post.body;
    cardBody.appendChild(title);
    cardBody.appendChild(article);
    card.appendChild(cardBody);
    return card;
}

function renderPosts(response) {
  const fragment = document.createDocumentFragment();
  response.forEach(post => {
      const card = cardTemplate(post);
      fragment.appendChild(card);
    });
    explor.appendChild(fragment);
}

btn.addEventListener('click', e => {
  getPosts(renderPosts);
});
btnAddPost.addEventListener('click', (e) => {
  const newPost = {
    title: 'foo',
    body: 'bar',
    userId: 1,
  };
  createPost(newPost, response => {
    const card = cardTemplate(response);
    explor.insertAdjacentElement('afterbegin', card);
  });
});

function myHttpRequest({method, url} = {}, callBack) {
  try{
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.addEventListener('load', () => {
    if (Math.floor(xhr.status / 100) !== 2) {
      callBack(`Error. Status code: ${xhr.status}`, xhr);
      return; 
    }
    const response = JSON.parse(xhr.responseText);
    callBack(null, response);
}); 
  xhr.addEventListener('error', () => {
    callBack(`Error. Status code: ${xhr.status}`, xhr);
  });
  xhr.send();
  }catch (error){
    callBack(error);
  }
}

// myHttpRequest(
//   {
//     method:'GET',
//     url: 'https://jsonplaceholder.typicode.com/posts',
//   },
//   (err ,res) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log(res);
//   },
// );

function http() {
  return {
    get(url, callBack) {
        try{
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', () => {
    if (Math.floor(xhr.status / 100) !== 2) {
      callBack(`Error. Status code: ${xhr.status}`, xhr);
      return; 
    }
    const response = JSON.parse(xhr.responseText);
    callBack(null, response);
}); 
  xhr.addEventListener('error', () => {
    callBack(`Error. Status code: ${xhr.status}`, xhr);
  });
  xhr.send();
  }catch (error){
    callBack(error);
  }
},


post(url, body, headers, callBack) {
      try{
  const xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  xhr.addEventListener('load', () => {
    if (Math.floor(xhr.status / 100) !== 2) {
      callBack(`Error. Status code: ${xhr.status}`, xhr);
      return; 
    }
    const response = JSON.parse(xhr.responseText);
    callBack(null, response);
}); 
  xhr.addEventListener('error', () => {
    callBack(`Error. Status code: ${xhr.status}`, xhr);
  });

  if (headers) {
    Object.entries(headers).forEach(([key, value]) => {
      xhr.setRequestHeader(key, value);
    })
  }

  xhr.send(JSON.stringify(body));
  }catch (error){
    callBack(error);
  }
    },
  };
}

const myHttp = http();

// myHttp.post(
//   'https://jsonplaceholder.typicode.com/posts',
//   {
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   },
//   { 'Content-Type': 'application/json',
//     'Stars': 'trigers'},
//   (err, res) => {
//     console.log(err, res);
//   },
// );

myHttp.get(
  `https://jsonplaceholder.typicode.com/posts`,
  (err, res) => {
    if(err) {
      console.log('error', err);
      return;
    }
    myHttp.get(
      `https://jsonplaceholder.typicode.com/comments?postId=1`,
      (err, res) => {
        if(err) {
          console.log('error', err);
          return;
        }
        myHttp.get(
          `https://jsonplaceholder.typicode.com/users/1`,
          (err, res) => {
            if(err) {
              console.log('error', err);
              return;
            }
            // console.log('end');
          },
        );
      },
    );
  },
);

function getPost(id) {
  return new Promise((resolve, reject) => {
    myHttp.get(`https://jsonplaceholder.typicode.com/posts/${id}`, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
}

function getPostComments(post) {
  const { id } = post;
  return new Promise((resolve, reject) => {
    myHttp.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve({post, comments: res});
    });
  });
}

function getUserCreatePost(data) {
  const { post: {userId},
  } = data;
  return new Promise((resolve, reject) => {
      myHttp.get(`https://jsonplaceholder.typicode.com/users/${userId}`, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve({...data, user:res });
      });
    });
}

// getPost(51)
// .then(post => getPostComments(post))
// .then(data => getUserCreatePost(data))
// .then(fulldata => console.log(fulldata))
// .catch(err => console.log(err))
// .finally(() => console.log('finally'));


function getPost2(id) {
  return new Promise((resolve, reject) => {
    myHttp.get(`https://jsonplaceholder.typicode.com/posts/${id}`, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
}

function getPostComments2(id) {
  return new Promise((resolve, reject) => {
    myHttp.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
}

function getUserCreatePost2(userId) {
  return new Promise((resolve, reject) => {
      myHttp.get(`https://jsonplaceholder.typicode.com/users/${userId}`, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
}

Promise.all([
  getPost2(1),
  getPostComments2(1),
  getUserCreatePost2(1),
]).then(([post, commenys, user]) => console.log(post, commenys, user))
.catch(err => console.log(err));

/////////////////////////////////////Отработка нажатия кнопки//////////////////////////////////////////

const headBtn = document.querySelectorAll('.link'),
      parentHeadBtn = document.querySelector('.header'),
      textInfo = document.querySelectorAll('.item__text'),
      btnStyle = document.querySelector('a');
      

function showUseSkills (a, b, c, d, e, f) {
  textInfo.forEach((item, index) => {
    if (item === textInfo[a] || item === textInfo[b] || item === textInfo[c] 
      || item === textInfo[d] || item === textInfo[e] || item === textInfo[f]){

      textInfo[index].classList.add('item__text-activ');

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
  const target = event.target;  

  if (target && target.tagName === 'SPAN') {
    console.log('fdd');
  } 
  
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

/////////////////////////////////////Map and Set//////////////////////////////////////////

const shops = [
  {rice: 500},
  {oil: 200},
  {bread: 50},
];

const budget = [5000, 15000, 25000];
const map = new Map();

shops.forEach((shop, i) => {
  map.set(shop, budget[i]);
});

for ( let [shop, price] of map.entries()) {
  // console.log(price,shop);
}

const arr = [1, 1, 2, 2, 4, 5, 6, 5];

const set = new Set(arr);
set.add(3);
set.delete(1);

set.forEach((value, valueAgaing, set) => {
  // console.log(value, valueAgaing);
})

/////////////////////////////////////Дескрипторы//////////////////////////////////////////

const user = {
  name: 'Tigor',
  surname: 'Mister',
  birthday: '20/04/1999',
  showMyPublicData: function() {
    console.log(`${this.name} ${this.surname}`);
  }
}

Object.defineProperty(user, 'name', {writable: false});
Object.defineProperty(user, 'gender', {value: 'male'});
// Object.defineProperty(user, 'brithday', {value: prompt('Date?'), enumerable: true, configurable: true});
console.log(Object.getOwnPropertyDescriptor(user, 'brithday'));
console.log(user);

//////////////////////////////////Part 3 Task 1///////////////////////////////////////

function amountOfPages(summary){
  let result = '';
  let n = 0;

  for (let i = 1; i <= summary; i++) { 
    result += i;    
    if (result.length === summary) {
      
      n = i;
      break;
    }
  }

  return n;
}

let result = amountOfPages(25);
// console.dir(result);

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
  clearInterval(modalTimerId);
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

const modalTimerId = setTimeout(openModal, 10000);

function showModalByScroll() {
  if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
    openModal();
    window.removeEventListener('scroll', showModalByScroll);
  }
}

window.addEventListener('scroll', showModalByScroll);




});

