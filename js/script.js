window.onload = function () {
  toc = document.getElementById('markdown-toc');
  console.log(toc);
  panel = document.getElementById('insert-toc');
  panel.appendChild(toc);
}


document.onscroll = function () {
  sticky = document.getElementById("custom-toc");
  header = document.getElementById("header");
  coords = header.getBoundingClientRect();
  if (coords.top < 20) {
    sticky.className = sticky.className + " affix" 
    sticky.style = "top:38px;";
    console.log(coords)
  }else{
    sticky.className = sticky.className.split(' affix').join('');
    sticky.style = "";
  };
} 
