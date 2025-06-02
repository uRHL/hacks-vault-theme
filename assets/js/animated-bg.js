document.querySelector('body').style.display = 'none'; //Hide content until DOM loaded

function animateBackground(){
  document.querySelector('main svg').classList.remove('transparent');
  var paths = document.querySelectorAll('.st0');

  [].forEach.call(paths, function(path) {
    var length = path.getTotalLength();
    path.style.transition = path.style.WebkitTransition = 'none';
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;
    path.getBoundingClientRect();
    path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 3.5s ease-in-out';

    path.style.strokeDashoffset = '0';
  })
}

function getTextWidth(elem){
  const style = window.getComputedStyle(elem);

  // Construct the full font shorthand used by canvas
  const font = `${style.fontStyle} ${style.fontVariant} ${style.fontWeight} ${style.fontSize} / ${style.lineHeight} ${style.fontFamily}`;

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  context.font = font;
  return context.measureText(elem.textContent.trim()).width;  // Measure the text content
  
}

function updateChipLegs() {
  const chip = document.querySelector('h1.dynamic-title.chip-header');
  //const width = chip.offsetWidth;
  const width = getTextWidth(chip);

  const pinSpacingPx = 9; // distance between pins
  const pinWidthPx = 6;    // width of a single pin
  const pinCount = Math.floor(width / pinSpacingPx);

  if (pinCount === 0) {
    chip.style.setProperty('--pin-background', 'none');
    return;
  }

  const totalPinWidth = pinCount * pinSpacingPx;
  console.log(`Width: ${width}px → ${pinCount} pins`);
  const pinGradient = `repeating-linear-gradient(
    to right,
    transparent 0%,
    transparent ${10 - pinWidthPx / 2}px,
  #81b45b ${10 - pinWidthPx / 2}px,
  #81b45b ${10 + pinWidthPx / 2}px,
    transparent ${10 + pinWidthPx / 2}px
  )`;
//140 · x = 255 => x = 255/140
  chip.style.setProperty('--pin-background', `${pinGradient}, ${pinGradient}`);
  chip.style.setProperty('--pin-size', `${(Math.floor(totalPinWidth*1.8/3) - 6)*3}px 10px`);
  chip.style.setProperty('--pin-repeat', 'no-repeat');//'repeat-x');
  chip.style.setProperty('--pin-position', 'top, bottom');
}

function toggleBackgroundColor(){
  //TODO: change background color 
  // if no search results
  if (document.querySelectorAll('#search-results > article').length === 0) {
    document.querySelector('#search-result-wrapper').style.backgroundColor = 'transparent';
    document.querySelector('#search-result-wrapper > div.content').style.backgroundColor = 'transparent';
    document.querySelector('#search-result-wrapper > div.content > svg').style.display = 'none';
  } else {
    document.querySelector('#search-result-wrapper').style = "";
    document.querySelector('#search-result-wrapper > div.content').style = "";
    document.querySelector('#search-result-wrapper > div.content > svg').style = "";
    document.querySelector('#search-result-wrapper > div.content > svg').classList.remove('transparent');
  }
}

