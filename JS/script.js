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

///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////

const main = document.querySelector('.main'),
      imgSkills = main.querySelectorAll('img'),
      head = document.querySelector('.know'),
      menuBtn = document.querySelectorAll('.menu li');

imgSkills.forEach((item, i) => {
  if (i === 1) {
    console.log(item);
  }else imgSkills[i].classList.add('item__img_test');  
});

if (menuBtn[1].classList.contains('link')) {
  console.log('d'); 
};

head.addEventListener('click', (event) => {
  event.preventDefault();
  const target = event.target;
  
  
  if (target && target.classList.contains('link')) {
    console.log('click');
  }
});






});
