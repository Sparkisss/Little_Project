function cards() {
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
}

module.exports = cards;