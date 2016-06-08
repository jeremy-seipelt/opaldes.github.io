window.addEventListener('load', function(){
  toc = document.getElementById('markdown-toc');
  console.log(toc);
  panel = document.getElementById('insert-toc');
  panel.appendChild(toc);
  
  bar = document.getElementById("custom-toc");
  if (bar.offsetHeight > window.innerHeight && !bar.className.includes('pre-scrollable')) {
    bar.className = bar.className + " pre-scrollable";
  };
},true)

window.addEventListener('resize', function(){
  console.log('RESIZE')
  bar = document.getElementById("custom-toc");
  if (bar.offsetHeight > window.innerHeight && !bar.className.includes('pre-scrollable')) {
    bar.className = bar.className + " pre-scrollable";
  }else if(bar.offsetHeight < window.innerHeight) {
    bar.className = bar.className.split(' pre-scrollable').join('');
  };
}, true)


document.addEventListener('scroll', function(){
  sticky = document.getElementById("toc-panel");
  content = document.getElementById("topics");
  coords = content.getBoundingClientRect();
  widthToc = sticky.offsetWidth; 
  console.log(window.innerWidth);
  console.log(window.innerHeight);
  console.log(content.offsetHeight)
  if (coords.bottom <= 0 && window.innerWidth > 990) {
    sticky.className = sticky.className.split(' affix').join('');
    sticky.className = sticky.className + " affix" 
    sticky.style = "top:38px; width:" + widthToc + "px;";
    console.log(coords)
  }else{
    sticky.className = sticky.className.split(' affix').join('');
    sticky.style = "";
  };
},true) 
