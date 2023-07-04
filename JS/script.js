function makePhrases() {
  let world1 = ['24/7', 'multi-tier', '30000 foot', 'B-to-B', 'win-win'];
  let world2 = ['emprowered', 'value-added', 'oriented', 'focused', 'aligned'];
  let world3 = ['process', 'solution', 'tripping-point', 'strategy', 'vision'];

  let rand1 = Math.floor(Math.random() * world1.length);
  let rand2 = Math.floor(Math.random() * world2.length);
  let rand3 = Math.floor(Math.random() * world3.length);

  let phrase = world1[rand1] + ' ' + world2[rand2] + ' ' + world3[rand3] + '.';
  alert(phrase);
}

makePhrases();