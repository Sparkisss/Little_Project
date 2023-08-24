// Функции высшего порядка
// function question(job) {
//   const jobDictionary = {
//     developer: 'what is JS',
//     teacher: 'what do you teach',
//   };
//   return function(name) {
//     return `${name}, ${jobDictionary[job]}?`;
//   };
// }
// const developerQuestions = question('developer');
// console.log(developerQuestions('Denis'));


// стрелочные функции
// const plus = (x, y) => x + y;
// const withoutArgs = () => console.log('Hello, bro');
// const singlArg = x => x * 2;
// const otherSingArg = (x = 2) => x * 2;
// const moreActions = (a, b) => {
//   a *= 2;
//   b *= 3;
//   return a * b;
// }
// const returnObj = (str = '') => ({
//   value: str,
//   length: str.length,
// });

// const obj = {
//   firstName: 'Igor',
//   age: 30,
//   getFirstName() {
//     console.log(this);
//   },
//   getAge: () => console.log(this),
// };
// obj.getAge();


// Перебирающие методы массива
// const users = [
//   {
//     _id: '4534',
//     index: 0,
//     isActive: false,
//     balance: 2341.9,
//     age: 33,
//     name: 'Tigrius Mars',
//     gender: 'male',
//     company: 'Z',
//     email: 'deca@mail.com',
//     phone: '+1 (842) 566-5555',
//     registered: '2015-07-12T09:39:03 -03:00'
//   },
//   {
//     _id: '4134',
//     index: 1,
//     isActive: false,
//     balance: 9341.9,
//     age: 41,
//     name: 'Marple Misis',
//     gender: 'female',
//     company: 'AZ',
//     email: 'fedeca@mail.com',
//     phone: '+1 (842) 732-5555',
//     registered: '2016-07-12T09:39:03 -03:00'
//   },
//   {
//     _id: '9130',
//     index: 2,
//     isActive: false,
//     balance: 321.9,
//     age: 21,
//     name: 'Cgarli Shin',
//     gender: 'male',
//     company: 'OZOZ',
//     email: 'fproxi@mail.com',
//     phone: '+1 (842) 732-3912',
//     registered: '2014-07-12T09:39:03 -03:00'
//   },
//   {
//     _id: '6380',
//     index: 3,
//     isActive: false,
//     balance: 7321.9,
//     age: 24,
//     name: 'CAlura Jenson',
//     gender: 'female',
//     company: 'Hab',
//     email: 'prhab@mail.com',
//     phone: '+1 (842) 690-6969',
//     registered: '2019-07-12T09:39:03 -03:00'
//   },
// ]
// users.forEach((user, i, arr) => {
//   console.log(user, i, arr);
// });

// const userLess30 = users.filter(user => user.age < 30);
// console.log(userLess30);
// const usersObj = users.reduce((acc, user) => {
//   acc[user._id] = user;
//   return acc;
// },
// );
// console.log(usersObj);
// object method
// let obj1 = {
//   name: 'Igor',
//   info: {
//     skills: ['html, css'],
//   },
// };
// let obj2 = {
//   name: 'TIgor',
//   age: 18,
// };
// let newObj = JSON.parse(JSON.stringify(obj2));
// console.log(newObj);


// const user = {
//   firstName: 'Denis',
//   lastName: 'Penis',
//   info: {
//     work: 'Easy-peasy',
//     skills: ['html', 'css'],
//   },
// };
// const {info: {work, skills} } = user;

// console.log(work, skills[1]);

// const colors = ['white', 'black', 'red', ['key', 'value']];
// const newColors = [...colors];
// console.log(...newColors);
// console.dir(colors);

// const div = document.querySelector('.about__text');

// const titles = document.querySelectorAll('h1');

// const link = div.querySelector('.link');
// div.classList.add('border');
// console.log(div.classList.contains('border'));
// console.log(div.classList);
// console.log(div.className);
// div.setAttribute('id', 'eager');
// div.id = 'noWar';
// console.log(div.dataset);
// console.groupCollapsed(document.links);

// Созданиен элемента
// const titles = document.querySelector('h1');
// const span = document.createElement('span');
// span.textContent = '   Apointment';
// span.classList.add('border');
// titles.appendChild(span);
// console.log(span);

// // Создание множества элементов
// const fragment = document.createDocumentFragment();
// const colors = ['black', 'red', 'white'];
// colors.forEach(color => {
//   const item = document.createElement('div');
//   item.classList.add('border');
//   item.style.background = color;

//   item.textContent = color;
//   fragment.appendChild(item);
// })
// document.body.appendChild(fragment);


// События основы
// const btn = document.querySelector('.logo');
// const link = document.querySelector('.a');
// const free = document.querySelector('.fristail');

// btn.addEventListener('click', function(e) {
//   console.log(e);
// });

// link.addEventListener('click', function(e) {
//   console.log('click');
// })

// btn.addEventListener('click', e => {
//   const div = document.createElement('div');
//   const nestedBtn = document.createElement('button');
//   div.textContent = Math.random();
//   nestedBtn.textContent = 'button';
//   div.appendChild(nestedBtn);
//   free.appendChild(div);
// });

// free.addEventListener('click', e => {
//   if (e.target.tagName === 'BUTTON') {
//     console.log('CREAT');
//   }
// });

// Всплытие и перехват
// const btn = document.querySelector('.btn');
// const wrap = document.querySelector('.wrap');

// btn.addEventListener('click', e => {
//   // e.stopPropagation();
//   console.log('click - btn');
// });
// wrap.addEventListener('click', e => {
//   console.log('click - wrap');
// });

// btn.addEventListener('click', e => {
//   // e.stopPropagation();
//   console.log('click - btn');
// }, true);
// wrap.addEventListener('click', e => {
//   console.log('click - wrap');
// }, true);

// Введение в AJAX
const btn = document.querySelector('.btn');
const wrap = document.querySelector('.wrap');
const explor = document.querySelector('.explor');

function getPosts(callBack) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
  xhr.addEventListener('load', () => {
    const response = JSON.parse(xhr.responseText);
    callBack(response);
}); 

xhr.addEventListener('error', () => {
  console.log('error');
  });

xhr.send();

}

btn.addEventListener('click', e => {
  const fragment = document.createDocumentFragment();
  getPosts(response => {
    response.forEach(post => {
      const card = document.createElement('div');
      card.textContent = post.title;
      card.classList.add('tilt');
      console.log(card);
      fragment.appendChild(card);
    });
    explor.appendChild(fragment);
  });
});
