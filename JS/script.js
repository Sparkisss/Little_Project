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
const users = [
  {
    _id: '4534',
    index: 0,
    isActive: false,
    balance: 2341.9,
    age: 33,
    name: 'Tigrius Mars',
    gender: 'male',
    company: 'Z',
    email: 'deca@mail.com',
    phone: '+1 (842) 566-5555',
    registered: '2015-07-12T09:39:03 -03:00'
  },
  {
    _id: '4134',
    index: 1,
    isActive: false,
    balance: 9341.9,
    age: 41,
    name: 'Marple Misis',
    gender: 'female',
    company: 'AZ',
    email: 'fedeca@mail.com',
    phone: '+1 (842) 732-5555',
    registered: '2016-07-12T09:39:03 -03:00'
  },
  {
    _id: '9130',
    index: 2,
    isActive: false,
    balance: 321.9,
    age: 21,
    name: 'Cgarli Shin',
    gender: 'male',
    company: 'OZOZ',
    email: 'fproxi@mail.com',
    phone: '+1 (842) 732-3912',
    registered: '2014-07-12T09:39:03 -03:00'
  },
  {
    _id: '6380',
    index: 3,
    isActive: false,
    balance: 7321.9,
    age: 24,
    name: 'CAlura Jenson',
    gender: 'female',
    company: 'Hab',
    email: 'prhab@mail.com',
    phone: '+1 (842) 690-6969',
    registered: '2019-07-12T09:39:03 -03:00'
  },
]
// users.forEach((user, i, arr) => {
//   console.log(user, i, arr);
// });

// const userLess30 = users.filter(user => user.age < 30);
// console.log(userLess30);
const usersObj = users.reduce((acc, user) => {
  acc[user._id] = user;
  return acc;
},
);
console.log(usersObj);