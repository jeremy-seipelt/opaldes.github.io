window.onload = function () {
  toc = document.getElementById('markdown-toc');
  console.log(toc);
  panel = document.getElementById('insert-toc');
  panel.appendChild(toc);
}


document.onscroll = function () {
  sticky= document.getElementById("custom-toc");
  coords = sticky.getBoundingClientRect();
  if (coords.top < 200) {
    sticky.className = sticky.className + " affix" 
  } {
    sticky.className = sticky.className.split(" affix").join('');
  };
} 