async function terminalAnimation(){

  function typingAnimation(elem, text, index=0){
    text = text.replaceAll('>', ' ');
    if(index == 0){
      elem.textContent = '';
    }
    elem.parentElement.classList.remove('transparent');
    elem.classList.remove('transparent');
    
    if (index < text.length) {
      //setTimeout(typingAnimation, 111, elem, text, index)
      //console.log(text);
      elem.textContent += text[index]==undefined?'':text[index];
      index++;
      return new Promise((resolve) => {
        setTimeout(() => resolve(typingAnimation(elem, text, index)), 100);
      });
    }else {
      return
    } 
  }

  async function printlnAnimation(elem){
    const MAX_LINE_CLAMP = 5;
    elem.style.opacity = 1; 
    elem.style.webkitLineClamp++;
    switch(Number(elem.style.webkitLineClamp)){
      case 1:
      case 2:
        //{show contact-animate-fadein}
        //setTimeout(() => resolve(printlnAnimation, elem), 1300);
        return new Promise((resolve) => {
            setTimeout(() => resolve(printlnAnimation(elem)), 2000);
          });
      case 3:
        //{show posts-animation-fadein, animateBackground}
        //setTimeout(() => resolve(printlnAnimation, elem), 1300);
        new Promise((resolve) => {
          resolve(animateAll('#sidebar nav'))
        }).then(()=>{
          return new Promise((resolve) => {
            setTimeout(() => resolve(printlnAnimation(elem)), 4000);
          });
        });
        //return new Promise((resolve) => {
        //  setTimeout(() => resolve(printlnAnimation(elem)), 1300);
        //});
      case 4:
        //{show tabs-animate-typeText}
        //await animateAll('#sidebar nav');
        return new Promise((resolve) => {
          setTimeout(() => resolve(printlnAnimation(elem)), 2000);
        });
        return new Promise((resolve) => {
          resolve(animateAll('#sidebar nav'))
        });
        //setTimeout(() => resolve(printlnAnimation, elem), 1200);
      case MAX_LINE_CLAMP:
        setTimeout(async () => {
            await typingAnimation(
              document.querySelector('#sidebar > header > span.site-subtitle'),
              document.querySelector('#sidebar > header > span.site-subtitle').textContent,
              0
            )
            animateBackground();
            //return new Promise((resolve) => {
            //  resolve(animateAll('#sidebar > header > span.site-subtitle'));
            //});
          }, 2300);
    }
      //return new Promise((resolve) => {
      //  setTimeout(() => resolve(printlnAnimation(elem)), 1500);
      //});
  }

  async function animateAll(selector) {
    const elements = Array.from(document.querySelectorAll(selector));
    for (let i = 0; i < elements.length; i++) {
      const el = elements[i];
      const text = el.textContent;
      console.warn("DEBUG", el.nodeName);
      switch(el.nodeName){  
        case 'SPAN':
        case 'A':
          //el.textContent = '';  
          //el.style.opacity = 1;
          await typingAnimation(el, text, 0)//.then(() => {
          //resolve();
          //});
          //resolve(); // Proceed to next element
          break;
        case 'P':
          //el.style.opacity = 1;
          el.classList.remove('transparent');
          await printlnAnimation(el)//.then(() => {
          //resolve();
          //});
          break;
        case 'NAV':
          //for rows in nav, typeText(row)
          let navBefore = Array.from(document.querySelectorAll('#sidebar span.var-preffix'));
          let navItems = Array.from(document.querySelectorAll('#sidebar nav a > span:last-child'));
          for (let i = 0; i < navItems.length; i++) {
            navBefore[i].classList.remove('transparent');
            await typingAnimation(navItems[i], navItems[i].textContent, 0);
          }
          break;
        default:
          console.log("DEBUG", el.nodeName);
    }
      //await typeText(el, text); // Wait before typing next
    }
    
  }
  // Run animation for all <a> and <p> el ements (in order)
  animateAll("#sidebar > header > a, #sidebar > header > p");//, #sidebar > nav");
  
}
//document.addEventListener('DOMContentLoaded', animateBackground);
document.addEventListener('DOMContentLoaded', async () => {
  document.querySelector('body').style.display = 'block';
  if(new URL(document.URL).pathname == '/'){ // home page
    await terminalAnimation();
    //animateBackground();
  } else {
    const p = document.querySelector('#sidebar > header > p')
    p.style.webkitLineClamp = 10; // Ensure all lines are displayed
    p.classList.remove('transparent');

    document.querySelector('#sidebar > header > span.site-subtitle').classList.remove('transparent');
    // TODO: remove transparent
    Array.from(document.querySelectorAll('#sidebar nav a.nav-link')).forEach(e => {
      e.classList.remove('transparent');
      e.style.opacity = 1;

      const children = e.querySelectorAll('span');
      //children[0].style.opacity = 1;
      children[0].classList.remove('transparent');
      children[1].classList.remove('transparent');// = '0.5 !important';
      children[2].classList.remove('transparent');
      
    });
    updateChipLegs();
    animateBackground();
  }
  

});
//document.addEventListener('resize', updateChipLegs); // Update on load and resize
document.getElementById('search-input').addEventListener('selectionchange', toggleBackgroundColor);

