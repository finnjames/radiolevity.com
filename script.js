// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise(resolve => this.resolve = resolve);
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}


// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

document.addEventListener("DOMContentLoaded", function(event) { 

  var today = new Date();
  var dd = today.getDate();

  var mm = today.getMonth()+1; 
  var yyyy = today.getFullYear();
  if (dd<10) {
    dd='0'+dd;
  } 
  if (mm<10) {
    mm='0'+mm;
  } 

  var hours = today.getHours();
  var minutes = today.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;

  const phrases = [yyyy + "." + mm + "." + dd, strTime, /* 'everyone wants to build', 'but no one wants to do maintenance', */ ''];

  const el = document.querySelector('.text');
  const fx = new TextScramble(el);

  let counter = 0;

  function showHidden (id) {
    document.getElementById(id).style.visibility = 'visible';
  }

  const next = () => {
    if (counter < phrases.length) {
      fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 500);
      })
      counter = (counter + 1);
    } else {
      document.getElementsByClassName("dove")[0].style.visibility = 'visible';
      setTimeout(function(){ document.getElementsByClassName("dove")[1].style.visibility = 'visible'; document.getElementsByClassName("dove")[0].style.visibility = 'hidden';}, 160);
    }
  };

  next();
  
});