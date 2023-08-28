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
